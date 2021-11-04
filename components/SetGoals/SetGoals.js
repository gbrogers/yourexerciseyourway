import styles from "./SetGoals.module.scss";
import Link from "next/link";
import GoalsIcon from "../../public/images/goals_icon.png";
import Image from "next/image";

export default function SetGoals() {
  return (
    <div className={styles.container}>
      <Image
        alt="Goals Icon"
        src={GoalsIcon}
        // layout="fill"
        quality={100}
        className={styles.cardImg}
        width={100} //automatically provided
        height={100} //automatically provided
        blurDataURL="data:..." //automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
      <h2 className={styles.cardTitle}>Set Goals</h2>
      <p className={styles.cardDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className={styles.cardButton}>Learn More</button>
    </div>
  );
}
