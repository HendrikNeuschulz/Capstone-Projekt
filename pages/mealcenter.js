import styled from "styled-components";
import FoodCard from "../components/FoodCard";
import recipes from "../flattened-download.json";

export default function Mealcenter({ favourites }) {
  const favouriteRecipes = recipes.filter((recipe) => favourites.includes(recipe.id));

  return (
    <main>
      <h1>WTF? What to food </h1>
      {favouriteRecipes.length === 0 ? (
        <p>Nothing here..</p>
      ) : (
        <>
          <h2>my super tasty selection of recipes:</h2>
          <ul>
            {favouriteRecipes.map((recipe) => (
              <FoodCard recipe={recipe} key={recipe.id} />
            ))}
          </ul>
        </>
      )}

      <SytledNav>
        <StyledImgBox href="/">
          <img src="/icons/iconHome.png" />
        </StyledImgBox>
        <StyledImgBox href="/mealcenter">
          <img src="/icons/iconMealCenter.png" />
        </StyledImgBox>
      </SytledNav>
    </main>
  );
}

const SytledNav = styled.nav`
  border: 1px solid black;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  width: 70%;
  position: fixed;
  left: 60px;
  bottom: 5px;
  background-color: #d9d1ce;
`;

const StyledImgBox = styled.a`
  position: relative;
  right: 80px;
`;
