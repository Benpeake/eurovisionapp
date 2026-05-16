import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

import "./App.css";
import Score from "./pages/Score";
import Bingo from "./pages/Bingo";
import Sweepstake from "./pages/Sweepstake";
import Table from "./pages/Table";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import { countries } from "./data/countires";
import { bingo } from "./data/bingo";

function App() {
  const query = new URLSearchParams(window.location.search);
  const sharedData = query.get("data");
  const [scores, setScores] = useState(() => {
    if (sharedData) {
      try {
        return JSON.parse(decodeURIComponent(sharedData));
      } catch {
        console.warn("Invalid shared data");
      }
    }
    const saved = localStorage.getItem("scores");
    return saved ? JSON.parse(saved) : countries;
  });

  const [bingoState, setBingoState] = useState(() => {
    const saved = localStorage.getItem("bingoItems");
    return saved ? JSON.parse(saved) : null;
  });

  const [sweepState, setSweepState] = useState(() => {
    const saved = localStorage.getItem("sweepstake");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem("scores", JSON.stringify(scores));
  }, [scores]);

  useEffect(() => {
    localStorage.setItem("bingoItems", JSON.stringify(bingoState));
  }, [bingoState]);

  useEffect(() => {
    if (sweepState) {
      localStorage.setItem("sweepstake", JSON.stringify(sweepState));
    }
  }, [sweepState]);

  return (
    <Router>
      <div className="sticky top-0 z-10">
        <header className="flex flex-col">
          <h1 className="text-heading text-white bg-pink px-4 py-4 text-center">🪩 Eurovision26 🪩</h1>
        </header>
        <Nav />
      </div>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Score scores={scores} setScores={setScores} />} />
        <Route path="/table" element={<Table scores={scores} />} />
        <Route path="/bingo" element={<Bingo bingoState={bingoState} setBingoState={setBingoState} bingo={bingo} />} />
        <Route path="/sweepstake" element={<Sweepstake sweepState={sweepState} setSweepState={setSweepState} scores={scores} />} />
      </Routes>
    </Router>
  );
}

export default App;
