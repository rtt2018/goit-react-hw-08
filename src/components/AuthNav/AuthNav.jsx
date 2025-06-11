import styles from './AuthNav.module.css';
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div className={styles.container}>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : styles.link)} to="/register">
        Register
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : styles.link)} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
