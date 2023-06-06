import React from "react";
import classes from "./Help.module.css";

import Title from "../../components/Title";
import BackButton from "../../components/BackButton";

import arrowDown from "../../assets/helpIcons/arrowDownIcon.png";
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
      <p>
        2x <img className={classes.spacebar} src={spacebar} alt="spacebar" /> -
        Double Jump
      </p>
      <p>
        <img className={classes.arrow} src={arrowDown} alt="arrow down" /> -
        Squat
      </p>
    </main>
  );
};

export default Help;
