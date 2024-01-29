import React, { useState } from "react";
import { Container, Row, Col, Image, Tabs, Tab } from "react-bootstrap";
import styles from "./CoinflipPage.module.css";

export default function CoinflipOverviewTab() {
  const [activeTab, setActiveTab] = useState("myBets");

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Container>
      <div className="">
        <h2 className={styles.overview}>Overview</h2>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            Tab content for Home
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Tab content for Profile
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            Tab content for Contact
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
}
