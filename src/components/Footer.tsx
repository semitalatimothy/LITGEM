import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.text}>© {new Date().getFullYear()} LitGem Clinic</p>
        <small className={styles.subtext}>Managing your health, together.</small>
      </Container>
    </footer>
  );
};

export default Footer;
