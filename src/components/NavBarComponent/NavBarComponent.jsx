import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBarComponent() {
  const navItems = ["Home", "Quote", "Restaurants", "Foods", "Contact"];
  return (
    <header>
      <nav>
        <div className={styles.logocontainer}>
          <img src={logo} alt="" />
          <p style={{ fontWeight: "500", fontSize: "24px" }}>GeekFoods</p>
        </div>
        <ul
          className={styles.navItemsList}
        >
          {navItems.map((navItem, idx) => (
            <li key={idx} className={idx === 1 ? styles.active : ""}>
              {navItem}
            </li>
          ))}
        </ul>
        <button className={styles.getStartedBtn}>Get Started</button>
        <GiHamburgerMenu className={styles.menu} />
      </nav>
    </header>
  );
}

export default NavBarComponent;
