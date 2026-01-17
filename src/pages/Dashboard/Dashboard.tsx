import styles from "./Dashboard.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopBar from "../../components/TopBar/TopBar";
import Filters from "../../components/FilterTabs/FilterTabs";
import LogCard from "../../components/LogCard/LogCard";
import { useNavigate } from "react-router-dom";

type Log = {
  id: string;
  title: string;
  category: string;
  date: string;
  details: string;
};

type DashboardProps = {
  logs: Log[];
};

export default function Dashboard({ logs }: DashboardProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.layout}>
      <Sidebar onCreateLog={() => navigate("/create")} />

      <TopBar />
      <div className={styles.main}>
        <main className={styles.mainContainer}>
          <div className={styles.mainHeader}>
            <div className={styles.headerTitle}>
              <h2>Daily Logs</h2>
              <p>Track your progress, bugs fixed, and new concepts learned.</p>
            </div>
            <div className={styles.userStats}>
              <div className={styles.userStatsContainer}>
                <span className={styles.streak}>STREAK</span>
                <div className={styles.userStatsValue}>
                  <span className={styles.number}>12</span>
                  <span className={styles.days}>Days 🔥</span>
                </div>
              </div>

              <div className={styles.userStatsContainer}>
                <span className={styles.streak}>TOTAL LOGS</span>
                <div className={styles.userStatsValue}>
                  <span className={styles.number}>45</span>
                  <span className={styles.entries}>entries</span>
                </div>
              </div>
            </div>
          </div>
          <Filters />

          {logs.length ? (
            logs.map((log) => <LogCard key={log.id} log={log} />)
          ) : (
            <p>No logs yet. Click "Create Log" to add one!</p>
          )}
        </main>
      </div>
    </div>
  );
}
