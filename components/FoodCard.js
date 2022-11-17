import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function FoodCard({ recipe }) {
  return (
    <Card>
      <Image src={recipe.image} height={200} width={100} alt={recipe.name} />
      <p>{recipe.name}</p>
    </Card>
  );
}

const Card = styled.li`
  list-style: none;
`;
