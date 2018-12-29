import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: #cd05ec;
  font-family: "Luckiest Guy", cursive;
  text-shadow: 3px 1px 1px #4527a0;
`;

export default function Header() {
  return <StyledHeader> Fortnite Weapon Check </StyledHeader>;
}
