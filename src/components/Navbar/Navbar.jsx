import MarginWrapper from "../../layouts/MarginWrapper";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <MarginWrapper styles={styles.navWrapper}>
        <div className={styles.logo}>
          beritadunia<b style={{ color: "green", fontSize: "20pt" }}>.</b>com
        </div>
        <div className={styles.menu}>
          <a href="#home" className={styles.linkMenu}>
            Home
          </a>
          <a href="#updates" className={styles.linkMenu}>
            Updates
          </a>
          <a href="#contact" className={styles.linkMenu}>
            Contact
          </a>
        </div>
      </MarginWrapper>
    </div>
  );
};

export default Navbar;
