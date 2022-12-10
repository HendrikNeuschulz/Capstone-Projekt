import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Card, RecipeNameContainer, StyledImage } from "./Card.styled.js";

export default function ChooseFoodCard({
  recipe,
  onAddRecipesToFavourites,
  onNextRecipe,
}) {
  return (
    <Card>
      {recipe && (
        <>
          <RecipeNameContainer>
            <h3>{recipe.name}</h3>
          </RecipeNameContainer>
          <StyledImage
            priority
            src={recipe.image}
            alt={recipe.name}
            width={300}
            height={350}
          />

          <StyledBtnContainer>
            <StyledButton
              type="button"
              variant="disgusting"
              onClick={onNextRecipe}
            >
              disgusting
            </StyledButton>
            <StyledButton
              type="button"
              variant="delicious"
              onClick={() => {
                onAddRecipesToFavourites(recipe.id);
              }}
            >
              delicious
            </StyledButton>
          </StyledBtnContainer>
        </>
      )}
    </Card>
  );
}

const StyledButton = styled.button`
  font-size: 24px;
  /*  border: 1px solid black; */
  border-radius: 5px;
  width: 140px;
  height: 60px;
  cursor: pointer;
  font-family: "oswald";

  ${({ variant }) => variant === "delicious" && "background-color: #3cb371;"}
  ${({ variant }) => variant === "disgusting" && "background-color: #ff6961;"}
`;

const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  font-weight: 200%;
`;
