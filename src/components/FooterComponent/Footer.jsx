import React from "react";
import logo from "../../assets/logo.svg";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import styles from "./footer.module.css";
function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div
        className={styles.flex}
        style={{ gap: "10px", justifyContent: "center", alignItems: "center" }}
      >
        <img src={logo} alt="logo" />
        <h2>GeeksFood</h2>
      </div>
      <p style={{ width:"100%", textAlign:"center"}} className={styles.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        autem cumque beatae sed corporis laudantium.
      </p>
      <div>
        <ul className={`${styles.flex} ${styles.listStyle}`}>
          <li>About</li>
          <li>Careers</li>
          <li>History</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className={`${styles.flex} ${styles.listStyle} ${styles.contactContainer}`}>
        <FaFacebook  className={styles.contacts}/>
        <FaInstagram className={styles.contacts} />
        <FaTwitter className={styles.contacts} />
        <FaGithub className={styles.contacts}  />
      </div>
    </footer>
  );
}

export default Footer;
