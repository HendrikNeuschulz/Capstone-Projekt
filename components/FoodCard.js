import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function FoodCard({ recipe, onDeleteRecipes }) {
  return (
    <>
      <Card>
        <StyledNameContainer>
          <RecipeName>{recipe.name}</RecipeName>
        </StyledNameContainer>
        <StyledCardContainer>
          <Link href={`/recipes/${recipe.id}`}>
            <StyledImage src={recipe.image} alt={recipe.name} width={300} height={350} />
          </Link>
          <StyledDelete type="submit" onClick={() => onDeleteRecipes(recipe.id)}>
            <Image
              src={"/icons/iconDelete.png"}
              height={30}
              width={30}
              alt="deletebutton
            "
            />
          </StyledDelete>
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

  background-color: #e8e1d1;
  color: black;
`;

const RecipeName = styled.p`
  position: absolute;
  text-align: center;
`;

const StyledDelete = styled.button`
  position: relative;
  bottom: 50px;
  left: 130px;
  background-color: #e8e1d1;
  opacity: 0.8;
  box-shadow: 2px 2px 8px black;
`;
