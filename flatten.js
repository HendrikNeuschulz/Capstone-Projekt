console.log(
  JSON.stringify(
    require("./download.json")
      .flatMap((letter) => letter.meals)
      .map(
        ({
          idMeal,
          strMeal,
          strCategory,
          strInstructions,
          strMealThumb,
          strTags,
          strYoutube,
          ...recipe
        }) => ({
          id: idMeal,
          name: strMeal,
          category: strCategory,
          instructions: strInstructions.replaceAll(/\r/g, ""),
          image: strMealThumb,
          tags: strTags?.split(","),
          youtube: strYoutube,
          ingredients: Object.keys(recipe)
            .filter((key) => key.startsWith("strIngredient"))
            .map((key) => recipe[key])
            .filter((ingredient) => ingredient !== "")
            .filter((ingredient) => ingredient !== null),
        })
      )
  )
);
