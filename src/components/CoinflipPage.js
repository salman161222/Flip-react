import Component from "./Component";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";
import styles from "./CoinflipPage.module.css";
import CoinflipOverviewTab from "./CoinflipOverviewTab";
import { Col } from "react-bootstrap";

const CoinflipPage = () => {
  return (
    <section className={styles.frameArsenalAliciaChelsea}>
      <div className={styles.textCoinflip}>
        <div className={styles.frameRectangle}>
          <div className={styles.textArsenalAliciaChelsea}>
            <h2 className={styles.coinflip}>coinflip</h2>
            <div className={styles.frameWhiteSpace}>
              <img
                className={styles.mediaVolumeMax}
                alt=""
                src="/media--volume-max.svg"
              />
              <div className={styles.soundOn}>Sound on</div>
            </div>
          </div>
          <div className={styles.frameTextOverlay}>
            <div className={styles.frameArrow}>
              <div className={styles.side}>
                <div className={styles.selectSide}>Select Side:</div>
                <div className={styles.frameDividerLine}>
                  <img
                    className={styles.divsideIcon}
                    alt=""
                    src="/divside@2x.png"
                  />
                  <img
                    className={styles.divsideIcon1}
                    alt=""
                    src="/divside-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.textPMMessage}>
                <div className={styles.spanfontNumericParent}>
                  <img
                    className={styles.spanfontNumericIcon}
                    alt=""
                    src="/spanfontnumeric.svg"
                  />
                  <div className={styles.enterBetAmount}>
                    <input
                      type="text"
                      className={styles.enterBetAmount}
                      placeholder="Enter bet amount..."
                    />
                  </div>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.clearParent}>
                    <div className={styles.clear}>
                      <div className={styles.clear1}>Clear</div>
                    </div>
                    <div className={styles.div}>
                      <div className={styles.div1}>+0.01</div>
                    </div>
                    <div className={styles.div2}>
                      <div className={styles.div3}>+0.1</div>
                    </div>
                    <div className={styles.div4}>
                      <div className={styles.div5}>+1</div>
                    </div>
                    <div className={styles.div6}>
                      <div className={styles.div7}>+10</div>
                    </div>
                    <div className={styles.div8}>
                      <div className={styles.div9}>+100</div>
                    </div>
                    <div className={styles.div10}>
                      <div className={styles.div11}>1/2</div>
                    </div>
                    <div className={styles.div12}>
                      <div className={styles.x2}>X2</div>
                    </div>
                    <div className={styles.div13}>
                      <div className={styles.max}>MAX</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWithSVG}>
          <Component
            prop="40.00"
            propBackgroundImage="url('/nested-frame-b@3x.png')"
          />
          <div className={styles.div14}>
            <FrameComponent1
              monkey="Monkey "
              prop="10.00"
              propPadding="var(--padding-xs) var(--padding-lg) var(--padding-xs) var(--padding-sm)"
              propBackgroundImage="url('/frame-23@3x.png')"
            />
            <div className={styles.joinForParent}>
              <b className={styles.joinFor}>Join for</b>
              <img className={styles.coinssvgIcon} alt="" src="/coinssvg.svg" />
              <b className={styles.b}>5.00</b>
            </div>
            <FrameComponent group1581="/group-1581@2x.png" />
            <div className={styles.frameParent}>
              <div className={styles.joinForGroup}>
                <b className={styles.joinFor1}>Join for</b>
                <img
                  className={styles.coinssvgIcon1}
                  alt=""
                  src="/coinssvg-4.svg"
                />
              </div>
              <b className={styles.pMChelsea}>5.00</b>
            </div>
          </div>
          <Component
            prop="20.00"
            propBackgroundImage="url('/frame-231@3x.png')"
          />
          <div className={styles.div15}>
            <FrameComponent1
              monkey="Okay Bears NFT"
              prop="40.00"
              propPadding="var(--padding-xs) var(--padding-mini) var(--padding-xs) var(--padding-smi)"
              propBackgroundImage="url('/frame-232@3x.png')"
            />
            <div className={styles.joinForContainer}>
              <b className={styles.joinFor2}>Join for</b>
              <img
                className={styles.coinssvgIcon2}
                alt=""
                src="/coinssvg.svg"
              />
              <b className={styles.b1}>5.00</b>
            </div>
            <FrameComponent group1581="/group-1581-3@2x.png" />
            <div className={styles.frameDiv}>
              <b className={styles.joinFor3}>Join for</b>
              <img
                className={styles.coinssvgIcon3}
                alt=""
                src="/coinssvg-4.svg"
              />
              <b className={styles.frameBackgroundImage}>5.00</b>
            </div>
          </div>
        </div>
      </div>
      <Col md={12} xs={12} lg={12} className={styles.overviewWrapper}>
        <h2 className={styles.overview}>Overview</h2>
        <CoinflipOverviewTab />
      </Col>
    </section>
  );
};

export default CoinflipPage;
