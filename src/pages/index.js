import * as React from "react";
import AboutPage from "./AboutPage";
import { Link } from "gatsby";
import Layout from "./Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../Seo";
// import Recipes from "../Components/Recipes";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I designed a rainbow magic fairy. So cool. So stylish.</p>
        <StaticImage
          src="../images/rainbow-magic.png"
          alt="Custom Rainbow Magic Fairy. It's creative and inspired really"
        />
      </Layout>
    </main>
  );
};

export const Head = () => <Seo title="Home" />;
export default IndexPage;
