import React, { useState } from "react";
import { motion } from "framer-motion";
import clickSound from "./click.mp3";

function Counter({ triggerConfetti }) {
  const [count, setCount] = useState(0);
  const [showEmoji, setShowEmoji] = useState(false);
  const [showVictory, setShowVictory] = useState(false);

  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const emojiBurst = () => {
    setShowEmoji(true);
    setTimeout(() => setShowEmoji(false), 800);
  };

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    playSound();
    emojiBurst();

    if (newCount === 10) {
      setShowVictory(true);
      triggerConfetti();
      setTimeout(() => setShowVictory(false), 3000);
    }
  };

  const decrement = () => {
    setCount(count - 1);
    playSound();
  };

  const reset = () => {
    setCount(0);
    playSound();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px", position: "relative" }}>
      <h2>Counter: {count}</h2>

      {/* Animated Buttons */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={increment}
        style={{ margin: "5px", padding: "8px 16px", cursor: "pointer" }}
      >
        Increase
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={decrement}
        style={{ margin: "5px", padding: "8px 16px", cursor: "pointer" }}
      >
        Decrease
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={reset}
        style={{ margin: "5px", padding: "8px 16px", cursor: "pointer" }}
      >
        Reset
      </motion.button>

      {/* Emoji Animation */}
      {showEmoji && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -50 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "2rem", marginTop: "10px" }}
        >
          🎉🎈✨
        </motion.div>
      )}

      {/* Victory Message */}
      {showVictory && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "2.5rem", color: "gold", marginTop: "20px" }}
        >
          🏆 Victory! You reached 10! 🏆
        </motion.div>
      )}
    </div>
  );
}

export default Counter;
