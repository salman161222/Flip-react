import { useMemo } from "react";
import styles from "./FrameGroup.module.css";

const FrameGroup = ({ flipperLogo, groupIconPadding }) => {
  const frameGroupStyle = useMemo(() => {
    return {
      padding: groupIconPadding,
    };
  }, [groupIconPadding]);

  return (
    <header className={styles.frameGroup} style={frameGroupStyle}>
      <img
        className={styles.frameGroupChild}
        loading="eager"
        alt=""
        src="/group-6.svg"
      />
      <div className={styles.rectangleShape}>
        <img className={styles.flipperLogoIcon} alt="" src={flipperLogo} />
        <h3 className={styles.flip}>FLIP</h3>
      </div>
      <div className={styles.textBlock}>
        <div className={styles.streamlinebagDollarSolidParent}>
          <img
            className={styles.streamlinebagDollarSolidIcon}
            alt=""
            src="/streamlinebagdollarsolid.svg"
          />
          <div className={styles.rectangleShape1}>
            <div className={styles.textBlock1}>49.55677717</div>
            <img
              className={styles.arrowCaretDownSm}
              alt=""
              src="/arrow--caret-down-sm.svg"
            />
          </div>
          <img
            className={styles.textBlockIcon}
            loading="eager"
            alt=""
            src="/frame-5.svg"
          />
        </div>
        <div className={styles.lineShape}>
          <div className={styles.frameGroup1}>
            <div className={styles.barChart}>
              <img
                className={styles.interfaceSearchMagnifying}
                loading="eager"
                alt=""
                src="/interface--search-magnifying-glass.svg"
              />
            </div>
            <div className={styles.frameGroupInner}>
              <div className={styles.textBlockParent}>
                <div className={styles.textBlock2}>
                  <img
                    className={styles.communicationBell}
                    alt=""
                    src="/communication--bell.svg"
                  />
                </div>
                <div className={styles.textBlock3} />
              </div>
            </div>
            <div className={styles.lineShape1}>
              <div className={styles.peterPenn}>Peter Penn</div>
              <img
                className={styles.lineShapeChild}
                alt=""
                src="/frame-3@2x.png"
              />
            </div>
          </div>
          <div className={styles.component2}>
            <div className={styles.button}>
              <div className={styles.phchatTextFillParent}>
                <img
                  className={styles.phchatTextFillIcon}
                  alt=""
                  src="/phchattextfill.svg"
                />
                <div className={styles.liveChatParent}>
                  <div className={styles.liveChat}>Live Chat</div>
                  <div className={styles.pMFrame}>
                    <div className={styles.divflex}>
                      <div className={styles.divchatHeadButtonIndicato} />
                    </div>
                  </div>
                  <div className={styles.online}>Online:</div>
                </div>
                <div className={styles.div}>147</div>
              </div>
              <div className={styles.shapeFrame}>
                <img
                  className={styles.shapeFrameChild}
                  alt=""
                  src="/group-9@2x.png"
                />
                <img className={styles.svgIcon} alt="" src="/svg.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameGroup;
