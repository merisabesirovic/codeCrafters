import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import MicOffIcon from "@mui/icons-material/MicOff";
import "./Art.css"; // Import the CSS file
import theme from "../../theme/theme";

const textToRead =
  "Our Coding Course is meticulously crafted to ignite your passion for coding and enhance your programming skills. Whether you're taking your first steps into the world of coding or you're a seasoned developer, our comprehensive curriculum encompasses various programming languages and technologies, including HTML, CSS, JavaScript, Python, and more. Guided by experienced instructors, you'll receive tailored support and expert guidance to refine your coding style and problem-solving abilities. Come join us and embark on an exhilarating journey of discovery and mastery in the world of coding.";

const Dmarket = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    if (isReading) {
      const value = new SpeechSynthesisUtterance(textToRead);
      window.speechSynthesis.speak(value);
    } else {
      window.speechSynthesis.cancel();
    }
  }, [isReading]);

  const handleKeyDown = (event) => {
    if (event.keyCode === 32) {
      // Check if the pressed key is the spacebar
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

  if (transcript.toLowerCase() === "read me") {
    setIsReading(true); // Start reading if "read me" is detected
    resetTranscript(); // Reset the transcript after executing the command
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="art-container" onKeyDown={handleKeyDown} tabIndex="0">
        <div className="flex">
          {listening ? (
            <KeyboardVoiceIcon color="#1d3455"></KeyboardVoiceIcon>
          ) : (
            <MicOffIcon color="#1d3455"></MicOffIcon>
          )}
          <p>Microphone: {listening ? "on" : "off"}</p>
        </div>
        <div className="flex">
          <Button
            variant="contained"
            onClick={SpeechRecognition.startListening}
          >
            Start
          </Button>
          <Button variant="contained" onClick={SpeechRecognition.stopListening}>
            Stop
          </Button>
          <Button variant="contained" onClick={resetTranscript}>
            Reset
          </Button>
        </div>
        <p>{transcript}</p>
        <h1>Coding Course</h1>
        <p>{textToRead}</p>
        <Button onClick={() => setIsReading(true)}>Citaj</Button>

        {/* Add iframe */}
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zOjov-2OZ0E?si=VNkyE9R7FgqFHL0R"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Dmarket;
