import "./App.css";

import { Routes, Route } from "react-router-dom";

import Main from "../Main/Main.jsx";

function App() {
  return (
    <div className="page">
      <div className="page_content">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
