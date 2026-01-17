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
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Log = {
  id: string;
  title: string;
  category: string;
  date: string;
  details: string;
};

type CreateLogProps = {
  onSave: (newLog: Log) => void;
};
const CreateLog = ({ onSave }: CreateLogProps) => {
  const toDashBoard = useNavigate();
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [category, setCategory] = useState("Frontend");
  const categories = ["Frontend", "Backend", "DSA", "Learning"];
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const CATEGORY_ICONS = {
    Frontend: MonitorSmartphone,
    Backend: Database,
    DSA: SquareFunction,
    Learning: GraduationCap,
  };

  const handleSave = () => {
    if (!title.trim() || !details.trim()) {
      alert("Please fill in title and details");
      return;
    }

    const newLog: Log = {
      id: crypto.randomUUID(),
      title,
      category,
      date,
      details,
    };
    console.log(newLog);
    onSave(newLog);
    toDashBoard("/");
  };

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
            <button className={styles.link} onClick={() => toDashBoard("/")}>
              <span className={styles.icon}>
                <ArrowLeft strokeWidth={1} />
              </span>
              Back to Logs
            </button>
            <span>/</span>
            <span className={styles.text}>New Entry</span>
          </nav>
          <form action="">
            <div className={styles.relative}>
              <input
                type="text"
                placeholder="What did you build today?"
                value={title}
                className={styles.input}
                onChange={(e) => setTitle(e.target.value)}
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
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={styles.dateInput}
                  />
                </div>
              </div>
              <div className={styles.categoryContainer}>
                <label>CATEGORY</label>
                <div className={styles.categorySelector}>
                  {categories.map((cat) => {
                    const Icon = CATEGORY_ICONS[cat];
                    return (
                      <label className={styles.pillWrapper}>
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={category === cat}
                          onChange={() => setCategory(cat)}
                        />
                        <div className={styles.pill}>
                          <span className="material-symbols-outlined">
                            {Icon && <Icon size={16} />}
                          </span>
                          {cat}
                        </div>
                      </label>
                    );
                  })}
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
                onChange={(e) => {
                  setDetails(e.target.value);
                }}
              ></textarea>
            </div>
          </form>
        </div>
      </main>
      <div className={styles.footer}>
        <div className={styles.actionContainer}>
          <p className={styles.autoSave}>Auto-saved at 10:42 PM</p>
          <div className={styles.callToAction}>
            <button className={styles.cancel}>Cancel</button>
            <button className={styles.save} onClick={handleSave}>
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
