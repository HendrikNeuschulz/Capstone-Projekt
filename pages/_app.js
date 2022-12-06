import { useEffect, useState } from "react";
import GlobalStyles from "../components/GlobalStyles";
import recipes from "../recipedata.json";
import { useLocalStorage } from "../helpers/hooks";
import User from "../userdata.json";

function MyApp({ Component, pageProps }) {
  const [nextRecipe, setNextRecipe] = useState(null);
  const [favourites, setFavourites] = useLocalStorage("favouriteRecipes", []);
  const [comment, setComment] = useLocalStorage("comment", []);

  useEffect(() => {
    findRandomRecipe();
  }, []);

  function addComment(comment) {
    setComment((previousComments) => [...previousComments, comment]);
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
        comment={comment}
        onSetComment={setComment}
        onAddComment={addComment}
      />
    </>
  );
}

export default MyApp;
