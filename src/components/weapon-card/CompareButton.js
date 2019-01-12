import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GunsContext } from "../../MainContext";

const StyledButton = styled.button`
  background-color: blue;
`;

const CompareButton = ({ uid }) => {
  const context = useContext(GunsContext);
  const { setGunVsGun } = context.actions;

  return <StyledButton onClick={() => setGunVsGun(uid)}>Compare</StyledButton>;
};

export default CompareButton;
