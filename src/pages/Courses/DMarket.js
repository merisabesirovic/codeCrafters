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
  "Our Digital Marketing Course is meticulously designed to ignite your passion for online marketing and hone your digital skills. Whether you're new to the realm of digital marketing or a seasoned marketer, our comprehensive curriculum covers a diverse array of topics, including social media marketing, search engine optimization (SEO), content marketing, email marketing, and more. Led by industry experts, you'll receive personalized guidance and hands-on experience to develop effective marketing strategies and leverage digital tools to drive business growth. Join us now and embark on an exciting journey to become a proficient digital marketer.";

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
        <h1>Digital Marketing Course</h1>
        <p>{textToRead}</p>
        <Button onClick={() => setIsReading(true)}>Citaj</Button>

        {/* Add iframe */}
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bixR-KIJKYM?si=VdFrFV-j6_jQ15qj"
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
