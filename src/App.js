import React, { useState } from "react";
import { motion } from "framer-motion";
import Motivation from "./Motivation";
import Counter from "./counter";
import Confetti from "react-confetti";
import './App.css'; // Create this for theme styling

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [theme, setTheme] = useState("light");

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      {showConfetti && <Confetti />}

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem", color: theme === "light" ? "#4B0082" : "#00FFFF" }}
      >
        🚀 Welcome to Mathan's Counter App 🚀
      </motion.h1>

      <button onClick={toggleTheme} className="theme-toggle">
        Switch to {theme === "light" ? "Dark" : "Light"} Mode 🌗
      </button>

      <Motivation quote="Never ever give up!" />
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Counter triggerConfetti={triggerConfetti} />
      </motion.div>
    </div>
  );
}

export default App;
