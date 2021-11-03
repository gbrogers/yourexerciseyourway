import styles from "./Layout.module.scss";
import Nav from "../Nav/Nav";

// import Header from "../Header/Header";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
