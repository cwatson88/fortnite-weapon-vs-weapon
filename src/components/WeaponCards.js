import React, { useContext } from "react";
import styled from "styled-components";
import { CountCtx } from "../MainContext";
import CardBody from "./weapon-card/CardBody";

const StyledDivFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 55px;
`;

const StyledCategoryHeader = styled.h2`
  background: black;
  color: white;
  font-family: "Luckiest Guy", cursive;
  letter-spacing: 0.1em;
  word-spacing: 0.5em;
  padding: 12px 0 0 0;
  margin: 61px 0;
  font-size: 2.2em;
`;

export default function WeaponCards() {
  const context = useContext(CountCtx);
  const { weaponList } = context.state;
  const { setGuns } = context.actions;

  const weaponsGroupedByCategory = weaponsList =>
    weaponsList.reduce((weapons, currentWeapon) => {
      // push weapons into array but check to see if the object key exists first
      if (weapons[`${currentWeapon.category}`]) {
        weapons[`${currentWeapon.category}`].push(currentWeapon);
      } else {
        weapons[`${currentWeapon.category}`] = [currentWeapon];
      }
      return weapons;
    }, []);

  const weaponCategoriesList = weaponsGroupedByCategory(weaponList);
  return Object.keys(weaponCategoriesList).map(categoryItems => (
    <div key={categoryItems}>
      <StyledCategoryHeader>{categoryItems}</StyledCategoryHeader>
      <StyledDivFlex>
        {weaponCategoriesList[categoryItems].map(weapon => (
          <CardBody
            key={weapon.name + weapon.rarity}
            img={weapon.imageSrc}
            name={weapon.name}
            rarity={weapon.rarity}
          />
        ))}
      </StyledDivFlex>
    </div>
  ));
}
