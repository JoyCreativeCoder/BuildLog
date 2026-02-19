import { Pencil, Trash2 } from "lucide-react";
import styles from "./LogCard.module.css";
import { useNavigate } from "react-router-dom";

type Log = {
  _id: string;
  title: string;
  category: string;
  date: string;
  details: string;
};

type LogCardProps = {
  log: Log;
  setLogs: React.Dispatch<React.SetStateAction<Log[]>>;
};

export default function LogCard({ log, setLogs }: LogCardProps) {
  const navigate = useNavigate();
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  async function handleDelete() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/logs/${log._id}`,
        {
          method: "DELETE",
        },
      );
      if (!response.ok) {
        throw new Error("Failed to delete log");
      }
      setLogs((prevLogs) => prevLogs.filter((l) => l._id !== log._id));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdate() {
    navigate("/create", { state: { log } });
  }
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{log.title}</h3>
          <span className={styles.date}>{formatDate(log.date)}</span>
        </div>
        <p className={styles.text}>{log.details}</p>
        <div className={styles.badgeContainer}>
          <span className={styles.badge}>{log.category}</span>
          <div>
            <Trash2 className={styles.deleteIcon} onClick={handleDelete} />
            <Pencil onClick={handleUpdate} />
          </div>
        </div>
      </div>
    </div>
  );
}
