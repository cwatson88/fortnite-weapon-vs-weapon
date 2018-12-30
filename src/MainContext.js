import React, { useState, createContext } from "react";
import * as fn from "./fornite-tracker.json";

const fortniteWeapons = Object.values(fn).pop();

export const CountCtx = createContext([0]);

const MainContext = ({ children }) => {
  const [guns, setGuns] = useState({ gun: "smg" });
  const [weaponList, setWeaponList] = useState(fortniteWeapons);
  const state = {
    guns,
    weaponList
  };
  const actions = {
    setGuns,
    setWeaponList
  };

  const filterWeapons = (weapons, selectedWeapon) =>
    weapons.filter(weapon => !selectedWeapon);

  return (
    <div>
      <CountCtx.Provider value={{ state, actions }}>
        {children}
      </CountCtx.Provider>
    </div>
  );
};

export default MainContext;
