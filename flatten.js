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
          strMeasure,
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
          measure: Object.keys(recipe)
            .filter((key) => key.startsWith("strMeasure"))
            .map((key) => recipe[key])
            .filter((measure) => measure !== "")
            .filter((measure) => measure !== null),
          ingredients: Object.keys(recipe)
            .filter((key) => key.startsWith("strIngredient"))
            .map((key) => recipe[key])
            .filter((ingredient) => ingredient !== "")
            .filter((ingredient) => ingredient !== null),
        })
      )
  )
);
