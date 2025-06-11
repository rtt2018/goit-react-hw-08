import styles from './UserMenu.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.container}>
      <p className={styles.username}>Welcome, {user.name}</p>
      <button className={styles.buttonLogout} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}
