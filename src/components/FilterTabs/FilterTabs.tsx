import styles from "./FilterTabs.module.css";

export default function Filter() {
  return (
    <div className={styles.filterContainer}>
      <button className={styles.chip}>All</button>
      <button className={styles.chip}>Frontend</button>
      <button className={styles.chip}>Backend</button>
      <button className={styles.chip}>DSA</button>
      <button className={styles.chip}>Learning</button>
    </div>
  );
}
