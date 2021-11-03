import styles from "./Hero.module.scss";

export default function Hero({ children }) {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Shatter Your Ceilings!</h1>
        <p className={styles.heroUnderTitle}>
          These are inspirational and inclusive words to keep people moving. Do
          you - feel good.{" "}
        </p>
        <button className={styles.learnMoreBtn}>Learn More</button>
      </div>
    </>
  );
}
