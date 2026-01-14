import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import styles from "./Layouts.module.css";

export default function Layouts() {
  return (
    <>
      <div className={styles.layout}>
        <header>
          <NavBar />
        </header>
        <main className={styles.main}>
          <Outlet />
        </main>

        <footer>Footer</footer>
      </div>
    </>
  );
}
