import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  monkey,
  prop,
  propPadding,
  propBackgroundImage,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
      backgroundImage: propBackgroundImage,
    };
  }, [propPadding, propBackgroundImage]);

  return (
    <div className={styles.monkeyParent} style={frameDivStyle}>
      <div className={styles.monkey}>{monkey}</div>
      <div className={styles.coinssvgParent}>
        <img className={styles.coinssvgIcon} alt="" src="/coinssvg.svg" />
        <div className={styles.div}>{prop}</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
