import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 170px;
  width: auto;
  height: 230px;
  border-radius: 13px;
  background: radial-gradient(#cccccc, ${props => props.rarity});
  box-shadow: -4px -2px 3px 0px #00000047;
  padding: 2px;
  margin: 10px;
  transform: rotate(-11deg);
  margin-left: -47px;
  transform-origin: top left;
`;

const SmallIcon = styled.img`
  width: auto;
  height:auto
  max-height: 100px;
  transform: rotate(45deg);
  opacity: 0.7;
`;

const StyledHeader = styled.header`
  color: white;
  text-shadow: 3px 3px 2px #000000a1;
  font-family: "Major Mono Display", monospace;
  letter-spacing: 0px;
  font-size: 1.4em;
  line-height: 0.9em;
`;

const CardBox = ({ name, img, rarity, index }) => {
  const imgUrl = `https://db.fortnitetracker.com/${img}`;
  const rarityColor = rarity => {
    switch (rarity) {
      case "Common":
        return "#7e7e7e";
      case "Uncommon":
        return "#00aa58";
      case "Rare":
        return "#008fbd";
      case "Epic":
        return "#b018dd";
      case "Legendary":
        return "#de9c3c";
      default:
        return "white";
    }
  };
  return (
    <StyledDiv rarity={rarityColor(rarity)} index={index}>
      <SmallIcon src={imgUrl} />
      <StyledHeader>{name}</StyledHeader>
    </StyledDiv>
  );
};

export default CardBox;
