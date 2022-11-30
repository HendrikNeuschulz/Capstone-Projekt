import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function ChooseFoodCard({ recipe, onAddRecipesToFavourites, onNextRecipe }) {
  return (
    <Card>
      {recipe && (
        <>
          <RecipeName>{recipe.name}</RecipeName>
          <StyledImage priority src={recipe.image} alt={recipe.name} width={300} height={350} />

          <StyledBtnContainer>
            <NoDeliciousButton type="button" onClick={onNextRecipe}>
              disgusting
            </NoDeliciousButton>
            <DeliciousButton
              type="button"
              onClick={() => {
                onAddRecipesToFavourites(recipe.id);
              }}
            >
              delicious
            </DeliciousButton>
          </StyledBtnContainer>
        </>
      )}
    </Card>
  );
}

const Card = styled.article`
  list-style: none;
  margin: 10px;
  padding: 10px;
  text-align: center;
`;

const DeliciousButton = styled.button`
  font-size: 24px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #37ad47;
  width: 140px;
  cursor: pointer;
  font-family: JosefinSans;
`;

const NoDeliciousButton = styled.button`
  font-size: 24px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #ff0000;
  width: 140px;
  height: 60px;
  cursor: pointer;
  font-family: JosefinSans;
`;

const StyledImage = styled(Image)`
  box-shadow: 5px 3px 10px 3px #4c4a59;
  border: 2px solid #4c4a59;
`;

const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const RecipeName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 1px solid black;
  box-shadow: 2px 3px 8px black;
  height: 60px;
  width: 250px;
  padding: 30px;
  opacity: 0.8;
  background-color: black;
  color: white;
`;
