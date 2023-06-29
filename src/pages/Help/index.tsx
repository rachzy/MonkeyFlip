import React from "react";
import classes from "./Help.module.css";

import Title from "../../components/Title";
import BackButton from "../../components/BackButton";

import arrowUp from "../../assets/helpIcons/arrowUpIcon.png";
import spacebar from "../../assets/helpIcons/spaceIcon.png";

const Help = () => {
  return (
    <main className={classes.main}>
      <BackButton />
      <Title>Controls</Title>
      <p>
        <img className={classes.spacebar} src={spacebar} alt="spacebar" /> or{" "}
        <img className={classes.arrow} src={arrowUp} alt="arrow-up" /> - Jump
      </p>
    </main>
  );
};

export default Help;
