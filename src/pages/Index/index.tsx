import { MutableRefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./index.module.css";

import PlayButton from "../../components/PlayButton";

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
      navigate("/game");
    }, 1000);
  };
  return (
    <main ref={mainRef}>
      <img
        className={classes.decorationBanner}
        src={monkeyIcon}
        alt="monkey 8-bit"
      />
      <img className={classes.title} src={titleBanner} alt="monkey flip" />
      <PlayButton fadeInAnimation onClick={handleStartButtonClick} />

      <div className={classes.bottomBtns}>
        <button>
          <img src={creditsButton} alt="credits 8bit button" />
        </button>
        <button>
          <img src={helpButton} alt="help 8bit button" />
        </button>
      </div>
    </main>
  );
};

export default Index;
