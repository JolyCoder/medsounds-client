import { Outlet } from "react-router";

import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { AppSuspense } from "./components/AppSuspense/AppSuspense";

function App() {
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
