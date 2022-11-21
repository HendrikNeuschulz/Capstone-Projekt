import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../helpers/api";
import ChooseFoodCard from "../components/ChooseFoodCard";

function Home() {
  const { data: recipes, error } = useSWR("/api/recipes", fetcher);

  if (error) return <h1>There was an error</h1>;

  if (!recipes) return <h1>your tasty recipes loading ...</h1>;

  return (
    <main>
      <h1>WTF? What to food </h1>
      <h2>what are you up for?</h2>

      <ul>
        <ChooseFoodCard />
      </ul>
    </main>
  );
}

export default Home;
