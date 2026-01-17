import styles from "./LogCard.module.css";

export default function LogCard({ log }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{log.title}</h3>
          <span className={styles.date}>{log.date}</span>
        </div>
        <p className={styles.text}>{log.details}</p>
        <div className={styles.badgeContainer}>
          <span className={styles.badge}>{log.category}</span>
        </div>
      </div>
    </div>
  );
}
