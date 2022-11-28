import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <SytledNav>
      <Link href="/">
        <StyledImage
          className={router.pathname == "/" ? "active" : ""}
          width={45}
          height={45}
          src="/icons/iconHome.png"
          alt="Homebutton"
        />
      </Link>
      <Link href="/mealcenter">
        <StyledImage
          className={router.pathname == "/mealcenter" ? "active" : ""}
          width={45}
          height={45}
          src="/icons/iconMealCenter.png"
          alt="Mealcenterbutton"
        />
      </Link>
    </SytledNav>
  );
}

export default Navbar;

const SytledNav = styled.nav`
  border: 1px solid black;
  opacity: 0.9;

  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #d9d1ce;
  gap: 20px; ;
`;

const StyledImage = styled(Image)`
  &.active {
    border: 2px solid black;
    border-radius: 30px;
  }
`;
