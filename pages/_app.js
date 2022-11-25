import { useEffect, useState } from "react";
import GlobalStyles from "../components/GlobalStyles";
import recipes from "../flattened-download.json";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [nextRecipe, setNextRecipe] = useState({});
  const [favourites, setFavourites] = useLocalStorage("favouriteRecipes", []);
  //const [recipes, setRecipes] = useLocalStorage("allRecipes", recipes);

  useEffect(() => {
    setNextRecipe(findRandomRecipe());
  }, [favourites]);

  function addRecipesToFavourites(recipeId) {
    setFavourites((previousFavourites) => [...previousFavourites, recipeId]);
  }

  function findRandomRecipe() {
    const filteredRecipes = recipes.filter((recipe) => !favourites.includes(recipe.id));
    console.log(filteredRecipes);
    return filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
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
