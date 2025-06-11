import styles from './HomePage.module.css';
// import { FaUser } from "react-icons/fa";

export default function HomePage() {
    return (
        <div className={styles.container}>
            <h2 className={styles.head} >Welcome!</h2>
            <p className={styles.description}>Еhis is the Phonebook app</p>
            <p className={styles.description}>To use the app, please log in or register.</p>
            <p className={styles.description}>After that, you can add your contacts.</p>
            <p className={styles.description}>Enjoy!</p>
        </div>
    );
}