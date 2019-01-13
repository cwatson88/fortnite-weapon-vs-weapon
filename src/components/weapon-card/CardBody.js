import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Portal from "../../Portal";
import CompareButton from "./CompareButton";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const flipOut = keyframes`
  0% {
    opacity: 1;
    transform: rotateY(120deg)
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg) scale(2);
  }
`;

const fadeCardAnimation = css`
  transform-origin: right center;
  animation: 0.4s ${fadeIn} ease-out 0s 1 normal forwards;
`;
const fipCardAnimation = css`
  animation: 0.5s ${flipOut} ease-out 0s 1 normal forwards;
`;

const backgroundGradient = css`
  background: ${({ rarityHSL: [h, s, l] }) => `
  linear-gradient(
    135deg,
    hsl(${h}, ${s}%, ${l}%) 0%,
    hsl(${h}, ${s}%, ${l - 10}%) 50%,
    hsl(${h}, ${s}%, ${l - 20}%) 100%
  );`};
`;

const StyledCardBody = styled.div`
  max-width: 170px;
  min-width: 160px;
  width: auto;
  height: 230px;
  border-radius: 13px;
  ${backgroundGradient}
  box-shadow: -11px -8px 8px 3px #00000047;
  padding: 2px;
  margin: 10px;
`;

const FrontCard = styled(StyledCardBody)`
  transform: rotate(-5deg);
  margin-left: -47px;
  ${props => (!props.animation ? fadeCardAnimation : null)};
  :hover {
    cursor: pointer;
  }
`;
const BackCard = styled(StyledCardBody)`
  font-size: 0.4em;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props => (props.animation ? fipCardAnimation : null)};
  img {
    height: 50px;
  }
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
  text-shadow: -2px 3px 1px #00000059;
  font-family: "Staatliches", monospace;
  letter-spacing: 1px;
  font-size: 1.4em;
  line-height: 0.9em;
`;

const Modal = styled.div`
  background: #0000009e;
  width: 100%;
  z-index: 9999;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBody = ({
  name,
  img,
  rarity,
  index,
  dps,
  damage,
  envDamage,
  fireRate5,
  magazine,
  reloadTime,
  uid
}) => {
  const [flipped, setFlipped] = useState(false);
  const imgUrl = `https://db.fortnitetracker.com/${img}`;
  const rarityColor = rarity => {
    switch (rarity) {
      case "Common":
        return [0, 0, 80];
      case "Uncommon":
        return [151, 100, 33];
      case "Rare":
        return [195, 100, 37];
      case "Epic":
        return [286, 80, 48];
      case "Legendary":
        return [36, 71, 55];
      default:
        return [0, 0, 0];
    }
  };
  return (
    <div>
      {!flipped ? (
        <FrontCard
          rarityHSL={rarityColor(rarity)}
          index={index}
          onClick={() => setFlipped(!flipped)}
          animation={flipped}
        >
          <SmallIcon src={imgUrl} />
          <StyledHeader>{name}</StyledHeader>
        </FrontCard>
      ) : (
        <Portal>
          <Modal>
            <BackCard
              rarityHSL={rarityColor(rarity)}
              index={index}
              onClick={() => setFlipped(!flipped)}
              animation={flipped}
            >
              <SmallIcon src={imgUrl} />
              <StyledHeader>{name}</StyledHeader>
              <p>dps: {dps}</p>
              <p>damage: {damage}</p>
              <p>envDamage: {envDamage}</p>
              <p>fireRate5: {fireRate5}</p>
              <p>magazine: {magazine}</p>
              <p>reloadTime: {reloadTime}</p>
              <CompareButton uid={uid} />
            </BackCard>
          </Modal>
        </Portal>
      )}
    </div>
  );
};

export default CardBody;
