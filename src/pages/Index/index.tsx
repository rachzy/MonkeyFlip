import { MutableRefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./index.module.css";

import PlayButton from "../../components/PlayButton";
import ImageButton from "../../components/ImageButton";

import monkeyIcon from "../../assets/homeIcons/monkeyIcon.png";
import titleBanner from "../../assets/homeIcons/title.png";
import creditsButton from "../../assets/homeIcons/creditsIcon.png";
import helpButton from "../../assets/homeIcons/helpIcon.png";

const Index = () => {
  const navigate = useNavigate();

  const mainRef = useRef() as MutableRefObject<HTMLElement>;

  const handleStartButtonClick = () => {
    mainRef.current.classList.toggle("slideAway");
    setTimeout(() => {
      window.location.href = "https://rachzy.github.io/monkey-flip/";
    }, 1000);
  };
  return (
    <main ref={mainRef} className="mainMenu">
      <img
        className={classes.decorationBanner}
        src={monkeyIcon}
        alt="monkey 8-bit"
      />
      <img className={classes.title} src={titleBanner} alt="monkey flip" />
      <PlayButton fadeInAnimation onClick={handleStartButtonClick} />

      <div className={classes.bottomBtns}>
        <ImageButton onClick={() => navigate("/credits")} src={creditsButton} />
        <ImageButton onClick={() => navigate("/help")} src={helpButton} />
      </div>
    </main>
  );
};

export default Index;
