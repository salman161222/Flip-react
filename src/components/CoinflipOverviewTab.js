import React, { useState } from "react";
import { Container, Row, Col, Image, Tabs, Tab, Table } from "react-bootstrap";
import styles from "./CoinflipPage.module.css";

export default function CoinflipOverviewTab() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };
  return (
    <Col md={12} xs={12} lg={12}>
      <div className={styles.coinFlipWrapper}>
        <div className={styles.tabsWrapper}>
          <div>
            <div className={styles.tabHeadingContainer}>
              <div
                className={`${styles.tabHeading} ${
                  activeTab === "tab1" && styles.activeTab
                }`}
                onClick={() => handleTabChange("tab1")}
              >
                My Bets
              </div>
              <div
                className={`${styles.tabHeading} ${
                  activeTab === "tab2" && styles.activeTab
                }`}
                onClick={() => handleTabChange("tab2")}
              >
                All Bets
              </div>
            </div>
          </div>
        </div>
        {/* Render tab content based on activeTab */}
        {activeTab === "tab1" && (
          <div>
            <div className={styles.tableWrapper}>
              <Table responsive className={styles.customTable}>
                <thead>
                  <tr>
                    <th>Game</th>
                    <th>User</th>
                    <th>Bet amount</th>
                    <th>Payout</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className={styles.div44}>
                        <img
                          className={styles.svgIcon6}
                          alt=""
                          src="/svg-31.svg"
                        />
                        <div className={styles.arsenalAlicia3}>Coinflip</div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.div44}>
                        <img
                          className={styles.f01fdd093ea9a942c63265fc7c026cIcon}
                          loading="eager"
                          alt=""
                          src="/2f01fdd093ea9a942c63265fc7c026cab21caa31-fulljpg@2x.png"
                        />
                        <div className={styles.p3}>
                          <div className={styles.arsenalAlicia3}>
                            Arsenal (Alicia) - Chelsea (July)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.rectangleframepayoutinfo}>
                        <img
                          className={styles.svgIcon6}
                          alt=""
                          src="/svg-31.svg"
                        />
                        <div className={styles.divforxPMlayout}>100</div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.rectangleframepayoutinfo}>
                        <img
                          className={styles.svgIcon6}
                          alt=""
                          src="/svg-31.svg"
                        />
                        <div
                          className={`${styles.divforxPMlayout} ${styles.greenText}`}
                        >
                          100
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.rectangleframepayoutinfo}>
                        2/28/2023, 3:53:59 PM
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className={styles.div44}>
                        <img
                          className={styles.svgIcon6}
                          alt=""
                          src="/svg-31.svg"
                        />
                        <div className={styles.arsenalAlicia3}>Coinflip</div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.div44}>
                        <img
                          className={styles.f01fdd093ea9a942c63265fc7c026cIcon}
                          loading="eager"
                          alt=""
                          src="/2f01fdd093ea9a942c63265fc7c026cab21caa31-fulljpg@2x.png"
                        />
                        <div className={styles.p3}>
                          <div className={styles.arsenalAlicia3}>
                            Arsenal (Alicia) - Chelsea (July)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.rectangleframepayoutinfo}>
                        <img
                          className={styles.svgIcon6}
                          alt=""
                          src="/svg-31.svg"
                        />
                        <div className={styles.divforxPMlayout}>100</div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.rectangleframepayoutinfo}>
                        <img
                          className={styles.svgIcon6}
                          alt=""
                          src="/svg-31.svg"
                        />
                        <div
                          className={`${styles.divforxPMlayout} ${styles.greenText}`}
                        >
                          100
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.rectangleframepayoutinfodate}>
                        2/28/2023, 3:53:59 PM
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <div className={styles.tableWrapper}>
              <Table responsive className={styles.customTable}>
                <thead>
                  <tr>
                    <th>Game</th>
                    <th>User</th>
                    <th>Bet amount</th>
                    <th>Payout</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className={styles.div44}>
                        <img
                          className={styles.svgIcon6}
                          alt=""
                          src="/svg-31.svg"
                        />
                        <div className={styles.arsenalAlicia3}>Coinflip</div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.div44}>
                        <img
                          className={styles.f01fdd093ea9a942c63265fc7c026cIcon}
                          loading="eager"
                          alt=""
                          src="/2f01fdd093ea9a942c63265fc7c026cab21caa31-fulljpg@2x.png"
                        />
                        <div className={styles.p3}>
                          <div className={styles.arsenalAlicia3}>
                            Arsenal (Alicia) - Chelsea (July)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.rectangleframepayoutinfo}>
                        <img
                          className={styles.svgIcon6}
                          alt=""
                          src="/svg-31.svg"
                        />
                        <div className={styles.divforxPMlayout}>100</div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.rectangleframepayoutinfo}>
                        <img
                          className={styles.svgIcon6}
                          alt=""
                          src="/svg-31.svg"
                        />
                        <div
                          className={`${styles.divforxPMlayout} ${styles.greenText}`}
                        >
                          100
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.rectangleframepayoutinfodate}>
                        2/28/2023, 3:53:59 PM
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </Col>
  );
}
