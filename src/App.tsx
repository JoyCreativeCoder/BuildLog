import "./App.css";
import DashBoard from "./pages/Dashboard/Dashboard";
import CreateLog from "./pages/Createlog/CreateLog";
import LogDetails from "./pages/Details/LogDetails";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

type Log = {
  _id: string;
  title: string;
  category: string;
  date: string;
  details: string;
};

function App() {
  const [logs, setLogs] = useState<Log[]>([]);
  const addLog = (newLog: Log) => {
    setLogs((prev: Log[]) => [newLog, ...prev]);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLog = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/logs");
        if (!response.ok) {
          throw new Error("failed to fetch logs");
        }
        const data = await response.json();
        console.log(data);
        setLogs(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching logs", error);
        setLoading(false);
      }
    };
    fetchLog();
  }, []);

  if (loading) return <div>Loading logs...</div>;

  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard logs={logs} setLogs={setLogs} />} />
        <Route path="/create" element={<CreateLog onSave={addLog} />} />
        <Route path="/details" element={<LogDetails />} />
      </Routes>
    </>
  );
}

export default App;
