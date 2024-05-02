const { type } = require("os");
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  const slug = node.path;
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const pathToTemplate = path.resolve(`./src/pages/recipe.js`);

    // Fetch data from Drupal
    resolve(
      graphql(`
        query {
          Drupal {
            nodeRecipes(first: 10) {
              edges {
                node {
                  id
                  cookingTime
                  difficulty
                  ingredients
                  path
                  mediaImage {
                    mediaImage {
                      url
                    }
                  }
                  numberOfServings
                  preparationTime
                  title
                  summary {
                    processed
                  }
                }
              }
            }
          }
        }
      `).then((result) => {
        const recipePages = result.data.Drupal.nodeRecipes.edges;
        console.log("RECIPE PAGES: ", recipePages);
        recipePages.forEach(({ node }) => {
          const recipePath = node.path;
          console.log("NODE: ", node);

          createPage({
            path: `${recipePath}`,
            component: pathToTemplate,
            context: {
              recipeId: node.id,
              recipePath: node.path,
              recipeData: node,
            },
          });
        });
      })
    );
  });
};
