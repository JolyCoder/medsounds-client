import { Outlet, useLocation, useNavigate } from "react-router";

import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { AppSuspense } from "./components/AppSuspense/AppSuspense";
import { PATHS } from "./consts";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Object.values(PATHS).includes(location.pathname)) {
      navigate("/home");
    }
  }, [location.pathname, navigate]);

  return (
    <div className={styles.container}>
      <Header />

      <AppSuspense>
        <div className={styles.pageContainer}>
          <Outlet />
        </div>
      </AppSuspense>
    </div>
  );
}

export default App;
