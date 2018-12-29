import React, { useContext } from "react";
import styled from "styled-components";
import { CountCtx } from "../MainContext";
import CardBody from "./weapon-card/CardBody";

const StyledDivFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function WeaponSearch() {
  const context = useContext(CountCtx);
  const { weaponA } = context.state;
  const { setGuns } = context.actions;

  return (
    <StyledDivFlex>
      {weaponA.map(weapon => (
        <CardBody img={weapon.ImageSrc} name={weapon.Name} />
      ))}
    </StyledDivFlex>
  );
}
