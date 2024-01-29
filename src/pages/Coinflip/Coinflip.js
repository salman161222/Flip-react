import FrameGroup from "../../components/FrameGroup";
import CoinflipPage from "../../components/CoinflipPage";
import styles from "./Coinflip.module.css";
import Sidebar from "../../components/common/Sidebar";
import { Col } from "react-bootstrap";

const Coinflip = () => {
  return (
    <div className={styles.coinflip}>
      <FrameGroup
        flipperLogo="pending_74:25207"
        groupIconPadding="0px var(--padding-12xs) 0px var(--padding-20xl)"
      />
      <main className={styles.pMContainer}>
        <div className={styles.container}>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10} className={styles.scrollableContent}>
            <CoinflipPage />
          </Col>
        </div>
      </main>
    </div>
  );
};

export default Coinflip;
