import React, { useState, createContext } from "react";
import * as fn from "./fornite-tracker.json";

const fortniteWeapons = Object.values(fn).pop();

export const CountCtx = createContext([0]);

const MainContext = ({ children }) => {
  const [guns, setGuns] = useState({ gun: "smg" });
  const [weaponA, setWeaponA] = useState(fortniteWeapons);
  const state = {
    guns,
    weaponA
  };
  const actions = {
    setGuns,
    setWeaponA
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
