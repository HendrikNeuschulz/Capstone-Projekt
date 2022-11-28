import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function FoodCard({ recipe }) {
  return (
    <>
      <Card>
        <StyledNameContainer>
          <RecipeName>{recipe.name}</RecipeName>
        </StyledNameContainer>
        <StyledCardContainer>
          <Link href={`/recipes/${recipe.id}`}>
            <StyledImage src={recipe.image} alt={recipe.name} width={250} height={300} />
          </Link>
        </StyledCardContainer>
      </Card>
    </>
  );
}

const Card = styled.li`
  list-style: none;
`;

const StyledImage = styled(Image)`
  box-shadow: 2px 3px 10px #4c4a59;
  border: 2px solid #4c4a59;
  margin: 10px;
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-right: 50px;
  padding: 10px;
`;

const StyledNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 1px solid black;
  box-shadow: 2px 3px 8px black;
  height: 45px;
  width: 220px;
  padding: 30px;
  opacity: 0.8;

  background-color: black;
  color: white;
`;

const RecipeName = styled.p`
  position: absolute;
  text-align: center;
`;
