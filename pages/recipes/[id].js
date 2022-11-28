import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import recipes from "../../recipedata.json";

export default function recipeDetailPage({ recipe }) {
  const router = useRouter();
  const { id } = router.query;

  function getRecipesById(id) {
    return recipes.find((recipe) => recipe.id === id);
  }

  const recipeDetails = getRecipesById(id);

  return (
    <>
      <main>
        <div>
          <p>{recipeDetails?.name}</p>
          <Image src={recipeDetails?.image} height={300} width={300} alt={recipeDetails?.name} />

          <ul>
            <li>{recipeDetails?.ingredients}</li>
            <li>{recipeDetails?.ingredients}</li>
            <li>{recipeDetails?.ingredients}</li>
          </ul>
          <br />
          <article>{recipeDetails?.instructions}</article>
          <br />

          <article>
            need some help? get some with this <a href={recipeDetails?.youtube}>Video</a>
          </article>
        </div>
      </main>
      <Link href={"/mealcenter"}>go back</Link>
    </>
  );
}
