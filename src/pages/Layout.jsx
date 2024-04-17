import * as React from "react";
import { Link } from "gatsby";
import "./Layout.css";
import { useStaticQuery, graphql } from "gatsby";
// import RecipeTemplate from "./recipes/template";
// import Recipe from "./recipe";
export default function Layout({ pageTitle, children, pageContext }) {
  const recipe = pageContext;
  console.log(recipe);
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
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container">
      <header>{data.site.siteMetadata.title}</header>

      <nav>
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/" className="nav-link-text">
              Home
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/AboutPage" className="nav-link-text">
              About
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/Blog" className="nav-link-text">
              BlogPage
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/recipesPage" className="nav-link-text">
              Recipes
            </Link>
            {/* <div className="recipe-grid">
              {data.Drupal.nodeRecipes.edges.map((edge, index) => (
                <Link key={index} to={edge.node.path} className="recipe-link">
                  <h3 style={{ color: "white", paddingTop: 0 }}>
                    {edge.node.title}
                  </h3>
                </Link>
              ))}
            </div> */}
          </li>
        </ul>
      </nav>

      <main>
        <h1 className="heading">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}
