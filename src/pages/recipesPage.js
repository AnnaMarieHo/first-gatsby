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

  return (
    <Layout>
      <div className="recipe-grid">
        {data.Drupal.nodeRecipes.edges.map((edge, index) => (
          <Link key={index} to={edge.node.path} className="recipe-link">
            <h3 style={{ color: "white", paddingTop: 0 }}>{edge.node.title}</h3>
          </Link>
        ))}
      </div>
    </Layout>
  );
};
export default RecipeTemplate;
