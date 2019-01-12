import React, { useState, createContext } from "react";
import * as fn from "./fornite-tracker.json";

const fortniteWeapons = Object.values(fn).pop();
const getCenterBrowserWindow = () => {
  const centerX = document.documentElement.clientWidth / 2;
  const centerY = document.documentElement.clientHeight / 2;
  return { x: centerX, y: centerY };
};

export const GunsContext = createContext([0]);

const MainContext = ({ children }) => {
  const [guns, setGuns] = useState({ gun: "smg" });
  const [weaponList, setWeaponList] = useState(fortniteWeapons);
  const [centerBrowserWindow, setCenterBrowserWindow] = useState(
    getCenterBrowserWindow()
  );
  const [gunVsGun, setGunVsGun] = useState([]);
  const state = {
    guns,
    weaponList,
    centerBrowserWindow,
    gunVsGun
  };
  const actions = {
    setGuns,
    setWeaponList,
    setCenterBrowserWindow,
    setGunVsGun
  };

  const updateGunVsGun = gunID => {
    weaponList.find(gun => gun.uid === gunID);
  };

  window.addEventListener("resize", () => {
    setCenterBrowserWindow(getCenterBrowserWindow());
  });

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
