import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <Container fluid className={styles.colorFrameParent}>
      <Row className={styles.colorFrame}>
        <Col className="d-flex align-items-center">
          <Link to="/" className={styles.linkStyles}>
            <div className={styles.linkContainer}>
              <Image
                className={styles.colorFrameChild}
                src="/frame-81@2x.png"
                alt=""
                fluid
              />
              <div className={styles.roulette}>Roulette</div>
            </div>
          </Link>
        </Col>
      </Row>
      <Row className={styles.frameParent}>
        <Col className={styles.frameGroup}>
          <Row className={styles.frameContainer}>
            <Col className={styles.frameDiv}>
              <Link to="/coinflip" className={styles.linkStyles}>
                <div className={styles.linkContainer}>
                  <Image
                    className={styles.frameChild}
                    src="/frame-75.svg"
                    alt=""
                    fluid
                  />
                  <div className={styles.coinflip}>Coinflip</div>
                </div>
              </Link>
            </Col>
            <Col className={styles.frameWrapper}>
              <Row className={styles.frameParent1}>
                <Col className={styles.rectangleParent}>
                  <div className={styles.frameItem}></div>
                  <div className={styles.frameInner}></div>
                  <div className={styles.rectangleDiv}></div>
                  <div className={styles.frameChild1}></div>
                  <div className={styles.frameChild2}></div>
                  <Image
                    className={styles.vectorIcon}
                    src="/vector-2.svg"
                    alt=""
                    fluid
                  />
                </Col>
                <div className={styles.crash}>Crash</div>
              </Row>
            </Col>
          </Row>
          <Col className={styles.frameWrapper1}>
            <Row className={styles.frameParent2}>
              <Image
                className={styles.frameIcon}
                src="/frame.svg"
                alt=""
                fluid
              />
              <div className={styles.plinko}>Plinko</div>
            </Row>
          </Col>
          <Col className={styles.frameWrapper2}>
            <Row className={styles.frameParent3}>
              <Image
                className={styles.frameIcon1}
                src="/frame-1.svg"
                alt=""
                fluid
              />
              <div className={styles.dice}>Dice</div>
            </Row>
          </Col>
        </Col>
        <Col className={styles.frameWrapper3}>
          <Row className={styles.frameParent4}>
            <Col className={styles.rectangleWrapper}>
              <div className={styles.frameChild3}></div>
            </Col>
            <div className={styles.frameCoinflip}>
              <div className={styles.frameArsenalAlicia}>
                <Image
                  className={styles.svgmarginIcon}
                  src="/svgmargin.svg"
                  alt=""
                  fluid
                />
                <div className={styles.leaderboard}>Leaderboard</div>
              </div>
              <div className={styles.frameArsenalAlicia1}>
                <Image
                  className={styles.svgmarginIcon1}
                  src="/svgmargin-1.svg"
                  alt=""
                  fluid
                />
                <div className={styles.statistics}>Statistics</div>
              </div>
              <div className={styles.frameArsenalAlicia2}>
                <Image
                  className={styles.svgmarginIcon2}
                  src="/svgmargin-2.svg"
                  alt=""
                  fluid
                />
                <div className={styles.settings}>Settings</div>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
      <Row className={styles.frameSvgOverlay}>
        <Image className={styles.linkIcon} src="/link.svg" alt="" />
        <Image className={styles.linkIcon1} src="/link-1.svg" alt="" />
        <Image className={styles.linkIcon2} src="/link-2.svg" alt="" />
      </Row>
    </Container>
  );
};

export default Sidebar;
