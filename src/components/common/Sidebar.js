import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <Container fluid className={styles.colorFrameParent}>
      <Row className={styles.frameParent}>
        <Col className={styles.frameGroup}>
          <Row className={styles.frameContainer}>
            <Col className={`d-flex align-items-center ${styles.activeTab}`}>
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
            <Col className={styles.frameDiv}>
              <Image
                className={styles.frameIcon}
                src="/bar-up.svg"
                alt=""
                fluid
              />

              <div className={styles.crash}>Crash</div>
            </Col>
            <Col className={styles.frameDiv}>
              <Image
                className={styles.frameIcon}
                src="/frame.svg"
                alt=""
                fluid
              />
              <div className={styles.plinko}>Plinko</div>
            </Col>
            <Col className={styles.frameDiv}>
              <Image
                className={styles.frameIcon1}
                src="/frame-1.svg"
                alt=""
                fluid
              />
              <div className={styles.dice}>Dice</div>
            </Col>
          </Row>
        </Col>
        <Col className={styles.frameWrapper}>
          <Row className={styles.frameParent}>
            <Col className={styles.rectangleWrapper}>
              <div className={styles.frameChild}></div>
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
              <div className={styles.frameArsenalAlicia}>
                <Image
                  className={styles.svgmarginIcon}
                  src="/svgmargin-1.svg"
                  alt=""
                  fluid
                />
                <div className={styles.statistics}>Statistics</div>
              </div>
              <div className={styles.frameArsenalAlicia}>
                <Image
                  className={styles.svgmarginIcon}
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
        <Col>
          <Image className={styles.linkIcon} src="/link.svg" alt="" />
        </Col>
        <Col>
          <Image className={styles.linkIcon1} src="/link-1.svg" alt="" />
        </Col>
        <Col>
          <Image className={styles.linkIcon2} src="/link-2.svg" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
