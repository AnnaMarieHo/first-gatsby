import React from "react";
import Layout from "./Layout";
// AnotherFile.js

// Now you can use the RecipeNode type in this file

const RecipeTemplate = (props) => {
  console.log("PROPS", props);
  const data = {
    node: props.pageContext.data,
  };

  console.log("DATA", data.node);
  // const recipeId = props.pageContext;

  // console.log("NODE DATA: ", recipeId);

  return (
    <Layout pageTitle="Recipes">
      <div>
        <h1>Recipe ID: {typeof data.node}</h1>
      </div>
    </Layout>
  );
};
export default RecipeTemplate;
// RecipeTemplate.propTypes = { data: propTypes.object.isRequired };
// export const query = graphql`
//   query ($recipeId: ID!) {
//     Drupal {
//       nodeRecipe(id: $recipeId) {
//         title
//       }
//     }
//   }
// `;

/**?
 * query MyQuery {
  Drupal {
    nodeRecipes(first: 10) {
      edges {
        node {
          id
          path
          ingredients
          cookingTime
          difficulty
          title
        }
      }
    }
  }
}
 */
