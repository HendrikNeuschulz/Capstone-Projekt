import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function FoodCard({ recipe }) {
  return (
    <>
      <Card>
        <StyledImage src={recipe?.image} alt={recipe?.name} width={300} height={350} />
      </Card>

      <NoDeliciousLink href="/">arghh no</NoDeliciousLink>
      <DeliciousLink href="/">delicious</DeliciousLink>
    </>
  );
}

const Card = styled.li`
  list-style: none;
  margin: 10px;
  padding: 10px;
`;

const DeliciousLink = styled(Link)`
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
  width: auto;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  position: relative;
  left: 100px;
`;

const NoDeliciousLink = styled(Link)`
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
  line-height: 24px;
  overflow-wrap: break-word;
  padding: 24px;
  text-decoration: none;
  width: auto;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  position: relative;
  left: 10px;
`;

const StyledImage = styled(Image)`
  box-shadow: 10px 3px 10px #4c4a59;
  border: 2px solid #4c4a59;
  position: relative;
  right: 10px;
`;
