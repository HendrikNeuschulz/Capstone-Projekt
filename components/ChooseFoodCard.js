import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function ChooseFoodCard({ recipe, onAddRecipesToFavourites, onNextRecipe }) {
  return (
    <Card>
      {recipe && (
        <>
          <StyledImage priority src={recipe.image} alt={recipe.name} width={300} height={350} />
          <NoDeliciousButton type="button" onClick={onNextRecipe}>
            disgusting
          </NoDeliciousButton>
          <DeliciousButton
            type="button"
            onClick={() => {
              onAddRecipesToFavourites(recipe.id);
              onNextRecipe();
            }}
          >
            delicious
          </DeliciousButton>
        </>
      )}
    </Card>
  );
}

const Card = styled.article`
  list-style: none;
  margin: 10px;
  padding: 10px;
`;

const DeliciousButton = styled.button`
  align-items: center;
  background: lightgreen;
  border: 0 solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  color: #1a202c;
  display: inline-flex;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  height: 56px;
  justify-content: right;
  line-height: 24px;
  overflow-wrap: break-word;
  padding: 24px;
  text-decoration: none;
  width: 120px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  position: absolute;
  right: 40px;
  bottom: 120px;
`;

const NoDeliciousButton = styled.button`
  align-items: center;

  background: red;
  border: 0 solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  color: #1a202c;
  display: inline-flex;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  height: 56px;
  justify-content: right;
  line-height: 26px;
  overflow-wrap: break-word;
  padding: 24px;
  text-decoration: none;
  width: 120px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  position: absolute;
  bottom: 120px;
  left: 40px;
`;

const StyledImage = styled(Image)`
  box-shadow: 10px 3px 10px #4c4a59;
  border: 2px solid #4c4a59;
`;
