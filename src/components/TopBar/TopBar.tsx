import { Search } from "lucide-react";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarInner}>
        <div className={styles.left}>
          <div className={styles.searchWrapper}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search logs (Cmd + K)"
              className={styles.search}
            />
          </div>
        </div>

        <div className={styles.right}></div>
      </div>
    </div>
  );
}
