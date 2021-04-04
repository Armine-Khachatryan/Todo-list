import React from "react";
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://www.linkedin.com/in/armine-khachatryan-a2696a115/">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className={styles.social} />
      </a>
      <a href="https://github.com/Armine-Khachatryan">
        <FontAwesomeIcon icon={faGithub} size="2x" className={styles.social} />
      </a>
    </div>
  )
};

export default Footer;

