import styled from "styled-components";
import FoodCard from "../components/FoodCard";
import users from "../userdata.json";
import Navbar from "../components/Navbar";

export default function Mealcenter({
  currentUser,
  recipes,
  onRemoveRecipesFromFavourites,
}) {
  const favouriteRecipes = recipes.filter((recipe) =>
    recipe.likedBy.includes(currentUser.id)
  );

  function findUserData(userId) {
    return users.find((user) => userId === user.id);
  }

  return (
    <main>
      <Headline>WTF? What to food</Headline>
      {favouriteRecipes.length === 0 ? (
        <p>Nothing here ¯\_(ツ)_/¯..</p>
      ) : (
        <>
          <Subline>My super tasty selection of recipes:</Subline>
          <StyledFavouriteList>
            {favouriteRecipes.map((recipe) => (
              <FoodCard
                recipe={recipe}
                key={recipe.id}
                onRemoveRecipesFromFavourites={onRemoveRecipesFromFavourites}
                currentUser={currentUser}
                onFindUserData={findUserData}
              />
            ))}
          </StyledFavouriteList>
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
  left: 41px;
  font-family: oswald;
`;

const Subline = styled.h2`
  text-align: center;
  position: relative;
  left: 40px;
  font-size: 22px;
  margin: 10px;
`;

const StyledFavouriteList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
`;
