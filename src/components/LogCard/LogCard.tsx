import styles from "./LogCard.module.css";

export default function LogCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3>Implemented Redux Toolkit Store</h3>
          <span>Oct 26</span>
        </div>
        <p className={styles.text}>
          Successfully migrated the legacy Redux boilerplate to Redux Toolkit.
          Created slices for user authentication and global settings. Reduced
          boilerplate code by approximately 40%. Next step is to integrate RTK
          Query for data fetching.
        </p>
      </div>
    </div>
  );
}
