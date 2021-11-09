import "../styles/globals.css";
import Layout from "../../components/Layout/Layout";
import React, { useState, useMemo } from "react";
import { UserContext } from "../UserContext";
import { AuthContext } from "../AuthContext";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  const authValue = useMemo(() => ({ isAuth, setIsAuth }), [isAuth, setIsAuth]);

  return (
    <UserContext.Provider value={userValue}>
      <AuthContext.Provider value={authValue}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContext.Provider>
    </UserContext.Provider>
  );
}

export default MyApp;
