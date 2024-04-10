import React from "react";
import Layout from "./Layout";

const RecipeTemplate = (props) => {
  console.log("PROPS", props);
  const data = {
    node: props.pageContext.recipeData,
  };

  console.log("DATA", props);

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
              {/* {props.pageContext.recipeData.title} */}
              {props.pageContext.recipeData.title}
            </h2>
            <p style={{ fontWeight: "bold", marginTop: 50 }}>Difficulty:</p>
            {props.pageContext.recipeData.difficulty}
            <p style={{ fontWeight: "bold", marginTop: 50 }}>Ingredients:</p>
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
    </Layout>
  );
};
export default RecipeTemplate;
