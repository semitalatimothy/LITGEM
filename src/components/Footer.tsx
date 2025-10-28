import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.text}>© {new Date().getFullYear()} LitGem Clinic</p>
        
        {/* WhatsApp clickable link with icon */}
        <small className={styles.subtext}>
          <a 
            href="https://wa.me/256782239258" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.whatsappLink}
          >
            <img 
              src="/images/whatsapp.png" 
              alt="WhatsApp" 
              className={styles.whatsappIcon} 
            />
            Whatsapp us on 0782239258
          </a>
        </small>

        <small className={styles.subtext}>Managing your health, together.</small>
      </Container>
    </footer>
  );
};

export default Footer;
