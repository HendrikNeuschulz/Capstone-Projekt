import styled from "styled-components";
import FoodCard from "../components/FoodCard";
import recipes from "../data/recipe";

export default function Home() {
  return (
    <>
      <h1>WTF? What to food</h1>
      <h3>my super tasty selection of recipes:</h3>

      <recipeList>
        <recipeCard>
          <FoodCard />
        </recipeCard>
      </recipeList>
    </>
  );
}

const recipeCard = styled.li``;

const recipeList = styled.ul``;
