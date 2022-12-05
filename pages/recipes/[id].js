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
          need some help? get some with this .. <a href={recipeDetails?.youtube}>Video</a>
        </article>
      </Main>
      <StyledBackLink href={"/mealcenter"}>
        <img src="/icons/iconback.png" width={40} height={40}></img>
      </StyledBackLink>
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
  left: 4px;
  bottom: 10px;
  opacity: 0.5;
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
