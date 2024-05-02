import React from "react";
import { Link } from "gatsby";
import Layout from "./Layout";
import { useStaticQuery, graphql } from "gatsby";

const RecipeTemplate = (props) => {
  const data = useStaticQuery(graphql`
    query {
      Drupal {
        nodeRecipes(first: 10) {
          edges {
            node {
              path
              title
            }
          }
        }
      }
    }
  `);

  const hasPageContextData = props.pageContext && props.pageContext.recipeData;
  console.log("HAS CONTENT", hasPageContextData);

  return (
    <Layout>
      <>
        <div className="recipe-grid">
          {data.Drupal.nodeRecipes.edges.map((edge, index) => (
            <Link key={index} to={edge.node.path} className="recipe-link">
              <h3 style={{ color: "white", paddingTop: 0 }}>
                {edge.node.title}
              </h3>
            </Link>
          ))}
        </div>
        {hasPageContextData && ( // Conditionally render content if props.pageContext has data
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              fontFamily: "sans-serif",
              margin: 70,
            }}
          >
            <h1 style={{ color: "purple" }}>Recipes</h1>
            <div
              style={{
                display: "flex",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: 30,
                width: 350,
                padding: 30,
                margin: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  textDecoration: "none",
                  margin: 30,
                }}
              >
                <h2
                  style={{
                    textDecoration: "none",
                    color: "purple",
                  }}
                >
                  {props.pageContext.recipeData.title}
                </h2>
                <p style={{ fontWeight: "bold", marginTop: 50 }}>Difficulty:</p>
                {props.pageContext.recipeData.difficulty}
                <p style={{ fontWeight: "bold", marginTop: 50 }}>
                  Ingredients:
                </p>
                {props.pageContext.recipeData.ingredients.map(
                  (ingredient, index) => (
                    <p key={index}>{ingredient}</p>
                  )
                )}

                <img
                  src={props.pageContext.recipeData.mediaImage.mediaImage.url}
                  alt={props.pageContext.recipeData.title}
                  style={{
                    margin: 30,
                    borderRadius: 20,
                    maxWidth: "250px",
                    maxHeight: "250",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </>
    </Layout>
  );
};
export default RecipeTemplate;
