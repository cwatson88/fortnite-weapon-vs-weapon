import React, { useContext, useState } from "react";
import { GunsContext } from "../../MainContext";
import styled from "styled-components";

const BarBody = styled.div`
  background-color: grey;
  height: 220px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const CardHolder = styled.div`
  width: 150px;
  height: 200px;
  background-color: blue;
`;

const StyledVs = styled.h2`
  color: yellow;
  font-family: "Staatliches";
  text-shadow: 3px 1px 1px #4527a0;
  line-height: 0.8em;
  font-size: 3em;
`;

const CompareBar = () => {
  const context = useContext(GunsContext);
  const { weaponList } = context.state;

  return (
    <BarBody>
      <CardHolder />
      <StyledVs>VS</StyledVs>
      <CardHolder />
    </BarBody>
  );
};

export default CompareBar;
