import React, { useEffect, useState } from "react";
import Monkey from "../../components/Monkey/index.js";
import classes from "./Game.module.css";

export interface IPlatform {
  top: number;
  width: number;
  left: number;
}

const Game = () => {
  const [platforms, setPlatforms] = useState<IPlatform[]>([
    {
      top: 30,
      width: 100,
      left: 2,
    },
    {
      top: 60,
      width: 100,
      left: 2,
    },
    {
      top: 30,
      width: 0,
      left: 0,
    },
    {
      top: 60,
      width: 0,
      left: 0,
    },
  ]);
  const [currentPlatformPositions, setPlatformPositions] = useState([
    platforms[0].left,
    platforms[1].left,
    // platforms[2].left,
    // platforms[3].left,
  ]);
  const [currentSpeed, setCurrentSpeed] = useState(50);
  const [gameLoop, setGameloop] = useState<number>();

  // Main game loop
  useEffect(() => {
    if (gameLoop) {
      clearInterval(gameLoop);
    }
    setGameloop(
      setInterval(() => {
        setPlatforms((currentPlatforms) => {
          return currentPlatforms.map((platform) => {
            if (
              platform.left < -100 &&
              currentPlatformPositions.filter((value) => value > 100).length < 1
            ) {
              const randomChance = Math.floor(Math.random() * (20 - 1 + 1) + 1);
              if (randomChance !== 1)
                return {
                  ...platform,
                };
              const width = Math.floor(Math.random() * (100 - 20 + 1) + 20);

              if (currentPlatformPositions.includes(100 - width))
                return {
                  ...platform,
                };
              return {
                ...platform,
                width: width,
                left: 100,
              };
            }
            return {
              ...platform,
              left: platform.left - 1,
            };
          });
        });
      }, currentSpeed)
    );
  }, [currentSpeed]);

  function renderPlatforms() {
    return platforms.map((platform, index) => {
      return (
        <div
          key={index}
          className={classes.platform}
          style={{
            marginTop: `${platform.top}vh`,
            marginLeft: `${platform.left}vw`,
            width: `${platform.width}vh`,
          }}
        ></div>
      );
    });
  }

  return (
    <main className={classes.game}>
      {renderPlatforms()} <Monkey platforms={platforms} />
      <div
        className={classes.platform}
        style={{
          backgroundColor: "chartreuse",
          marginTop: `90vh`,
          width: `100vw`,
        }}
      ></div>
    </main>
  );
};

export default Game;
