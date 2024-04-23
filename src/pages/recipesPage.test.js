import React from "react";
import { render, screen } from "@testing-library/react";
import RecipesPage from "./recipesPage";
import * as Gatsby from "gatsby";

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);
const mockData = {
  Drupal: {
    nodeRecipes: {
      edges: [
        { node: { path: "/recipe/recipe-name-one", title: "Recipe one" } },
        { node: { path: "/recipe/recipe-name-two", title: "Recipe two" } },
        { node: { path: "/recipe/recipe-name-three", title: "Recipe three" } },
        { node: { path: "/recipe/recipe-name-four", title: "Recipe four" } },
        { node: { path: "/recipe/recipe-name-five", title: "Recipe five" } },
        { node: { path: "/recipe/recipe-name-six", title: "Recipe six" } },
        { node: { path: "/recipe/recipe-name-seven", title: "Recipe seven" } },
        { node: { path: "/recipe/recipe-name-eight", title: "Recipe eight" } },
        { node: { path: "/recipe/recipe-name-nine", title: "Recipe nine" } },
        { node: { path: "/recipe/recipe-name-ten", title: "Recipe ten" } },
      ],
    },
  },
  site: {
    siteMetadata: {
      title: "Site Title",
    },
  },
};

useStaticQuery.mockImplementation(() => mockData);

describe("RecipesPage", () => {
  test("renders RecipeTemplate component with correct data", () => {
    render(<RecipesPage />);

    mockData.Drupal.nodeRecipes.edges.forEach(({ node }) => {
      const recipeLink = screen.getByRole("link", { name: node.title });
      //   expect(typeof node.path).toBe("string");
      expect(node.path).toBeTruthy();
      //   expect(typeof node.title).toBe("string");
      expect(node.title).toBeTruthy();
      expect(recipeLink).toBeInTheDocument();
    });
  });
});
