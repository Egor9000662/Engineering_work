import React from "react";
import styles from "../../styles/navHeader.module.scss";
import burger from "../../images/burger_nav.svg";
import logo from "../../images/logo_nav.png";
import email from "../../images/icons/mail_nav.svg";
import phone from "../../images/icons/phone_nav.svg";

function NavHeader() {
  return (
    <div className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.logo_box}>
          <img className={styles.burger} src={burger} alt="burger" />
          <img className={styles.logo}  src={logo} alt="logo" />
        </div>
        <div className={styles.contacts_box}>
          <div className={styles.email}>
            <p>Пишите нам на email</p>
            <img src={email} alt="email" />
            <a href="#">info@diagnistics.by</a>
          </div>
          <div className={styles.phone}>
            <div className={styles.text}>
              <img src={phone} alt="phone" />
              <p>Есть вопросы? Звоните!</p>
            </div>
            <p className={styles.tel} >+375 (29) 456-45-45</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavHeader;
