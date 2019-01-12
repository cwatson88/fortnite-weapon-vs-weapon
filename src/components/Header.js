import React from "react";
import styled from "styled-components";
import fnbr from "../assets/fnbr.jpg";

const StyledHeader = styled.h1`
  color: #cd05ec;
  font-family: "Staatliches";
  text-shadow: 3px 1px 1px #4527a0;
  line-height: 0.8em;
  font-size: 3em;
  padding: 5px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <img src={fnbr} /> <br />
      Weapon vs Weapon
    </StyledHeader>
  );
}
