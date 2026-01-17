import { LayoutDashboard, Logs, Plus } from "lucide-react";
import styles from "./Sidebar.module.css";

type SidebarProps = {
  onCreateLog: () => void;
};

export default function Sidebar({ onCreateLog }: SidebarProps) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.colunm}>
        <div className={styles.title}>
          <span>
            <Logs />
          </span>
          <span>
            <h1>BuildLog</h1>
            <p>Developer Journal</p>
          </span>
        </div>
        <button className={styles.add}>
          <span>
            <Plus color="#ffffff" />
          </span>
          <span onClick={onCreateLog}> Add New Log</span>
        </button>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <span>
              <LayoutDashboard color="#111318" />
            </span>
            <p>Dashboard</p>
          </li>
        </ul>

        <div className={styles.yourTags}>
          <p className={styles.tagTitle}>YOUR TAGS</p>
          <div className={styles.tagItem}>
            <p>Frontend</p>
          </div>
          <div className={styles.tagItem}>
            <p>Backend</p>
          </div>
          <div className={styles.tagItem}>
            <p>Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
}
