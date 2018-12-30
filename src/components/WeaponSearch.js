import React, { useContext } from "react";
import styled from "styled-components";
import { CountCtx } from "../MainContext";
import { Dropdown } from "semantic-ui-react";

export default function WeaponSearch() {
  const context = useContext(CountCtx);
  const { weaponList } = context.state;
  const { setGuns } = context.actions;
  const changeGun = e => {
    setGuns({ gun: e.target.value });
  };
  const options = [
    { key: 1, text: "Choice 1", value: 1 },
    { key: 2, text: "Choice 2", value: 2 },
    { key: 3, text: "Choice 3", value: 3 }
  ];
  return (
    <div>
      <Dropdown
        placeholder="Select Gun"
        fluid
        search
        selection
        options={options}
      />
    </div>
  );
}
