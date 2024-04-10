import * as React from "react";
import { Link } from "gatsby";
import Layout from "./Layout";
import Seo from "../Seo";

export default function AboutPage() {
  return (
    <Layout pageTitle="About Me">
      <p>
        School stress has driven me to play Club Penguin. On the bright side
        puffles are now free
      </p>
    </Layout>
  );
}

export const Head = () => <Seo title="About" />;
