import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function FoodCard({ recipe }) {
  return (
    <Card>
      <RecipeName>{recipe.name}</RecipeName>
      <StyledImage src={recipe.image} height={300} width={200} alt={recipe.name} />
    </Card>
  );
}

const Card = styled.li`
  list-style: none;
  margin: 10px;
  padding: 10px;
`;

const RecipeName = styled.p`
  font-style: italic;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  box-shadow: 10px 3px 10px #4c4a59;
  border: 2px solid #4c4a59;
  position: relative;
  left: 55px;
`;
