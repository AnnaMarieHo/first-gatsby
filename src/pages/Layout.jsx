import * as React from "react";
import { Link } from "gatsby";
import "./Layout.css";

export default function Layout({ pageTitle, children }) {
  return (
    <div className="container">
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
        </ul>
      </nav>
      <main>
        <h1 className="heading">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}
