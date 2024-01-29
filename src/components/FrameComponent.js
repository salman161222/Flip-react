import styles from "./FrameComponent.module.css";

const FrameComponent = ({ group1581 }) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.parent}>
          <b className={styles.b}>49</b>
          <img className={styles.frameChild} alt="" src="/ellipse-1@2x.png" />
        </div>
        <img className={styles.coin12Icon} alt="" src="/coin-12.svg" />
      </div>
      <div className={styles.vParent}>
        <i className={styles.v}>V</i>
        <div className={styles.sWrapper}>
          <i className={styles.s}>S</i>
        </div>
        <img className={styles.frameItem} alt="" src={group1581} />
      </div>
      <div className={styles.coin4Parent}>
        <img className={styles.coin4Icon} alt="" src="/coin-4.svg" />
        <div className={styles.group}>
          <b className={styles.b1}>120</b>
          <img className={styles.frameInner} alt="" src="/ellipse-1-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
