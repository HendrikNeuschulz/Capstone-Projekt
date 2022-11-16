import Image from "next/image";
import styled from "styled-components";
import salmon from "../assets/images/salmon.jpg";
import bred from "../assets/images/bred.jpg";
import pasta from "../assets/images/pasta.jpg";

function FoodCard(recipes) {
  return (
    <>
      <Card>
        <Image width={400} src={salmon} alt="Salmon with Zucchini" />
      </Card>
      <Card>
        <Image width={400} src={bred} alt="Bred with Avocado" />
      </Card>
    </>
  );
}

export default FoodCard;

const Card = styled.li`
  list-style: none;
`;
