import React from "react";
import styles from "../pages/Roulette.module.css";

export default function DailyRoulette() {
  return (
    <div>
      <div className={styles.dailyRouletteRaceFrame}>
        <div className={styles.payoutContainer}>
          <h2 className={styles.dailyRouletteRace}>Daily Roulette Race</h2>
        </div>
        <div className={styles.cellPayout}>Ends in 5h 23 min 11 sec</div>
      </div>
      <div className={styles.div39}>
        <div className={styles.parentFrameDivision}>
          <div className={styles.teamLogoFrame}>
            <div className={styles.userBetFrame1}>
              <div className={styles.user}>User</div>
            </div>
            <div className={styles.userBetFrame2}>
              <div className={styles.betAmount}>Bet amount</div>
            </div>
            <div className={styles.multiplier}>Multiplier</div>
            <div className={styles.userBetFrame3}>
              <div className={styles.payout}>Payout</div>
            </div>
            <div className={styles.date}>Date</div>
          </div>
        </div>
        <div className={styles.sVGframesforpayouts}>
          <div className={styles.containerforsvgpayoutframes}>
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
            <div className={styles.rectangleframepayoutinfo}>
              <img className={styles.svgIcon6} alt="" src="/svg-31.svg" />
              <div className={styles.divforxPMlayout}>100</div>
            </div>
            <div className={styles.pMdisplay}>
              <div className={styles.x4}>0.48x</div>
            </div>
            <div className={styles.rectangleframepayoutinfo1}>
              <img className={styles.svgIcon7} alt="" src="/svg-31.svg" />
              <div className={styles.div45}>48</div>
            </div>
            <div className={styles.pm3}>2/28/2023, 3:53:59 PM</div>
          </div>
        </div>
        <div className={styles.sVGframesforpayouts}>
          <div className={styles.containerforsvgpayoutframes}>
            <div className={styles.div44}>
              <img
                className={styles.f01fdd093ea9a942c63265fc7c026cIcon}
                loading="eager"
                alt=""
                src="/2f01fdd093ea9a942c63265fc7c026cab21caa31-fulljpg@2x.png"
              />
              <div className={styles.p3}>
                <div className={styles.arsenalAlicia}>
                  Arsenal (Alicia) - Chelsea (July)
                </div>
              </div>
            </div>
            <div className={styles.rectangleframepayoutinfo}>
              <img className={styles.svgIcon6} alt="" src="/svg-31.svg" />
              <div className={styles.divforxPMlayout}>100</div>
            </div>
            <div className={styles.pMdisplay}>
              <div className={styles.x4}>0.48x</div>
            </div>
            <div className={styles.rectangleframepayoutinfo1}>
              <img className={styles.svgIcon7} alt="" src="/svg-31.svg" />
              <div className={styles.div45}>48</div>
            </div>
            <div className={styles.pm3}>2/28/2023, 3:53:59 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
}
