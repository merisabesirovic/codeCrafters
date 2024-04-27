import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Example from "../../components/Carousel";
import "./Landing.css";

const handleClick1 = () => {
  const text = "Press any key to enter blind person mode";
  const value = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(value);
  console.log(value);
};
const cancleEvent = (event) => {
  window.speechSynthesis.cancel();
};
const Landing = () => {
  useEffect(() => {
    handleClick1();

    const handleKeyPress = (event) => {
      // Check if any key is pressed
      if (event.key && event.keyCode !== 0) {
        // Navigate to the register page
        window.location.href = "/home";
      }
    };

    // Add event listener for key press
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div onDoubleClick={handleClick1} className="boddy">
      <Example />

      <Link to="/register" onClick={cancleEvent} style={{ display: "none" }} />
    </div>
  );
};

export default Landing;
