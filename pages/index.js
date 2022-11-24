import styled from "styled-components";
import ChooseFoodCard from "../components/ChooseFoodCard";

function Home({ onAddRecipesToFavourites, onFindRandomRecipe }) {
  return (
    <main>
      <h1>WTF? What to food </h1>
      <h2>what are you up for?</h2>

      <ChooseFoodCard
        onAddRecipesToFavourites={onAddRecipesToFavourites}
        onFindRandomRecipe={onFindRandomRecipe}
      />

      <SytledNav>
        <StyledImgBox href="/">
          <img src="/icons/iconHome.png" />
        </StyledImgBox>
        <StyledImgBox href="/mealcenter">
          <img src="/icons/iconMealCenter.png" />
        </StyledImgBox>
      </SytledNav>
    </main>
  );
}

export default Home;

const SytledNav = styled.nav`
  border: 1px solid black;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  width: 70%;
  position: fixed;
  left: 60px;
  bottom: 5px;
  background-color: #d9d1ce;
`;

const StyledImgBox = styled.a`
  position: relative;
  right: 80px;
`;
