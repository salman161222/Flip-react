import { useMemo } from "react";
import styles from "./Component.module.css";

const Component = ({ prop, propBackgroundImage }) => {
  const nestedFrameBStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={styles.div}>
      <div className={styles.nestedFrameB} style={nestedFrameBStyle}>
        <div className={styles.okayBearsNft}>Okay Bears NFT</div>
        <div className={styles.coinssvgParent}>
          <img className={styles.coinssvgIcon} alt="" src="/coinssvg.svg" />
          <div className={styles.div1}>{prop}</div>
        </div>
      </div>
      <div className={styles.joinForParent}>
        <b className={styles.joinFor}>Join for</b>
        <img className={styles.coinssvgIcon1} alt="" src="/coinssvg.svg" />
        <b className={styles.b}>5.00</b>
      </div>
      <div className={styles.nestedFrameCParent}>
        <div className={styles.nestedFrameC}>
          <div className={styles.secondaryInteractiveElement}>
            <b className={styles.additionalVectorGraphic}>49</b>
            <img
              className={styles.secondaryInteractiveElementChild}
              loading="eager"
              alt=""
              src="/ellipse-1@2x.png"
            />
          </div>
          <img className={styles.coin12Icon} alt="" src="/coin-12.svg" />
        </div>
        <div className={styles.parentFrameArsenal}>
          <i className={styles.v}>V</i>
          <div className={styles.frameChelseaText}>
            <i className={styles.s}>S</i>
          </div>
          <img
            className={styles.parentFrameArsenalChild}
            alt=""
            src="/group-1581@2x.png"
          />
        </div>
        <div className={styles.pMArsenalAliciaChelsa}>
          <img
            className={styles.coin4Icon}
            loading="eager"
            alt=""
            src="/coin-4.svg"
          />
          <div className={styles.frameGreenRectangle}>
            <b className={styles.coinflipArsenalBlue}>120</b>
            <img
              className={styles.sVGArsenalLogo}
              alt=""
              src="/ellipse-1-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameChelseaLogo}>
        <b className={styles.watchCoinFlip}>Watch Coin Flip</b>
      </div>
    </div>
  );
};

export default Component;
