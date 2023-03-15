import React from "react";

import Characters from "../component/Characters.jsx";
import Planets from "../component/Planets.jsx";

import "../../styles/home.css";


export const Home = () => {


  return (
    <div className="container mt-3">
      <h1 className="text-danger">Characters</h1>
      <Characters />

      <h1 className="text-danger">Planets</h1>
      <Planets />
    </div>
  );
};
