import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import MainContext from "./MainContext";
import "semantic-ui-css/semantic.min.css";
import WeaponCards from "./components/WeaponCards";
import "./styles.css";
import CompareBoard from "./components/compare-area/CompareBar";

function App() {
  return (
    <div className="App">
      <MainContext>
        <CompareBoard />
        <Header />
        <WeaponCards />
      </MainContext>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
