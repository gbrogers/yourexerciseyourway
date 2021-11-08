import styles from "./Hero.module.scss";

export default function Hero({ children }) {
  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.overlay}> */}
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>Do What You Enjoy.</h1>
          <p className={styles.heroUnderTitle}>
            Your Fitness Your Way encourages you to find exercise through the
            things you enjoy, because we all know boring exercises are
            unsustainable.
          </p>
          <button className={styles.learnMoreBtn}>Learn More</button>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
