import styled from "styled-components";
import FoodCard from "../components/FoodCard";
import useSWR from "swr";
import { fetcher } from "../helpers/api";

export default function Home() {
  const { data: data, error } = useSWR("/api/recipes", fetcher);

  if (error) return <h1>There was an error</h1>;

  return (
    <>
      <h1>WTF? What to food</h1>
      <h3>my super tasty selection of recipes:</h3>

      <recipeList>
        {data?.map((data) => (
          <FoodCard />
        ))}
      </recipeList>
    </>
  );
}

const recipeCard = styled.li``;

const recipeList = styled.ul``;
