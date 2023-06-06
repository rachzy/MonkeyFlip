import React from "react";
import classes from "./BackButton.module.css";

import backButton from "../../assets/backButton.png";

import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={classes.backButton} onClick={() => navigate("/")}>
      <img src={backButton} alt="8bit back button" />
      <h2>VOLTAR</h2>
    </button>
  );
};

export default BackButton;
