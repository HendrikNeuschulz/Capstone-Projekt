import { useEffect, useState } from "react";
import GlobalStyles from "../components/GlobalStyles";
import recipes from "../recipedata.json";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [nextRecipe, setNextRecipe] = useState(null);
  const [favourites, setFavourites] = useLocalStorage("favouriteRecipes", []);

  useEffect(() => {
    findRandomRecipe();
  }, []);

  function addRecipesToFavourites(recipeId) {
    setFavourites((previousFavourites) => [...previousFavourites, recipeId]);
    findRandomRecipe();
  }

  function findRandomRecipe() {
    const filteredRecipes = recipes.filter((recipe) => !favourites.includes(recipe.id));

    return setNextRecipe(filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)]);
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
      />
    </>
  );
}

export default MyApp;
