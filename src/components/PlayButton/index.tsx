import classes from "./PlayButton.module.css";

import playIcon from "../../assets/homeIcons/playIcon.png";
import React from "react";

interface IProps {
  onClick?: () => void;
  style?: React.CSSProperties;
  fadeInAnimation?: boolean;
}

const PlayButton: React.FC<IProps> = ({ onClick, style, fadeInAnimation }) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={`${classes.playBtn} ${fadeInAnimation && classes.fadeIn}`}
    >
      <img src={playIcon} alt="play icon" />
    </button>
  );
};

export default PlayButton;
