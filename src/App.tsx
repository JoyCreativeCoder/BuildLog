import "./App.css";
import Home from "./components/Home";
import CreateLog from "./components/CreateLog";
import LogDetails from "./components/LogDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateLog />} />
        <Route path="/details" element={<LogDetails />} />
      </Routes>
    </>
  );
}

export default App;
