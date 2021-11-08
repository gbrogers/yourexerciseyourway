import styles from "./SignUp.module.scss";
import { useRef, useContext } from "react";
// import prisma from "../lib/prisma";
import Link from "next/link";
// import { UserContext } from "../../UserContext";
// import { AuthContext } from "../../AuthContext";

//make instance of prisma
// let prisma = new prisma

export default function SignUp() {
  //   const { user, setUser } = useContext(null);
  //   const { isAuth, setIsAuth } = useContext(false);

  const email = useRef();
  const password = useRef();
  const fname = useRef();
  const lname = useRef();

  async function handleLogin(e) {
    e.preventDefault();
    console.log('submitted.')

    console.log(email.current.value);
    console.log(password.current.value);

    const credentials = {
      email: email.current.value,
      password: password.current.value,
      fname: fname.current.value,
      lname: lname.current.value,
    };

    console.log({ credentials });



    // await axios
    //   .post("/api/authenticate/signup", credentials)
    //   .then((res) => {
    //     // console.log(res.data);
    //     setUser(res.data);
    //     setIsAuth(true);
    //   })
    //   .catch((error) => console.log(error));
  }

  return (
    <div className={styles.signup}>
      <form className={styles.signupForm} onSubmit={(e) => handleLogin(e)}>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        {/* {!user ? ( */}
        <div className={styles.contentContainer}>
          <h2>Welcome!</h2>
          <h4>Sign Up here to get started.</h4>
          <label>
            <p className={styles.fname}>First Name </p>
            <input
              type="text"
              placeholder="enter first name"
              ref={fname}
            ></input>
          </label>
          <label>
            <p className={styles.lname}>Last Name </p>
            <input
              type="text"
              placeholder="enter last name"
              ref={lname}
            ></input>
          </label>
          <label>
            <p className={styles.email}>Email </p>
            <input type="email" placeholder="enter email" ref={email}></input>
          </label>
          <label>
            <p className={styles.password}>Password </p>
            <input
              type="password"
              placeholder="enter password"
              ref={password}
            ></input>
          </label>
          <button
            className={styles.signupBtn}
            // onClick={() => setIsAuth(true)}
            type="submit"
          >
            Sign Up
          </button>
          <div className={styles.alternative}>
            <p className={styles.alternativeWords}>Already have an account? </p>
            <b className={styles.toLoginBtn}>
              <Link href="/login">Log in</Link>
            </b>
          </div>
        </div>
        {/* ) : ( */}
        {/* <div className={styles.signedUp}>
          <div className={styles.contentContainer}>
            <h2>{`Welcome, ${user.fname}!`}</h2>
          </div>

          <div className={styles.redirectLinks}>
            <Link to="./menstrualtracking">
              <div className={styles.menstrualLink}>
                <h3>Menstrual Tracking</h3>
              </div>
            </Link>
            <Link to="./contraceptivetracking">
              <div className={styles.contraceptiveLink}>
                <h3>Contraceptive Tracking</h3>
              </div>
            </Link>
            <Link to="./resources">
              <div className={styles.resourceLink}>
                <h3>Resources</h3>
              </div>
            </Link>
          </div>
        </div> */}
        {/* )} */}
      </form>
    </div>
  );
}
