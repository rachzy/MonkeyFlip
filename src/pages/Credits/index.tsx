import React from "react";
import classes from "./Credits.module.css";

import backButton from "../../assets/backButton.png";
import ImageButton from "../../components/ImageButton";
import { useNavigate } from "react-router-dom";

const Credits = () => {
  const navigate = useNavigate();
  return (
    <main className={classes.main}>
      <button onClick={() => navigate("/")}>
        <img src={backButton} alt="8bit back button" />
        <h2>VOLTAR</h2>
      </button>
      <div className={classes.devsContainer}>
        <div>
          <h1>DEV</h1>
          <p>{"-->"} Pedro "rach" Henrique</p>
        </div>
        <div>
          <h1>ART & DESIGN</h1>
          <p>{"-->"} Rodolfo "oBST01" Cruz</p>
        </div>
      </div>
    </main>
  );
};

export default Credits;
