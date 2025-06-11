import styles from './Navigation.module.css';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <nav className={styles.nav}>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : styles.link)} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <>
            <NavLink className={({ isActive }) => (isActive ? styles.linkActive : styles.link)} to="/contacts">
              Contacts
            </NavLink>
          </>
        )}
      </nav>
    </>
  );
}
