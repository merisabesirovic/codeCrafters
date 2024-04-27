import React from "react";
import "./Home.css"; // Import the CSS file for styling
import theme from "../../theme/theme";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import nit from "../../img/nit.png";
import google from "../../img/google.png";
import uni from "../../img/uninp.png";

const HomePage = () => {
  const navigate = useNavigate(); // Declare useNavigate here

  const handleNavigation = (route) => {
    navigate(route); // Use navigate for navigation
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="home-page">
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
<p>{transcript}</p>
        <h1></h1>
        <div className="card-container">
          <div className="card">
            <img className="bgimg" src={uni}></img>
            <h2>UNINP Art Course</h2>
            <p>
              The UNINP Art Course is a comprehensive program designed to
              nurture creativity and artistic skills in individuals.
            </p>

            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                onClick={() => handleNavigation("/home/art")}
              >
                Peek at this course
              </Button>
            </ThemeProvider>
          </div>
          <div className="card">
            <img className="bgimg" src={nit}></img>
            <h2>UNINP Coding Course</h2>
            <p>
              The UNINP Coding Course offers comprehensive training in
              programming languages and software development
            </p>
            <Button
              variant="contained"
              onClick={() => handleNavigation("/home/coding")}
            >
              Peek at this course
            </Button>
          </div>
          <div className="card">
            <img className="bgimg" src={google}></img>

            <h2>UNINP Digital Marketing Course</h2>
            <p>
              UNINP's Digital Marketing Course offers essential skills and
              strategies for success in the digital marketing industry.
            </p>

            <Button
              variant="contained"
              onClick={() => handleNavigation("/home/digital-marketing")}
            >
              Peek at this course
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
