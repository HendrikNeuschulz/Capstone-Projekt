import styled from "styled-components";
import FoodCard from "../components/FoodCard";
import recipes from "../recipedata.json";
import Navbar from "../components/Navbar";

export default function Mealcenter({ favourites, onDeleteRecipes }) {
  const favouriteRecipes = recipes.filter((recipe) =>
    favourites.includes(recipe.id)
  );

  return (
    <main>
      <Headline>WTF? What to food</Headline>
      {favouriteRecipes.length === 0 ? (
        <p>Nothing here ¯\_(ツ)_/¯..</p>
      ) : (
        <>
          <Subline>My super tasty selection of recipes:</Subline>
          <ul>
            {favouriteRecipes.map((recipe) => (
              <FoodCard
                recipe={recipe}
                key={recipe.id}
                onDeleteRecipes={onDeleteRecipes}
              />
            ))}
          </ul>
        </>
      )}
      <Navbar />
    </main>
  );
}

const Headline = styled.h1`
  text-align: center;
  font-size: 40px;
  position: relative;
  left: 40px;
  font-family: oswald;
`;

const Subline = styled.h2`
  text-align: center;
  position: relative;
  left: 40px;
  font-size: 22px;
  margin: 10px;
`;
