import "./App.css";
import DashBoard from "./pages/Dashboard/Dashboard";
import CreateLog from "./pages/Createlog/CreateLog";
import LogDetails from "./pages/Details/LogDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/create" element={<CreateLog />} />
        <Route path="/details" element={<LogDetails />} />
      </Routes>
    </>
  );
}

export default App;
