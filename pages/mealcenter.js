import styled from "styled-components";
import FoodCard from "../components/FoodCard";
import recipes from "../recipedata.json";
import Navbar from "../components/Navbar";

export default function Mealcenter({ favourites }) {
  const favouriteRecipes = recipes.filter((recipe) => favourites.includes(recipe.id));

  return (
    <main>
      <Headline>WTF? What to food</Headline>
      {favouriteRecipes.length === 0 ? (
        <p>Nothing here..</p>
      ) : (
        <>
          <Subline>my super tasty selection of recipes:</Subline>
          <ul>
            {favouriteRecipes.map((recipe) => (
              <FoodCard recipe={recipe} key={recipe.id} />
            ))}
          </ul>
        </>
      )}
      <Navbar />
    </main>
  );
}

const StyledImgBox = styled.a`
  text-align: center;
`;

const Headline = styled.h1`
  text-align: center;
`;

const Subline = styled.h2`
  text-align: center;
  font-size: 18px;
`;
