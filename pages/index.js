import styled from "styled-components";
import FoodCard from "../components/FoodCard";
import useSWR from "swr";
import { fetcher } from "../helpers/api";

export default function Home() {
  const { data: recipes, error } = useSWR("/api/recipes", fetcher);

  if (error) return <h1>There was an error</h1>;

  return (
    <main>
      <h1>WTF? What to food</h1>
      <h2>my super tasty selection of recipes:</h2>

      <ul>
        {recipes?.map((recipe) => (
          <FoodCard recipe={recipe} key={recipe.id} />
        ))}
      </ul>
    </main>
  );
}
