import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Card, RecipeNameContainer, StyledImage } from "./Card.styled.js";

export default function FoodCard({
  recipe,
  onRemoveRecipesFromFavourites,
  onFindUserData,
  currentUser,
}) {
  return (
    <Card>
      <RecipeNameContainer>
        <h3>{recipe.name}</h3>
      </RecipeNameContainer>
      <Link href={`/recipes/${recipe.id}`}>
        <StyledImage
          src={recipe.image}
          alt={recipe.name}
          width={300}
          height={350}
        />
      </Link>

      {recipe.likedBy.length > 1 && (
        <LikedByContainer>
          {recipe.likedBy.map((userId) => {
            if (userId !== currentUser.id) {
              const user = onFindUserData(userId);
              return (
                <img
                  src={user.image}
                  alt={`liked by ${user.name}`}
                  key={user.id}
                  width={40}
                  height={40}
                />
              );
            }
          })}
        </LikedByContainer>
      )}
      <StyledDelete
        type="submit"
        onClick={() => onRemoveRecipesFromFavourites(recipe.id)}
      >
        <svg
          height="20pt"
          viewBox="-64 0 512 512"
          width="20pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m256 80h-32v-48h-64v48h-32v-80h128zm0 0" fill="#62808c" />
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
    </Card>
  );
}

const StyledDelete = styled.button`
  position: absolute;
  bottom: -5px;
  right: 0;
  background-color: #ccc3ad;
  padding: 9px;
`;

const LikedByContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  position: absolute;
  left: 0;
  bottom: -5px;
  border: 1px solid black;
  background-color: #ccc3ad;
  box-shadow: 2px 2px 4px black;
  padding: 5px;
`;
