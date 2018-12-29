import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 170px;
  height: 230px;
  border-radius: 13px;
  background: radial-gradient(#cccccc, #ea2ae5);
  box-shadow: -4px -2px 3px 0px #00000047;
  padding: 2px;
  margin: 10px;
  transform: rotate(-11deg) translate(-100px);
`;

const SmallIcon = styled.img`
  width: auto;
  height: 100px;
  transform: rotate(45deg);
  opacity: 0.7;
`;

const StyledHeader = styled.header`
  color: white;
  text-shadow: 3px 3px 2px #000000a1;
  font-family: "Major Mono Display", monospace;
  letter-spacing: 0px;
  font-size: 1.8em;
  line-height: 0.9em;
`;

const CardBox = ({ name, img }) => {
  const imgUrl = `https://db.fortnitetracker.com/${img}`;
  return (
    <StyledDiv>
      <SmallIcon src={imgUrl} />
      <StyledHeader>{name}</StyledHeader>
    </StyledDiv>
  );
};

export default CardBox;
