import React from "react";
import classes from "./Credits.module.css";

import BackButton from "../../components/BackButton";
import Title from "../../components/Title";

const Credits = () => {
  return (
    <main className={classes.main}>
      <BackButton />
      <div className={classes.devsContainer}>
        <div>
          <Title>DEV</Title>
          <p>{"-->"} Pedro "rach" Henrique</p>
        </div>
        <div>
          <Title>ART & DESIGN</Title>
          <p>{"-->"} Rodolfo "oBST01" Cruz</p>
        </div>
      </div>
    </main>
  );
};

export default Credits;
