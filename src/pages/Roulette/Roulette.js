import { Col, Row } from "react-bootstrap";
import Sidebar from "../../components/common/Sidebar";
import DailyRoulette from "../../components/DailyRoulette";
import FrameGroup from "../../components/FrameGroup";
import styles from "./Roulette.module.css";

const Roulette = () => {
  return (
    <div className={styles.roulette}>
      <FrameGroup
        flipperLogo="pending_68:38254"
        groupIconPadding="0px 0px 0px var(--padding-21xl)"
      />
      <main className={styles.frameParent}>
        <div className={styles.container}>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10} className={styles.scrollableContent}>
            <section className={styles.frameDateBetPM}>
              <div className={styles.divUserFrameBetAmount}>
                <div className={styles.rectangleArsenalvsChelsea}>
                  <h2 className={styles.roulette2}>Roulette</h2>
                  <div className={styles.parentFrameSVGPayoutPM}>
                    <img
                      className={styles.mediaVolumeMax}
                      alt=""
                      src="/media--volume-max.svg"
                    />
                    <div className={styles.soundOn}>Sound on</div>
                  </div>
                </div>
                <div className={styles.parentFrameBackgroundColor}>
                  <div className={styles.frameLineSeperator}>
                    <div className={styles.rolling}>Rolling</div>
                    <div className={styles.frameDate}>
                      <div className={styles.framesvgPM}>3.89</div>
                      <img
                        className={styles.rectangleArsenalvsChelseaTh}
                        alt=""
                        src="/rectangle-arsenalvs-chelsea-thumbnail.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleArsenalvsChelseaTh1}>
                    <div className={styles.groupedFramesParent}>
                      <div className={styles.groupedFrames}>
                        <div className={styles.frameStack}>
                          <div className={styles.wrapperCoin}>
                            <img
                              className={styles.coinIcon}
                              loading="eager"
                              alt=""
                              src="/coin.svg"
                            />
                          </div>
                          <div className={styles.wrapperCoin1}>
                            <img
                              className={styles.coinIcon1}
                              alt=""
                              src="/coin-1.svg"
                            />
                          </div>
                          <div className={styles.wrapperCoin1}>
                            <img
                              className={styles.coinIcon1}
                              alt=""
                              src="/coin-1.svg"
                            />
                          </div>
                          <div className={styles.wrapperCoin1}>
                            <img
                              className={styles.coinIcon1}
                              alt=""
                              src="/coin-1.svg"
                            />
                          </div>
                          <div className={styles.wrapperCoin1}>
                            <img
                              className={styles.coinIcon1}
                              alt=""
                              src="/coin-1.svg"
                            />
                          </div>
                          <div className={styles.wrapperCoin1}>
                            <img
                              className={styles.coinIcon1}
                              alt=""
                              src="/coin-1.svg"
                            />
                          </div>
                          <div className={styles.wrapperCoin1}>
                            <img
                              className={styles.coinIcon1}
                              alt=""
                              src="/coin-1.svg"
                            />
                          </div>
                          <img
                            className={styles.coinIcon2}
                            alt=""
                            src="/coin-2.svg"
                          />
                          <img
                            className={styles.coinIcon3}
                            alt=""
                            src="/coin-3.svg"
                          />
                          <img
                            className={styles.coinIcon4}
                            alt=""
                            src="/coin-41.svg"
                          />
                          <img
                            className={styles.coinIcon5}
                            alt=""
                            src="/coin-5.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.multiLevelFrames}>
                        <div className={styles.previousRolls}>
                          Previous rolls
                        </div>
                        <img
                          className={styles.multiLevelFramesChild}
                          loading="eager"
                          alt=""
                          src="/group-2.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.coinIcon6}
                      alt=""
                      src="/coin-6.svg"
                    />
                    <img
                      className={styles.coinIcon7}
                      alt=""
                      src="/coin-7.svg"
                    />
                    <img
                      className={styles.coinIcon8}
                      alt=""
                      src="/coin-8.svg"
                    />
                    <img
                      className={styles.coinIcon9}
                      alt=""
                      src="/coin-9.svg"
                    />
                    <div className={styles.childFrameset}>
                      <div className={styles.frameQuadrant}>
                        <img
                          className={styles.coinIcon10}
                          alt=""
                          src="/coin-10.svg"
                        />
                        <div className={styles.wrapperCoin2}>
                          <img
                            className={styles.coinIcon11}
                            alt=""
                            src="/coin-11.svg"
                          />
                        </div>
                        <div className={styles.wrapperCoin3}>
                          <img
                            className={styles.coinIcon12}
                            alt=""
                            src="/coin-12.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameCells}>
                        <div className={styles.dateFrame}>
                          <div className={styles.last100}>Last 100</div>
                          <div className={styles.horizontalDivider}>
                            <img
                              className={styles.coin4Icon}
                              loading="eager"
                              alt=""
                              src="/coin-42.svg"
                            />
                            <div className={styles.verticalDivider}>40</div>
                          </div>
                          <div className={styles.horizontalDivider1}>
                            <img
                              className={styles.coin5Icon}
                              loading="eager"
                              alt=""
                              src="/coin-51.svg"
                            />
                            <div className={styles.div}>4</div>
                          </div>
                          <div className={styles.horizontalDivider2}>
                            <img
                              className={styles.coin3Icon}
                              loading="eager"
                              alt=""
                              src="/coin-31.svg"
                            />
                            <div className={styles.div1}>56</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 betSectionWrapper">
                  <Col md={8} className="pb-3 mx-auto betContainer">
                    <div className={styles.topPMContainer}>
                      <div className={styles.bottomPMContainer}>
                        <img
                          className={styles.spanfontNumericIcon}
                          alt=""
                          src="/spanfontnumeric.svg"
                        />
                        {/* <div className={styles.enterBetAmount}> */}
                        <input
                          type="text"
                          className={styles.enterBetAmount}
                          placeholder="Enter bet amount..."
                        />
                        {/* </div> */}
                        <div className={styles.bottomPMContainerInner}>
                          <div className={styles.frameChild5} />
                        </div>
                        <div className={styles.clearParent}>
                          <div className={styles.clear}>
                            <div className={styles.clear1}>Clear</div>
                          </div>
                          <div className={styles.div2}>
                            <div className={styles.div3}>+0.01</div>
                          </div>
                          <div className={styles.div4}>
                            <div className={styles.div5}>+0.1</div>
                          </div>
                          <div className={styles.div6}>
                            <div className={styles.div7}>+1</div>
                          </div>
                          <div className={styles.div8}>
                            <div className={styles.div9}>+10</div>
                          </div>
                          <div className={styles.div10}>
                            <div className={styles.div11}>+100</div>
                          </div>
                          <div className={styles.div12}>
                            <div className={styles.div13}>1/2</div>
                          </div>
                          <div className={styles.div14}>
                            <div className={styles.x2}>X2</div>
                          </div>
                          <div className={styles.div15}>
                            <div className={styles.max}>MAX</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={{ span: 10, offset: 1 }}>
                    <Row>
                      <Col md={4}>
                        <div className={styles.xPMRow}>
                          <div className={styles.arsenalAliciaFrame}>
                            <div className={styles.resultCell}>
                              <img
                                className={styles.coin5Icon1}
                                alt=""
                                src="/coin-51.svg"
                              />
                              <div className={styles.placeBet}>Place Bet</div>
                            </div>
                            <div className={styles.win2x}>Win 2x</div>
                          </div>
                          <div className={styles.resultRow}>
                            <div className={styles.arsenalAliciaChelseaFrame}>
                              <div className={styles.betsTotal}>
                                17 Bets Total
                              </div>
                              <div className={styles.sVGColumn}>
                                <img
                                  className={styles.spanfontNumericIcon1}
                                  alt=""
                                  src="/spanfontnumeric-1.svg"
                                />
                                <div className={styles.div16}>139.10</div>
                              </div>
                            </div>
                            <div className={styles.dukajFrnkfrtChildParent}>
                              <div className={styles.dukajFrnkfrtChild}>
                                <div className={styles.childFramesParent}>
                                  <img
                                    className={styles.childFramesIcon}
                                    loading="eager"
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild6} />
                                  <div className={styles.fenrik}>FenRik</div>
                                </div>
                                <div className={styles.primaryUserData}>
                                  40.00
                                </div>
                              </div>
                              <div className={styles.bettingLayout}>
                                <div className={styles.dateDivider}>
                                  <img
                                    className={styles.arsenalLogoIcon}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.dateDividerChild} />
                                  <div className={styles.tiki}>Tiki</div>
                                </div>
                                <div className={styles.headerSV}>20.00</div>
                              </div>
                              <div className={styles.subheaderText}>
                                <div className={styles.winLossSVGs}>
                                  <img
                                    className={styles.mainBackgroundIcon}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.winLossSVGsChild} />
                                  <div className={styles.aswrd}>aswrd</div>
                                </div>
                                <div className={styles.frameWithPayout}>
                                  20.00
                                </div>
                              </div>
                              <div className={styles.multiplicationDiv}>
                                <div className={styles.userTextCell}>
                                  <img
                                    className={styles.pMColumnName}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.userTextCellChild} />
                                  <div className={styles.morrriez}>
                                    Morrriez
                                  </div>
                                </div>
                                <div className={styles.titleFrame}>18.00</div>
                              </div>
                              <div className={styles.primaryFrames}>
                                <div className={styles.beauFontFrames}>
                                  <img
                                    className={styles.ellipseGroupIcon}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.beauFontFramesChild} />
                                  <div className={styles.frnkfrt2324}>
                                    Frnkfrt2324
                                  </div>
                                </div>
                                <div className={styles.frameGroups}>11.00</div>
                              </div>
                              <div className={styles.frameGroups1}>
                                <div className={styles.frameGroups2}>
                                  <img
                                    className={styles.frameGroupsIcon}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameGroupsChild} />
                                  <div className={styles.beau}>Beau</div>
                                </div>
                                <div className={styles.frameGroups3}>9.00</div>
                              </div>
                              <div className={styles.dukajPair}>
                                <div className={styles.frameTrios}>
                                  <img
                                    className={styles.frameTriosIcon}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameTriosChild} />
                                  <div className={styles.dukaj}>dukaj</div>
                                </div>
                                <div className={styles.frameTrios1}>8.00</div>
                              </div>
                              <div className={styles.foxyFrames}>
                                <div className={styles.foxyFrames1}>
                                  <img
                                    className={styles.foxyFramesIcon}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.foxyFramesChild} />
                                  <div className={styles.foxy}>-Foxy</div>
                                </div>
                                <div className={styles.pUD}>8.00</div>
                              </div>
                              <div className={styles.dukajFrnkfrtChild1}>
                                <div className={styles.ellipseParent}>
                                  <img
                                    className={styles.ellipseIcon}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild7} />
                                  <div className={styles.pudgyPalh}>
                                    PUDGY PALH
                                  </div>
                                </div>
                                <div className={styles.frameUserData}>8.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className={styles.xPMRow1}>
                          <div className={styles.frameParent7}>
                            <div className={styles.coin3Parent}>
                              <img
                                className={styles.coin3Icon1}
                                alt=""
                                src="/coin-31.svg"
                              />
                              <div className={styles.placeBet1}>Place Bet</div>
                            </div>
                            <div className={styles.win14x}>Win 14x</div>
                          </div>
                          <div className={styles.frameParent8}>
                            <div className={styles.betsTotalParent}>
                              <div className={styles.betsTotal1}>
                                17 Bets Total
                              </div>
                              <div className={styles.spanfontNumericParent}>
                                <img
                                  className={styles.spanfontNumericIcon2}
                                  alt=""
                                  src="/spanfontnumeric-1.svg"
                                />
                                <div className={styles.div17}>139.10</div>
                              </div>
                            </div>
                            <div className={styles.frameParent9}>
                              <div className={styles.frameParent10}>
                                <div className={styles.ellipseGroup}>
                                  <img
                                    className={styles.frameChild8}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild9} />
                                  <div className={styles.aswrd1}>aswrd</div>
                                </div>
                                <div className={styles.div18}>20.00</div>
                              </div>
                              <div className={styles.frameParent11}>
                                <div className={styles.ellipseContainer}>
                                  <img
                                    className={styles.frameChild10}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild11} />
                                  <div className={styles.tiki1}>Tiki</div>
                                </div>
                                <div className={styles.div19}>20.00</div>
                              </div>
                              <div className={styles.frameParent12}>
                                <div className={styles.ellipseParent1}>
                                  <img
                                    className={styles.frameChild12}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild13} />
                                  <div className={styles.fenrik1}>FenRik</div>
                                </div>
                                <div className={styles.div20}>40.00</div>
                              </div>
                              <div className={styles.frameParent13}>
                                <div className={styles.ellipseParent2}>
                                  <img
                                    className={styles.frameChild14}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild15} />
                                  <div className={styles.morrriez1}>
                                    Morrriez
                                  </div>
                                </div>
                                <div className={styles.div21}>18.00</div>
                              </div>
                              <div className={styles.frameParent14}>
                                <div className={styles.ellipseParent3}>
                                  <img
                                    className={styles.frameChild16}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild17} />
                                  <div className={styles.beau1}>Beau</div>
                                </div>
                                <div className={styles.div22}>9.00</div>
                              </div>
                              <div className={styles.frameParent15}>
                                <div className={styles.ellipseParent4}>
                                  <img
                                    className={styles.frameChild18}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild19} />
                                  <div className={styles.dukaj1}>dukaj</div>
                                </div>
                                <div className={styles.div23}>8.00</div>
                              </div>
                              <div className={styles.frameParent16}>
                                <div className={styles.ellipseParent5}>
                                  <img
                                    className={styles.frameChild20}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild21} />
                                  <div className={styles.frnkfrt23241}>
                                    Frnkfrt2324
                                  </div>
                                </div>
                                <div className={styles.div24}>11.00</div>
                              </div>
                              <div className={styles.frameParent17}>
                                <div className={styles.ellipseParent6}>
                                  <img
                                    className={styles.frameChild22}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild23} />
                                  <div className={styles.foxy1}>-Foxy</div>
                                </div>
                                <div className={styles.div25}>8.00</div>
                              </div>
                              <div className={styles.frameParent18}>
                                <div className={styles.ellipseParent7}>
                                  <img
                                    className={styles.frameChild24}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild25} />
                                  <div className={styles.pudgyPalh1}>
                                    PUDGY PALH
                                  </div>
                                </div>
                                <div className={styles.div26}>8.00</div>
                              </div>
                              <div className={styles.frameParent19}>
                                <div className={styles.ellipseParent8}>
                                  <img
                                    className={styles.frameChild26}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild27} />
                                  <div className={styles.ice}>Ice</div>
                                </div>
                                <div className={styles.div27}>7.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className={styles.xPMRow2}>
                          <div className={styles.frameParent20}>
                            <div className={styles.coin4Parent}>
                              <img
                                className={styles.coin4Icon1}
                                alt=""
                                src="/coin-42.svg"
                              />
                              <div className={styles.placeBet2}>Place Bet</div>
                            </div>
                            <div className={styles.win2x1}>Win 2x</div>
                          </div>
                          <div className={styles.frameParent21}>
                            <div className={styles.betsTotalGroup}>
                              <div className={styles.betsTotal2}>
                                17 Bets Total
                              </div>
                              <div className={styles.spanfontNumericGroup}>
                                <img
                                  className={styles.spanfontNumericIcon3}
                                  alt=""
                                  src="/spanfontnumeric-1.svg"
                                />
                                <div className={styles.div28}>139.10</div>
                              </div>
                            </div>
                            <div className={styles.frameParent22}>
                              <div className={styles.frameParent23}>
                                <div className={styles.ellipseParent9}>
                                  <img
                                    className={styles.frameChild28}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild29} />
                                  <div className={styles.fenrik2}>FenRik</div>
                                </div>
                                <div className={styles.div29}>40.00</div>
                              </div>
                              <div className={styles.frameParent24}>
                                <div className={styles.ellipseParent10}>
                                  <img
                                    className={styles.frameChild30}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild31} />
                                  <div className={styles.tiki2}>Tiki</div>
                                </div>
                                <div className={styles.div30}>20.00</div>
                              </div>
                              <div className={styles.frameParent25}>
                                <div className={styles.ellipseParent11}>
                                  <img
                                    className={styles.frameChild32}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild33} />
                                  <div className={styles.aswrd2}>aswrd</div>
                                </div>
                                <div className={styles.div31}>20.00</div>
                              </div>
                              <div className={styles.frameParent26}>
                                <div className={styles.ellipseParent12}>
                                  <img
                                    className={styles.frameChild34}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild35} />
                                  <div className={styles.morrriez2}>
                                    Morrriez
                                  </div>
                                </div>
                                <div className={styles.div32}>18.00</div>
                              </div>
                              <div className={styles.frameParent27}>
                                <div className={styles.ellipseParent13}>
                                  <img
                                    className={styles.frameChild36}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild37} />
                                  <div className={styles.frnkfrt23242}>
                                    Frnkfrt2324
                                  </div>
                                </div>
                                <div className={styles.div33}>11.00</div>
                              </div>
                              <div className={styles.frameParent28}>
                                <div className={styles.ellipseParent14}>
                                  <img
                                    className={styles.frameChild38}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild39} />
                                  <div className={styles.beau2}>Beau</div>
                                </div>
                                <div className={styles.div34}>9.00</div>
                              </div>
                              <div className={styles.frameParent29}>
                                <div className={styles.ellipseParent15}>
                                  <img
                                    className={styles.frameChild40}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild41} />
                                  <div className={styles.dukaj2}>dukaj</div>
                                </div>
                                <div className={styles.div35}>8.00</div>
                              </div>
                              <div className={styles.frameParent30}>
                                <div className={styles.ellipseParent16}>
                                  <img
                                    className={styles.frameChild42}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild43} />
                                  <div className={styles.foxy2}>-Foxy</div>
                                </div>
                                <div className={styles.div36}>8.00</div>
                              </div>
                              <div className={styles.frameParent31}>
                                <div className={styles.ellipseParent17}>
                                  <img
                                    className={styles.frameChild44}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild45} />
                                  <div className={styles.pudgyPalh2}>
                                    PUDGY PALH
                                  </div>
                                </div>
                                <div className={styles.div37}>8.00</div>
                              </div>
                              <div className={styles.frameParent32}>
                                <div className={styles.ellipseParent18}>
                                  <img
                                    className={styles.frameChild46}
                                    alt=""
                                    src="/ellipse-11@2x.png"
                                  />
                                  <div className={styles.frameChild47} />
                                  <div className={styles.ice1}>Ice</div>
                                </div>
                                <div className={styles.div38}>7.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <div className={styles.userBetFrame}></div>
                  </Col>
                </div>
                {/* Daily roulette */}
                <DailyRoulette />
              </div>
            </section>
          </Col>
        </div>
      </main>
    </div>
  );
};

export default Roulette;
