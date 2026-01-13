import {
  ArrowLeft,
  Calendar,
  Database,
  GraduationCap,
  MonitorSmartphone,
  SaveAll,
  SquareFunction,
} from "lucide-react";
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
                      <Calendar size={20} />
                    </span>
                  </span>
                  <input
                    type="date"
                    value="2023-10-27"
                    className={styles.dateInput}
                  />
                </div>
              </div>
              <div className={styles.categoryContainer}>
                <label>CATEGORY</label>
                <div className={styles.categorySelector}>
                  <label className={styles.pillWrapper}>
                    <input
                      type="radio"
                      name="category"
                      value="frontend"
                      checked
                    />
                    <div className={styles.pill}>
                      <span className="material-symbols-outlined">
                        <MonitorSmartphone size={16} />
                      </span>
                      Frontend
                    </div>
                  </label>

                  <label className={styles.pillWrapper}>
                    <input type="radio" name="category" value="backend" />
                    <div className={styles.pill}>
                      <span className="material-symbols-outlined">
                        <Database size={16} />
                      </span>
                      Backend
                    </div>
                  </label>

                  <label className={styles.pillWrapper}>
                    <input type="radio" name="category" value="dsa" />
                    <div className={styles.pill}>
                      <span className="material-symbols-outlined">
                        <SquareFunction size={16} />
                      </span>
                      DSA
                    </div>
                  </label>

                  <label className={styles.pillWrapper}>
                    <input type="radio" name="category" value="learning" />
                    <div className={styles.pill}>
                      <span className="material-symbols-outlined">
                        <GraduationCap size={16} />
                      </span>
                      Learning
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* //DESCRIPTION EDITOR */}
            <div className={styles.descriptionContainer}>
              <div className={styles.descriptionHeader}>
                {" "}
                <label htmlFor="">LOG DETAILS</label>
              </div>
              <textarea
                placeholder="Describe your progress, challenges, and key learnings..."
                className={styles.editor}
              ></textarea>
            </div>
          </form>
        </div>
      </main>
      <div className={styles.footer}>
        <div className={styles.actionContainer}>
          <div className={styles.autoSave}>Auto-saved at 10:42 PM</div>
          <div className={styles.callToAction}>
            <button className={styles.cancel}>Cancel</button>
            <button className={styles.save}>
              <span>
                <SaveAll size={16} color="#ffffff" />
              </span>
              Save Log
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLog;
