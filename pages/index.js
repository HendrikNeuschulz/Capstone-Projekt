import { useEffect, useState } from "react";
import styled from "styled-components";
import ChooseFoodCard from "../components/ChooseFoodCard";
import Navbar from "../components/Navbar";

function Home({ nextRecipe, onAddRecipesToFavourites, onFindRandomRecipe }) {
  return (
    <main>
      <Headline>WTF? What to food </Headline>
      <Subline>What are you up for?</Subline>

      <ChooseFoodCard
        recipe={nextRecipe}
        onAddRecipesToFavourites={onAddRecipesToFavourites}
        onNextRecipe={onFindRandomRecipe}
      />
      <Navbar />
    </main>
  );
}

export default Home;

const Headline = styled.h1`
  text-align: center;
  font-family: "oswald";
`;

const Subline = styled.h2`
  text-align: center;
  font-size: 22px;
  font-family: "Caveat";
`;
