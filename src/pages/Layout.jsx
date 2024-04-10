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
            <Link to="/template" className="nav-link-text">
              Recipes
            </Link>
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
