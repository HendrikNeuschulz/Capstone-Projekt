import GlobalStyles from "../components/GlobalStyles";
import recipes from "../data.json";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [favourites, setFavourites] = useLocalStorage("favouriteRecipes", []);

  function addRecipesToFavourites(recipeId) {
    setFavourites((previousFavourites) => [...previousFavourites, recipeId]);
  }
  const filteredRecipes = recipes.filter((recipe) => !favourites.includes(recipe.id));

  function findRandomRecipe() {
    return filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
  }
  console.log(filteredRecipes);

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        favourites={favourites}
        onAddRecipesToFavourites={addRecipesToFavourites}
        onFindRandomRecipe={findRandomRecipe}
      />
    </>
  );
}

export default MyApp;
