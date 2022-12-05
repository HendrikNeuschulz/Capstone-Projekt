import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import recipes from "../../recipedata.json";

export default function recipeDetailPage({ recipe }) {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return;

  function getRecipesById(id) {
    return recipes.find((recipe) => recipe.id === id);
  }

  const recipeDetails = getRecipesById(id);

  const ingredientMeasureList = [];

  for (let index = 0; index < recipeDetails.measure.length; index++) {
    const measureList = recipeDetails.measure[index];
    const ingredientList = recipeDetails.ingredients[index];
    ingredientMeasureList[index] = measureList + " " + ingredientList;
  }

  return (
    <>
      <Main>
        <RecipeName>{recipeDetails?.name}</RecipeName>

        <FoodCardBox>
          <StyledImage
            src={recipeDetails?.image}
            height={300}
            width={300}
            alt={recipeDetails?.name}
          />
        </FoodCardBox>
        <StyledList>
          {ingredientMeasureList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </StyledList>
        <br />
        <article>{recipeDetails?.instructions}</article>
        <br />

        <article>
          need some help? get some with this ..{" "}
          <a href={recipeDetails?.youtube}>Video</a>
        </article>
      </Main>
      <StyledBackLink href={"/mealcenter"}>
        <svg
          id="Layer_1"
          enable-background="new 0 0 64 64"
          height="30"
          viewBox="0 0 64 64"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <g>
                <path d="m59.5 34h-54.9c-1.1 0-2-.9-2-2s.9-2 2-2h54.9c1.1 0 2 .9 2 2s-.9 2-2 2z" />
              </g>
            </g>
          </g>
          <g>
            <g>
              <g>
                <path d="m26.5 56c-.5 0-1-.2-1.4-.6l-22-22c-.8-.8-.8-2 0-2.8l22-22c.8-.8 2-.8 2.8 0s.8 2 0 2.8l-20.5 20.6 20.6 20.6c.8.8.8 2 0 2.8-.4.4-.9.6-1.5.6z" />
              </g>
            </g>
          </g>
        </svg>
      </StyledBackLink>
      <Link href={"/comments"}>
        <StyledComment
          id="Layer"
          height="30"
          viewBox="0 0 24 24"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="comment"
            d="m3.857 21.75c-.144 0-.286 0-.423-.007a1.228 1.228 0 0 1 -.749-2.162 4.124 4.124 0 0 0 1.455-2.155 8.3 8.3 0 0 1 -1.89-5.426c0-5.151 4.01-8.75 9.75-8.75s9.75 3.6 9.75 8.751-4.01 8.752-9.75 8.752a11.843 11.843 0 0 1 -3.394-.48 7.225 7.225 0 0 1 -4.749 1.477zm8.143-17c-4.857 0-8.25 2.982-8.25 7.25a6.787 6.787 0 0 0 1.75 4.7.749.749 0 0 1 .19.625 5.391 5.391 0 0 1 -1.507 2.914 5.326 5.326 0 0 0 3.68-1.329.748.748 0 0 1 .792-.2 10.208 10.208 0 0 0 3.345.543c4.857 0 8.25-2.982 8.25-7.252s-3.393-7.251-8.25-7.251z"
            fill="rgb(0,0,0)"
          />
        </StyledComment>
      </Link>
    </>
  );
}

const Main = styled.main`
  list-style: none;
  margin: 10px;
  padding: 10px;
  text-align: center;
`;

const StyledBackLink = styled(Link)`
  position: fixed;
  left: 12px;
  bottom: 10px;
  opacity: 0.8;
`;

const FoodCardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

  padding: 10px;
`;

const RecipeName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid black;
  box-shadow: 2px 3px 1px black;
  height: 60px;
  width: 250px;
  padding: 38px;
  left: 40px;
  opacity: 0.8;
  background-color: #e8e1d1;
  color: black;
  font-size: 30px;
`;

const StyledImage = styled(Image)`
  box-shadow: 5px 3px 3px #4c4a59;
  border: 2px solid #4c4a59;
`;

const StyledList = styled.ul`
  list-style: none;
  position: relative;
  text-align: center;
  right: 20px;
`;

const StyledComment = styled.svg`
  color: #000;
  position: fixed;
  right: 12px;
  bottom: 13px;
  opacity: 0.8;
`;
