import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <SytledNav>
      <Link href="/">
        <Image width={45} height={45} src="/icons/iconHome.png" alt="Homebutton" />
      </Link>
      <Link href="/mealcenter">
        <Image width={45} height={45} src="/icons/iconMealCenter.png" alt="Mealcenterbutton" />
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
  gap: 20px;
`;
