import styles from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

// import { FaUser } from "react-icons/fa";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <footer className={styles.footer}>

      <div className={styles.menuWrapper}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </footer>
  );
}
