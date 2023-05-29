import React, { useCallback, useState } from "react";
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

const Monkey: React.FC<IProps> = ({platforms}) => {
  const [monkey, setMonkey] = useState<IMonkey>({
    top: 80,
    points: 0,
    jumping: false,
  });

  const jump = useCallback(() => {
    if(monkey.jumping) return;

    setMonkey((currentValue) => ({...currentValue, jumping: true}));

    const initialTopValue = monkey.top;
    setInterval(() => {
        
    }, 5);
  }, [])

  return (
    <div style={{ top: `${monkey.top}%` }} className={classes.monkey}></div>
  );
};

export default Monkey;
