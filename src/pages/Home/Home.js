// HomePage.js
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "./Home.css"; // Import the CSS file for styling
import theme from "../../theme/theme";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
const textToRead = "Our Digital Marketing Course is meticulously designed to";
const initialTextToRead = "Say read me to start.";

const HomePage = () => {
  const navigate = useNavigate(); // Declare useNavigate here

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
} = useSpeechRecognition();
const [isReading, setIsReading] = useState(false);

    useEffect(() => {
        // Call the function to read initial text when the component mounts
        handleInitialRead();
    }, []); // Empty dependency array ensures that it runs only once when the component mounts

    useEffect(() => {
        if (isReading) {
            const value = new SpeechSynthesisUtterance(textToRead);
            window.speechSynthesis.speak(value);
           SpeechRecognition.startListening(); // Start listening for speech recognition
        } else {
            window.speechSynthesis.cancel();
        }
    }, [isReading]);

    // Function to handle the initial speech when the component mounts
    const handleInitialRead = () => {
        const initialSpeech = new SpeechSynthesisUtterance(initialTextToRead);
        window.speechSynthesis.speak(initialSpeech);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 32) { // Check if the pressed key is the spacebar
            if (!isReading) {
                setIsReading(true); // Start reading
            } else {
                setIsReading(false); // Stop reading
            }
        }
    };

    if (!browserSupportsSpeechRecognition) {
        return <span>Your browser doesn't support speech recognition</span>;
    }

    if (transcript.toLowerCase() === "art kurs") {
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }else if (transcript.toLowerCase() === "stop") {
        SpeechRecognition.stopListening(); // Stop listening if "stop" is detected
        resetTranscript(); // Reset the transcript after executing the command
    }

  return (
    <ThemeProvider theme={theme}>
      <div className="home-page">
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
<p>{transcript}</p>
        <h1></h1>
        <div className="card-container">
          <div className="card">
            <img
              className="bgimg"
              src="https://previews.123rf.com/images/olegdudko/olegdudko1908/olegdudko190803400/128880447-row-of-artist-paint-brushes-on-background.jpg"
            ></img>
            <img
              className="img"
              src="https://d1hbpr09pwz0sk.cloudfront.net/logo_url/univerzitet-u-novom-pazaru-5eedb1ff"
            ></img>
            <h2>UNINP Art Course</h2>
            <p>
              The UNINP Art Course is a comprehensive program designed to
              nurture creativity and artistic skills in individuals.
            </p>

            <ThemeProvider theme={theme}>
              <Button variant="contained">Peek at this course</Button>
            </ThemeProvider>
          </div>
          <div className="card">
            <h2>UNINP Coding Course</h2>
            <p>
              The UNINP Coding Course offers comprehensive training in
              programming languages and software development
            </p>
            <Button variant="contained">Peek at this course</Button>
          </div>
          <div className="card">
            <h2>UNINP Digital Marketing Course</h2>
            <p>
              UNINP's Digital Marketing Course offers essential skills and
              strategies for success in the digital marketing industry.
            </p>

            <Button variant="contained">Peek at this course</Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
