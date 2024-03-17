const { type } = require("os");
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  const slug = node.path;
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const pathToTemplate = path.resolve(`./src/pages/template.js`);

    // Fetch data from Drupal
    resolve(
      graphql(`
        query {
          Drupal {
            nodeRecipes(first: 10) {
              edges {
                node {
                  id
                  path
                }
              }
            }
          }
        }
      `).then((result) => {
        const recipePages = result.data.Drupal.nodeRecipes.edges;
        recipePages.forEach(({ node }) => {
          const recipePath = node.path;
          console.log("NODE: ", node);
          console.log();
          console.log("NODE ID: ", node.id);
          console.log();
          console.log("NODE PATH: ", node.path);
          console.log();

          console.log("PATH TYPE: ", typeof node.path);
          console.log();
          console.log("ID TYPE: ", typeof node.id);
          console.log();
          console.log("NODE TYPE: ", typeof node);
          createPage({
            path: `${recipePath}`,
            component: pathToTemplate,
            context: {
              recipeId: node.id,
              recipePath: node.path,
            },
          });
        });
      })
    );
  });
};
