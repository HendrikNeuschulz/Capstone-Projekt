import Image from "next/image";
import React from "react";
import styled from "styled-components";

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

const Card = styled.article`
  position: relative;
  margin: auto;
  padding: 10px;
  width: fit-content;
`;

const StyledButton = styled.button`
  font-size: 24px;
  border: 1px solid black;
  border-radius: 5px;
  width: 140px;
  height: 60px;
  cursor: pointer;
  font-family: "oswald";
  //font-weight: bold;
  ${({ variant }) => variant === "delicious" && "background-color: #3cb371;"}
  ${({ variant }) => variant === "disgusting" && "background-color: #ff6961;"}
`;

const StyledImage = styled(Image)`
  box-shadow: 2px 3px 8px black;
  border: 2px solid #4c4a59;
`;

const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  font-weight: 200%;
`;

const RecipeNameContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 1px solid black;
  box-shadow: 2px 3px 8px black;
  height: 60px;
  width: 250px;
  padding: auto;
  opacity: 0.8;
  background-color: #ccc3ad;
  color: black;
  top: 0;
  left: 0;
`;
