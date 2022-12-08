import { useEffect, useState } from "react";
import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";
import users from "../userdata.json";
import recipeData from "../recipedata.json";

function MyApp({ Component, pageProps }) {
  const [nextRecipe, setNextRecipe] = useState(null);
  const [favourites, setFavourites] = useLocalStorage("favouriteRecipes", [
    "52945",
    "52999",
  ]);
  const [recipes, setRecipes] = useLocalStorage("recipes", recipeData);
  const currentUser = users[0];

  useEffect(() => {
    findRandomRecipe();
  }, []);

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
    setFavourites((previousFavourites) => [...previousFavourites, recipeId]);
    findRandomRecipe();
  }

  function findRandomRecipe() {
    const filteredRecipes = recipes.filter(
      (recipe) => !favourites.includes(recipe.id)
    );

    return setNextRecipe(
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)]
    );
  }

  function deleteRecipes(id) {
    const afterDelete = favourites.filter(
      (favouriteRecipe) => favouriteRecipe !== id
    );

    setFavourites(afterDelete);
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        favourites={favourites}
        nextRecipe={nextRecipe}
        onAddRecipesToFavourites={addRecipesToFavourites}
        onFindRandomRecipe={findRandomRecipe}
        onDeleteRecipes={deleteRecipes}
        recipes={recipes}
        currentUser={currentUser}
        onAddComment={addComment}
      />
    </>
  );
}

export default MyApp;
