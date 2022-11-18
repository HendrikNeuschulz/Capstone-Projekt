import { resetClipboardStubOnView } from "@testing-library/user-event/dist/types/utils";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function FoodCard({ recipe }) {
  return (
    <Card>
      <RecipeName>{recipe.name}</RecipeName>
      <Image src={recipe.image} height={300} width={200} alt={recipe.name} />
    </Card>
  );
}

const Card = styled.li`
  list-style: none;
`;

const RecipeName = styled.p`
  font-style: italic;
`;
