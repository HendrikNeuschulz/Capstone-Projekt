import { useEffect, useState } from "react";
import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";
import users from "../userdata.json";
import recipeData from "../recipedata.json";

function MyApp({ Component, pageProps }) {
  const [nextRecipe, setNextRecipe] = useState(null);
  /* const [favourites, setFavourites] = useLocalStorage("favouriteRecipes", [
    "52945",
    "52999",
    "62871",
  ]); */
  const [recipes, setRecipes] = useLocalStorage("recipes", recipeData);
  const currentUser = users[4];

  useEffect(() => {
    findRandomRecipe();
  }, [recipes]);

  function addComment(recipeId, comment) {
    const newComment = {
      id: crypto.randomUUID(),
      userId: currentUser.id,
      text: comment,
    };
    setRecipes((previousRecipes) =>
      previousRecipes.map((recipe) =>
        recipe.id === recipeId
          ? { ...recipe, comments: [...recipe.comments, newComment] }
          : recipe
      )
    );
  }

  function addRecipesToFavourites(recipeId) {
    setRecipes((previousRecipes) =>
      previousRecipes.map((recipe) =>
        recipeId === recipe.id
          ? { ...recipe, likedBy: [...recipe.likedBy, currentUser.id] }
          : recipe
      )
    );
  }

  function findRandomRecipe() {
    const filteredRecipes = recipes.filter(
      (recipe) => !recipe.likedBy.includes(currentUser.id)
    );

    return setNextRecipe(
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)]
    );
  }

  function removeRecipesFromFavourites(recipeId) {
    const favouritesToUpdate = recipes.find(
      (recipe) => recipe.id === recipeId
    ).likedBy;
    const updatetFavourites = favouritesToUpdate.filter(
      (userId) => userId !== currentUser.id
    );

    setRecipes((previousRecipes) =>
      previousRecipes.map((recipe) =>
        recipeId === recipe.id
          ? { ...recipe, likedBy: updatetFavourites }
          : recipe
      )
    );
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        nextRecipe={nextRecipe}
        onAddRecipesToFavourites={addRecipesToFavourites}
        onFindRandomRecipe={findRandomRecipe}
        onRemoveRecipesFromFavourites={removeRecipesFromFavourites}
        recipes={recipes}
        currentUser={currentUser}
        onAddComment={addComment}
      />
    </>
  );
}

export default MyApp;
