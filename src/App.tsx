import "./App.css";
import DashBoard from "./pages/Dashboard/Dashboard";
import CreateLog from "./pages/Createlog/CreateLog";
import LogDetails from "./pages/Details/LogDetails";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

type Log = {
  id: string;
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
  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard logs={logs} />} />
        <Route path="/create" element={<CreateLog onSave={addLog} />} />
        <Route path="/details" element={<LogDetails />} />
      </Routes>
    </>
  );
}

export default App;
