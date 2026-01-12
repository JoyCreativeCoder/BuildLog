import { ArrowLeft, Calendar } from "lucide-react";
import styles from "./CreateLog.module.css";

const CreateLog = () => {
  return (
    <div>
      <header className={styles.nav}>
        <h2 className={styles.logo}>BuildLog</h2>
        <div className={styles.profileContainer}>
          <button>Log Out</button>
          <div className={styles.avatar}></div>
        </div>
      </header>
      <main className={styles.container}>
        <div className={styles.content}>
          <nav className={styles.contentNav}>
            <a href="#" className={styles.link}>
              <span className={styles.icon}>
                <ArrowLeft strokeWidth={1} />
              </span>
              Back to Logs
            </a>
            <span>/</span>
            <span className={styles.text}>New Entry</span>
          </nav>
          <form action="">
            <div className={styles.relative}>
              <input
                type="text"
                placeholder="What did you build today?"
                className={styles.input}
              />
            </div>

            <div className={styles.metaData}>
              <div className={styles.datePicker}>
                <label htmlFor="date">DATE</label>
                <div className={styles.group}>
                  <span className={styles.dateIcon}>
                    <span className={styles.calenderIcon}>
                      <Calendar />
                    </span>
                  </span>
                  <input type="date" value="" className={styles.dateInput} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateLog;
