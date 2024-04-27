import React, { useEffect, useState, useRef } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import MicOffIcon from "@mui/icons-material/MicOff";
import "./Art.css"; // Import the CSS file
import theme from "../../theme/theme";
import ReactPlayer from "react-player/youtube";
import { useNavigate } from "react-router-dom";

const textToRead =
  "Our Coding Course is meticulously crafted to ignite your passion for coding and enhance your programming skills. Whether you're taking your first steps into the world of coding or you're a seasoned developer, our comprehensive curriculum encompasses various programming languages and technologies, including HTML, CSS, JavaScript, Python, and more. Guided by experienced instructors, you'll receive tailored support and expert guidance to refine your coding style and problem-solving abilities. Come join us and embark on an exhilarating journey of discovery and mastery in the world of coding.";
  const handleInitialRead = () => {
    const initialTextToRead = "Say read me to start, say play to play video, say back to go home";
    const initialSpeech = new SpeechSynthesisUtterance(initialTextToRead);
    window.speechSynthesis.speak(initialSpeech);
    initialSpeech.onend = () => {
      SpeechRecognition.startListening();
    };
  };
const Dmarket = () => {
  const navigate = useNavigate(); // Declare useNavigate here
  const handleInitialRead = () => {
    const initialTextToRead = "Say read me to start, say play to play video, say back to go home";
    const initialSpeech = new SpeechSynthesisUtterance(initialTextToRead);
    window.speechSynthesis.speak(initialSpeech);
    initialSpeech.onend = () => {
      SpeechRecognition.startListening();
    };
  };
  const handleNavigation = (route) => {
    navigate(route); // Use navigate for navigation
  };
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [isReading, setIsReading] = useState(false);
  const playerRef = useRef(null);

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
  const playVideo = () => {
    if (playerRef.current) {
      // Check if the player instance is available and play the video
      playerRef.current.getInternalPlayer().playVideo();
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser doesn't support speech recognition</span>;
  }

  if (transcript.toLowerCase() === "read me") {
    setIsReading(true); // Start reading if "read me" is detected
    resetTranscript(); // Reset the transcript after executing the command
  }else if(transcript.toLowerCase() === "play"){
    playVideo()
    resetTranscript(); // Reset the transcript after executing the command
  }else if(transcript.toLowerCase() === "back"){
    navigate("/home")
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="art-container" onClick={handleInitialRead} tabIndex="0">
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
          <ReactPlayer
            ref={playerRef}
            url="https://www.youtube.com/watch?v=bJzb-RuUcMU"
            controls
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Dmarket;
