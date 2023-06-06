import React from "react";
import classes from "./ImageButton.module.css";

interface IProps {
  src: string;
  onClick?: () => void;
}

const ImageButton: React.FC<IProps> = ({ src, onClick }) => {
  return (
    <button className={classes.imageButton} onClick={onClick}>
      <img src={src} alt="8bit button" />
    </button>
  );
};

export default ImageButton;
