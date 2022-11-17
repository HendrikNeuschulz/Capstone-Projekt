import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import salmon from "../assets/images/salmon.jpg";

export default function FoodCard({ data }) {
  return (
    <Card>
      <Image src={salmon} width={200} alt="salmon with zucchini" />
    </Card>
  );
}

const Card = styled.li`
  list-style: none;
`;
