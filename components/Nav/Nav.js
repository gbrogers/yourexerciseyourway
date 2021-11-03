import styles from "./Nav.module.scss";
import Link from "next/link";
import Logo from "../../public/images/mtn_logo.png";
import Image from "next/image";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <Image
              alt="Logo"
              src={Logo}
              // layout="fill"
              quality={100}
              className={styles.logo}
              width={75} //automatically provided
              height={50} //automatically provided
              blurDataURL="data:..." //automatically provided
              placeholder="blur" // Optional blur-up while loading
            />
          </Link>
        </li>
        <div>
          <li>
            <Link href="/login">
              <a className={styles.loginBtn}>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a className={styles.signupBtn}>Sign Up</a>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
