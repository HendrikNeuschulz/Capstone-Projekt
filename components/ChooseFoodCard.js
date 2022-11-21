import Image from "next/image";
import React from "react";
import styled from "styled-components";
import pizza from "../public/images/pizza.jpg";
import Link from "next/link";

export default function FoodCard({ recipe }) {
  return (
    <ul>
      <Card>
        <StyledImage src={pizza} alt={pizza} width={300} height={350} />
      </Card>

      <NoDeliciousLink href="/">arghh no</NoDeliciousLink>
      <DeliciousLink href="/mealcenter">delicious</DeliciousLink>
    </ul>
  );
}

const Card = styled.li`
  list-style: none;
  margin: 10px;
  padding: 10px;
`;

const DeliciousLink = styled(Link)`
  border: 1px solid black;
  color: white;
  background-color: green;
  font-size: 20px;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  position: relative;
  left: 30px;
`;

const NoDeliciousLink = styled(Link)`
  border: 1px solid black;
  color: white;
  background-color: red;
  font-size: 20px;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  left: 10px;
`;

const StyledImage = styled(Image)`
  box-shadow: 10px 3px 10px #4c4a59;
  border: 2px solid #4c4a59;
  position: relative;
  right: 40px;
`;
