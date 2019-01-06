import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { useSpring, animated as a } from "react-spring/hooks";
import Portal from "../../Portal";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: rotate(-11deg);
  }
  100% {
    opacity: 1;
    transform: rotate(11deg);
  }
`;

const flipOut = keyframes`
  0% {
    opacity: 1;
    transform: rotate(11deg);
  }
  100% {
    opacity: 1;
    transform: rotateY(180deg) scale(2);
  }
`;

const anim = css`
  animation: 0.4s ${fadeIn} ease-out 0s 1 normal forwards;
`;
const anim2 = css`
  animation: 1s ${flipOut} ease-out 0s 1 normal forwards;
`;

const StyledCardBody = styled.div`
  max-width: 170px;
  min-width: 160px;
  width: auto;
  height: 230px;
  border-radius: 13px;
  background: radial-gradient(#cccccc, ${props => props.rarity});
  box-shadow: -11px -8px 8px 3px #00000047;
  padding: 2px;
  margin: 10px;
  transform: rotate(-11deg);
  margin-left: -47px;
  transform-origin: top left;
`;

const FrontCard = styled(StyledCardBody)`
  ${props => (!props.animation ? anim : null)};
`;
const BackCard = styled(StyledCardBody)`
  ${props => (props.animation ? anim2 : null)};
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

const Modal = styled(Portal)`
  background: #0000009e;
  width: 100%;
  z-index: 9999;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
`;

const CardBody = ({ name, img, rarity, index }) => {
  const [flipped, setFlipped] = useState(false);
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
    <div>
      {!flipped ? (
        <FrontCard
          rarity={rarityColor(rarity)}
          index={index}
          onClick={() => setFlipped(!flipped)}
          animation={flipped}
        >
          <SmallIcon src={imgUrl} />
          <StyledHeader>{name}</StyledHeader>
        </FrontCard>
      ) : (
        <Modal>
          <BackCard
            rarity={rarityColor(rarity)}
            index={index}
            onClick={() => setFlipped(!flipped)}
            animation={flipped}
          />
        </Modal>
      )}
    </div>
  );
};

export default CardBody;
