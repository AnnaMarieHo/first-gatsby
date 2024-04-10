import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../pages/Layout";
import Seo from "../Seo";

export default function Recipes() {
  const data = useStaticQuery(graphql`
    query {
      Drupal {
        nodeRecipes(first: 10) {
          nodes {
            ingredients
            difficulty
            id
            changed
            cookingTime
            title
            mediaImage {
              mediaImage {
                styles {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);
  const recipes = data.Drupal.nodeRecipes.nodes;
  // console.log(recipes.mediaImage.mediaImage.styles.url);

  return (
    <Layout pageTitle="Recipes">
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
        {/* <ul style={{ listStyleType: "none", padding: 0 }}> */}
        {recipes.map((recipe, index) => (
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
                {recipe.title}
              </h2>
              <p style={{ fontWeight: "bold", marginTop: 50 }}>Difficulty:</p>
              {recipe.difficulty}
              <p style={{ fontWeight: "bold", marginTop: 50 }}>Ingredients:</p>
              {recipe.ingredients.map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
              ))}
              <img
                src={recipe.mediaImage.mediaImage.styles[0].url}
                alt={recipe.title}
                style={{
                  margin: 30,
                  borderRadius: 20,
                  maxWidth: "250px",
                  maxHeight: "250",
                }} // Adjust maximum width and height as needed
              />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="Recipes" />;
