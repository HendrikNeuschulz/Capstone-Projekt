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
    <>
      <main>
        <Headline>WTF? What to food</Headline>
        {favouriteRecipes.length === 0 ? (
          <p>Nothing here ¯\_(ツ)_/¯..</p>
        ) : (
          <>
            <Subline>My super tasty selection of recipes:</Subline>

            {favouriteRecipes.map((recipe) => (
              <FoodCard
                recipe={recipe}
                key={recipe.id}
                onRemoveRecipesFromFavourites={onRemoveRecipesFromFavourites}
                currentUser={currentUser}
                onFindUserData={findUserData}
              />
            ))}
          </>
        )}
      </main>
      <Navbar />
    </>
  );
}

const Headline = styled.h1`
  text-align: center;
  font-family: "oswald";
`;

const Subline = styled.h2`
  text-align: center;
  font-size: 22px;
  font-family: "Caveat";
`;
