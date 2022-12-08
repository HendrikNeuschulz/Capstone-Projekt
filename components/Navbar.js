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
          className={router.pathname == "/" ? "active" : "unactive"}
          id="Capa_1"
          enable-background="new 0 0 511.999 511.999"
          height="60"
          viewBox="0 0 511.999 511.999"
          width="60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <path
                d="m256 48.007-178.106 173.248v254.5h356.211v-254.5z"
                fill="#dfebfa"
              />
            </g>
            <path
              d="m120.134 247.24c0-6.075 2.456-11.892 6.811-16.128l158.647-154.32-29.592-28.785-178.106 173.248v254.499h42.24z"
              fill="#b1dbfc"
            />
            <g>
              <g>
                <path
                  d="m365.151 36.245v64.593l57.032 55.477v-120.07z"
                  fill="#695d67"
                />
              </g>
            </g>
            <path
              d="m398.18 105.227c-2.885-2.806-4.513-6.66-4.513-10.685v-58.297h-28.516v64.593l57.032 55.477v-27.739z"
              fill="#544e55"
            />
            <path
              d="m481.356 210.784-210.481-204.742c-8.282-8.057-21.47-8.057-29.751 0l-210.481 204.742c-8.446 8.215-8.633 21.722-.417 30.168s21.723 8.633 30.168.417l192.678-187.424c1.63-1.585 4.225-1.585 5.855 0l192.678 187.423c8.45 8.219 21.956 8.027 30.168-.417 8.216-8.445 8.029-21.952-.417-30.167z"
              fill="#ff656f"
            />
            <g>
              <path
                d="m253.072 53.945c.732-.712 1.66-1.086 2.607-1.159l18.754-18.243c5.538-5.388 13.267-7.153 20.259-5.334l-23.817-23.167c-8.282-8.057-21.47-8.057-29.751 0l-210.481 204.742c-8.446 8.215-8.633 21.722-.417 30.168s21.723 8.633 30.168.417z"
                fill="#ff4756"
              />
            </g>
            <path
              d="m438.728 31.885v-24.435c0-4.114-3.336-7.45-7.45-7.45h-75.222c-4.114 0-7.449 3.335-7.449 7.45v24.436c0 4.114 3.335 7.45 7.449 7.45h75.222c4.114-.001 7.45-3.336 7.45-7.451z"
              fill="#7b6c79"
            />
            <path
              d="m377.123 31.885v-24.435c0-4.114 3.335-7.45 7.449-7.45h-28.516c-4.114 0-7.449 3.335-7.449 7.45v24.436c0 4.114 3.335 7.45 7.449 7.45h28.516c-4.114-.001-7.449-3.336-7.449-7.451z"
              fill="#695d67"
            />
            <path
              d="m119.104 282.861h119.472v192.893h-119.472z"
              fill="#ab6b51"
            />
            <path d="m119.104 282.861h38.692v192.893h-38.692z" fill="#965a44" />
            <path
              d="m273.423 283.891v144.255c0 3.181 2.579 5.761 5.761 5.761h107.951c3.181 0 5.761-2.579 5.761-5.761v-144.255z"
              fill="#60b8fe"
            />
            <path
              d="m312.115 428.146v-144.255h-38.692v144.255c0 3.181 2.579 5.761 5.761 5.761h38.692c-3.182 0-5.761-2.58-5.761-5.761z"
              fill="#23a8fe"
            />
            <path
              d="m340.885 284.921c0-.35-.031-.692-.076-1.03h-15.3c-.045.338-.076.68-.076 1.03v66.767h-52.01v15.453h52.01v66.765h15.453v-66.765h52.01v-15.453h-52.01v-66.767z"
              fill="#8bcaff"
            />
            <path d="m273.423 351.689h38.692v15.453h-38.692z" fill="#60b8fe" />
            <path
              d="m387.135 247.41h-107.951c-3.182 0-5.761 2.579-5.761 5.761v31.75h119.472v-31.75c0-3.181-2.579-5.761-5.76-5.761z"
              fill="#23a8fe"
            />
            <path
              d="m317.876 247.41h-38.692c-3.182 0-5.761 2.579-5.761 5.761v31.751h38.692v-31.751c0-3.181 2.579-5.761 5.761-5.761z"
              fill="#0193fa"
            />
            <path
              d="m232.816 247.41h-107.951c-3.181 0-5.761 2.579-5.761 5.761v31.751h119.472v-31.751c0-3.181-2.579-5.761-5.76-5.761z"
              fill="#bc7c63"
            />
            <path
              d="m163.557 247.41h-38.692c-3.181 0-5.761 2.579-5.761 5.761v31.751h38.692v-31.751c0-3.181 2.579-5.761 5.761-5.761z"
              fill="#ab6b51"
            />
            <circle cx="196.94" cy="367.948" fill="#dfebfa" r="15.467" />
            <path
              d="m441.626 472.664h-371.253c-4.114 0-7.449 3.335-7.449 7.45v24.436c0 4.114 3.335 7.45 7.449 7.45h371.253c4.114 0 7.45-3.335 7.45-7.45v-24.436c0-4.115-3.336-7.45-7.45-7.45z"
              fill="#43cb8e"
            />
            <path
              d="m110.054 504.549v-24.436c0-4.114 3.335-7.45 7.449-7.45h-47.13c-4.114 0-7.449 3.335-7.449 7.45v24.436c0 4.114 3.335 7.45 7.449 7.45h47.131c-4.115 0-7.45-3.335-7.45-7.45z"
              fill="#00ba66"
            />
          </g>
        </StyledImage>
      </Link>
      <Link href="/mealcenter">
        <StyledImage
          className={router.pathname == "/mealcenter" ? "active" : "unactive"}
          id="Capa_1"
          enable-background="new 0 0 512 512"
          height="60"
          viewBox="0 0 512 512"
          width="60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="m466 15c0-8.284-6.716-15-15-15h-360c-24.81 0-45 20.184-45 45l.041 376.989c.004 33.135 26.865 59.994 60 59.994h314.959c8.284 0 15-6.716 15-15v-75.007h15c8.284 0 15-6.716 15-15z"
              fill="#fb3e3d"
            />
            <g fill="#d01b00">
              <path d="m466 15v361.975c0 8.284-6.716 15-15 15h-15v75.006c0 8.286-6.717 15.003-15.003 15.003h-134.997v-481.984h165c8.284 0 15 6.716 15 15z" />
              <path d="m136 0v31.997c0 8.282-6.72 15.003-15 15.003s-15-6.721-15-15.003v-31.997z" />
              <path d="m121 75.988c-8.284 0-15 6.717-15 15.003v29.999c0 8.286 6.716 15.003 15 15.003s15-6.717 15-15.003v-29.999c0-8.286-6.716-15.003-15-15.003z" />
              <path d="m121 165.984c-8.284 0-15 6.717-15 15.003v29.999c0 8.286 6.716 15.003 15 15.003s15-6.717 15-15.003v-29.999c0-8.286-6.716-15.003-15-15.003z" />
              <path d="m121 255.98c-8.284 0-15 6.717-15 15.003v29.999c0 8.286 6.716 15.003 15 15.003s15-6.717 15-15.003v-29.999c0-8.285-6.716-15.003-15-15.003z" />
              <path d="m136 360.978v30.997h-30v-30.997c0-8.282 6.72-15.003 15-15.003s15 6.722 15 15.003z" />
            </g>
            <path
              d="m338.388 91.446c-10.426-18.54-30.227-30.563-52.305-30.563-22.077 0-41.878 12.023-52.305 30.563-31.789-4.656-60.195 20.023-60.195 51.955 0 23.743 15.838 43.857 37.5 50.328v62.196c0 8.286 6.716 15.003 15 15.003h120c8.284 0 15-6.717 15-15.003 0-10.662 0-51.719 0-62.196 21.662-6.472 37.5-26.585 37.5-50.328 0-31.846-28.314-56.623-60.195-51.955z"
              fill="#e6f9fc"
            />
            <path
              d="m338.39 91.45c-10.43-18.544-30.23-30.567-52.31-30.567v210.046h60c8.29 0 15-6.721 15-15.003 0-10.666 0-51.721 0-62.193 21.67-6.471 37.5-26.586 37.5-50.331 0-31.848-28.31-56.623-60.19-51.952z"
              fill="#c6eef8"
            />
            <path
              d="m105.994 391.975h300.006v60.001h-300.006c-16.565 0-29.994-13.432-29.994-30 0-16.569 13.429-30.001 29.994-30.001z"
              fill="#c6eef8"
            />
            <path d="m286 391.975h120v60.003h-120z" fill="#69dbf9" />
            <path
              d="m256 420.981v75.496c0 12.058-13.565 19.204-23.5 12.363l-36.26-24.935-36.32 25.376c-9.891 6.917-23.59-.151-23.59-12.303v-75.997z"
              fill="#fff200"
            />
            <path
              d="m256 420.981v75.496c0 12.063-13.56 19.204-23.5 12.363l-36.26-24.935v-62.924z"
              fill="#ffd604"
            />
            <path
              d="m376 313.938h-179.833c-8.284 0-15 6.717-15 15.003s6.716 15.003 15 15.003h179.833c8.284 0 15-6.717 15-15.003s-6.716-15.003-15-15.003z"
              fill="#fc811c"
            />
            <path
              d="m391 328.941c0 8.282-6.72 15.003-15 15.003h-89.92v-30.007h89.92c8.28.001 15 6.723 15 15.004z"
              fill="#fb3e3d"
            />
          </g>
        </StyledImage>
      </Link>
    </SytledNav>
  );
}

export default Navbar;

const SytledNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 5px;
  background-color: #ccc3ad;
  gap: 30px;
  height: 10%;
`;

const StyledImage = styled.svg`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    opacity: 1;
  }
  &.unactive {
    opacity: 0.3;
  }
`;
