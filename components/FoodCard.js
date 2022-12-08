import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import CommentRecipe from "./CommentForm";

export default function FoodCard({ recipe, onDeleteRecipes }) {
  return (
    <>
      <Card>
        <StyledNameContainer>
          <h3>{recipe.name}</h3>
        </StyledNameContainer>
        <StyledCardContainer>
          <Link href={`/recipes/${recipe.id}`}>
            <StyledImage
              src={recipe.image}
              alt={recipe.name}
              width={300}
              height={350}
            />
          </Link>
          <StyledDelete
            type="submit"
            onClick={() => onDeleteRecipes(recipe.id)}
          >
            <svg
              height="20pt"
              viewBox="-64 0 512 512"
              width="20pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m256 80h-32v-48h-64v48h-32v-80h128zm0 0"
                fill="#62808c"
              />
              <path
                d="m304 512h-224c-26.507812 0-48-21.492188-48-48v-336h320v336c0 26.507812-21.492188 48-48 48zm0 0"
                fill="#e76e54"
              />
              <path
                d="m384 160h-384v-64c0-17.671875 14.328125-32 32-32h320c17.671875 0 32 14.328125 32 32zm0 0"
                fill="#77959e"
              />
              <path
                d="m260 260c-6.246094-6.246094-16.375-6.246094-22.625 0l-41.375 41.375-41.375-41.375c-6.25-6.246094-16.378906-6.246094-22.625 0s-6.246094 16.375 0 22.625l41.375 41.375-41.375 41.375c-6.246094 6.25-6.246094 16.378906 0 22.625s16.375 6.246094 22.625 0l41.375-41.375 41.375 41.375c6.25 6.246094 16.378906 6.246094 22.625 0s6.246094-16.375 0-22.625l-41.375-41.375 41.375-41.375c6.246094-6.25 6.246094-16.378906 0-22.625zm0 0"
                fill="#fff"
              />
            </svg>
          </StyledDelete>
        </StyledCardContainer>
      </Card>
    </>
  );
}

const Card = styled.article`
  position: relative;
  margin: auto;
  padding: 10px;
  width: fit-content;
`;

const StyledImage = styled(Image)`
  box-shadow: 2px 3px 8px black;
  border: 2px solid #4c4a59;
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
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 1px solid black;
  box-shadow: 2px 3px 8px black;
  height: 60px;
  width: 250px;
  padding: auto;
  opacity: 0.9;
  background-color: #ccc3ad;
  color: black;
  top: 0;
  left: 0;
`;

const StyledDelete = styled.button`
  position: relative;
  bottom: 45px;
  left: 140px;
  background-color: #ccc3ad;
  margin: 10px;
  padding: 8px;
`;
