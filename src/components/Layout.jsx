import { Outlet, NavLink } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to="/">
            <h1 className={styles.logo}>🎬 IMDb Top 100</h1>
          </NavLink>
          <div className={styles.links}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Register
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Movies
            </NavLink>
          </div>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
