import styled from "styled-components";
import Image from "next/image";

const Card = styled.section`
  position: relative;
  margin: 0 auto 30px;
  padding: 10px;
  width: fit-content;
`;

const StyledImage = styled(Image)`
  box-shadow: 2px 3px 8px black;
  border: 2px solid #4c4a59;
`;

const RecipeNameContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 1px solid black;
  box-shadow: 2px 3px 8px black;
  width: 250px;
  height: 60px;
  opacity: 0.8;
  background-color: #ccc3ad;
  color: black;
  top: 0;
  left: 0;
  margin: 0 auto;
`;

export { Card, RecipeNameContainer, StyledImage };
