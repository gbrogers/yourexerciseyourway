import styles from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      {/* <div className={styles.footerImage}></div> */}
      <div className={styles.footerContent}>
        <h3>This is a Footer</h3>
        <div>
          <div className={styles.titleLogo}>
            <div>App Logo</div>
            <h3>App Name</h3>
          </div>
          <div>
            <p>
              This app was developed by Giselle Rogers, Software Engineer.
              Project developed using PostgreSQL, Express, NodeJS, React,
              JavaScript, HTML5, SASS, Sequelize, Axios, and Bcrypt.
              Personalized resources generated from Health.gov API.
            </p>
            <div className={styles.socialIcons}>
              <a>LinkedIn</a>
              <a>GitHub</a>
              <a>Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
