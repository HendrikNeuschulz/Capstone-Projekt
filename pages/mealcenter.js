import styled from "styled-components";
import FoodCard from "../components/FoodCard";
import useSWR from "swr";
import { fetcher } from "../helpers/api";

export default function Home() {
  const { data: recipes, error } = useSWR("/api/recipes", fetcher);

  if (error) return <h1>There was an error</h1>;

  if (!recipes) return <h1>your tasty recipes loading ...</h1>;

  return (
    <main>
      <h1>WTF? What to food </h1>
      <h2>my super tasty selection of recipes:</h2>

      <ul>
        {recipes?.map((recipe) => (
          <FoodCard recipe={recipe} key={recipe.id} />
        ))}
      </ul>
      <SytledNav>
        <StyledImgBox href="/">
          <img src="/icons/iconHome.png" />
        </StyledImgBox>
        <StyledImgBox href="/mealcenter">
          <img src="/icons/iconMealCenter.png" />
        </StyledImgBox>
      </SytledNav>
    </main>
  );
}

const SytledNav = styled.nav`
  border: 1px solid black;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  width: 70%;
  position: fixed;
  left: 60px;
  bottom: 5px;
  background-color: #d9d1ce;
`;

const StyledImgBox = styled.a`
  position: relative;
  right: 80px;
`;
