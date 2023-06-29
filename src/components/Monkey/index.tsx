import React, { useCallback, useEffect, useState } from "react";
import { IPlatform } from "../../pages/Game/index.js";
import classes from "./Monkey.module.css";

interface IMonkey {
  top: number;
  points: number;
  jumping: boolean;
}

interface IProps {
  platforms: IPlatform[];
}

const Monkey: React.FC<IProps> = ({ platforms }) => {
  const [monkey, setMonkey] = useState<IMonkey>({
    top: 80,
    points: 0,
    jumping: false,
  });

  // Checks if the monkey is above something
  useEffect(() => {
    if (monkey.top === 80 || monkey.jumping) return;

    setMonkey((currentValue) => {
      let currentPlatformPositionsX = platforms.map((plat) => plat.left);
      let currentPlatformPositionsY = platforms.map((plat) => plat.top);

      let canColide = false;

      platforms.forEach((plat) => {
        if (plat.top === currentValue.top + 10) {
          if (
            plat.left - plat.width >= -10 &&
            plat.left + plat.width <= plat.width
          )
            canColide = true;
          console.log("Width ", plat.width);
          console.log("Left ", plat.left);
          console.log("Top ", plat.top);
          console.log("===============");
        }
      });

      if (canColide) return currentValue;

      return {
        ...currentValue,
        top: currentValue.top + 1,
      };
    });
  }, [platforms]);

  const jump = useCallback(() => {
    if (monkey.jumping) return;

    const initialTopValue = monkey.top;
    let finishJumpInterval: number;

    function startFinishJumpInterval() {
      // finishJumpInterval = setInterval(() => {
      //   setMonkey((currentValue) => {
      //     if (currentValue.top >= initialTopValue) {
      //       clearInterval(finishJumpInterval);
      //       return currentValue;
      //     }
      //     return {
      //       ...currentValue,
      //       top: currentValue.top + 1,
      //     };
      //   });
      // }, 15);
    }

    let startJumpInterval = setInterval(() => {
      setMonkey((currentValue) => {
        if (currentValue.top <= initialTopValue - 30) {
          clearInterval(startJumpInterval);
          startFinishJumpInterval();
          return {
            ...currentValue,
            jumping: false,
          };
        }
        return {
          ...currentValue,
          top: currentValue.top - 1,
          jumping: true,
        };
      });
    }, 15);
  }, []);

  // Binds the jump event
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const { key } = e;

      if (key !== " " && key !== "ArrowUp") return;
      jump();
    });
  }, []);

  return (
    <div style={{ top: `${monkey.top}%` }} className={classes.monkey}></div>
  );
};

export default Monkey;
