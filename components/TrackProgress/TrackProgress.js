import styles from "./TrackProgress.module.scss";
import Link from "next/link";
import ProgressIcon from "../../public/images/progress_icon.png";
import Image from "next/image";

export default function TrackProgress() {
  return (
    <div className={styles.container}>
      <Image
        alt="Progress Icon"
        src={ProgressIcon}
        // layout="fill"
        quality={100}
        className={styles.cardImg}
        width={100} //automatically provided
        height={100} //automatically provided
        blurDataURL="data:..." //automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
      <h3 className={styles.cardTitle}>Track Your Progess!</h3>
      <p className={styles.cardDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className={styles.cardButton}>Learn More</button>
    </div>
  );
}
