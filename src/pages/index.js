import * as React from "react";
import Component1 from "../Components/Component1";
import AboutPage from "./AboutPage";
import { Link } from "gatsby";
import Layout from "./Layout";
import { StaticImage } from "gatsby-plugin-image";

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

export const Head = () => <title>Home Page</title>;
export default IndexPage;
