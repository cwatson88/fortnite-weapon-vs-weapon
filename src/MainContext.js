import React, { useState, createContext } from "react";
import * as fortniteData from "./data/fornite-tracker.json";


export const GunsContext = createContext([0]);

const MainContext = ({ children }) => {
  
  const fortniteWeapons = Object.values(fortniteData).pop();

  const [weaponList, setWeaponList] = useState(fortniteWeapons);
  const [gunVsGun, setGunVsGun] = useState([]);

  const state = {
    weaponList,
    gunVsGun
  };
  const actions = {
    setWeaponList,
    setGunVsGun
  };

  const updateGunVsGun = gunID => {
    weaponList.find(gun => gun.uid === gunID);
  };

  const filterWeapons = (weapons, selectedWeapon) =>
    weapons.filter(weapon => !selectedWeapon);

  return (
    <div>
      <GunsContext.Provider value={{ state, actions }}>
        {children}
      </GunsContext.Provider>
    </div>
  );
};

export default MainContext;
