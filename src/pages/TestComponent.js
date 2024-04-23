import * as React from "react";

import Seo from "../Seo";

export default function AboutPage() {
  return (
    <p
      style={{
        width: 150,
        backgroundColor: "gray",
        height: 100,
        borderRadius: "50%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      This my test component
    </p>
  );
}

export const Head = () => <Seo title="About" />;
