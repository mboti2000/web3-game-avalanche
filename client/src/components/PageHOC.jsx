import React from "react";
import { useNavigate } from "react-router-dom";
import { logo, heroImg } from "../assets";
import Alert from "./Alert";
import { useGlobalContext } from "../context";
import styles from "../styles";

const PageHOC = (Component, title, description) => () => {
  const navigate = useNavigate();
  const { showAlert } = useGlobalContext();
  return (
    <div className={styles.hocContainer}>
      {showAlert?.status && (
        <Alert type={showAlert.type} message={showAlert.message} />
      )}
      <div className={styles.hocContentBox}>
        <img
          onClick={() => navigate("/")}
          src={logo}
          className={styles.hocLogo}
          alt={logo}
        />
        <div className={styles.hocBodyWrapper}>
          <div className="flex flex-row w-full">
            <h1 className={`flex ${styles.headText} head-text`}>{title}</h1>
          </div>
          <p className={`${styles.normalText} my-10`}>{description}</p>
          <Component />
        </div>

        <p className={styles.footerText}>Made with love by MB</p>
      </div>

      <div className="flex flex-1">
        <img
          src={heroImg}
          alt="hero-img"
          className="w-full xl:h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PageHOC;
