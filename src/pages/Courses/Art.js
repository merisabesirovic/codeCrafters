import React, { useEffect, useState, useRef } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./Art.css"; // Import the CSS file
import { Button } from "@mui/material";
import theme from "../../theme/theme";
import { ThemeProvider } from "@emotion/react";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import MicOffIcon from "@mui/icons-material/MicOff";
import ReactPlayer from "react-player/youtube";
import { useNavigate } from "react-router-dom";

const textToRead =
  "Our Art Course is designed to unleash your creativity and develop your artistic skills. Whether you are a beginner or an experienced artist, our comprehensive curriculum covers a wide range of techniques and mediums, including drawing, painting, sculpture, and digital art. Led by talented instructors, you will receive personalized feedback and guidance to help you explore your artistic voice and express yourself through your work. Join us and embark on a journey of self-discovery and artistic growth.";
  const handleInitialRead = () => {
    const initialTextToRead = "Say read me to start, say play to play video, say back to go home";
    const initialSpeech = new SpeechSynthesisUtterance(initialTextToRead);
    window.speechSynthesis.speak(initialSpeech);
    initialSpeech.onend = () => {
      SpeechRecognition.startListening();
    };
  };
const Art = () => {
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

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser doesn't support speech recognition</span>;
  }
const playVideo = () => {
    if (playerRef.current) {
      // Check if the player instance is available and play the video
      playerRef.current.getInternalPlayer().playVideo();
    }
  };
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
    <div className="art-container" onClick={handleInitialRead} tabIndex="0">
      <div>
        <div className="flex">
          {listening ? (
            <KeyboardVoiceIcon color="#1d3455"></KeyboardVoiceIcon>
          ) : (
            <MicOffIcon color="#1d3455"></MicOffIcon>
          )}
          <p>Microphone: {listening ? "on" : "off"}</p>
        </div>
        <ThemeProvider theme={theme}>
          <div className="flex">
            <Button
              variant="contained"
              onClick={SpeechRecognition.startListening}
            >
              Start
            </Button>
            <Button
              variant="contained"
              onClick={SpeechRecognition.stopListening}
            >
              Stop
            </Button>
            <Button variant="contained" onClick={resetTranscript}>
              Reset
            </Button>
          </div>
        </ThemeProvider>
        <p>{transcript}</p>
      </div>
      <h1>Art Course</h1>
      <p>
        Our Art Course is designed to unleash your creativity and develop your
        artistic skills. Whether you are a beginner or an experienced artist,
        our comprehensive curriculum covers a wide range of techniques and
        mediums, including drawing, painting, sculpture, and digital art. Led by
        talented instructors, you will receive personalized feedback and
        guidance to help you explore your artistic voice and express yourself
        through your work. Join us and embark on a journey of self-discovery and
        artistic growth.
      </p>
      <ThemeProvider theme={theme}>
        <Button
          style={{ width: "300" }}
          variant="outlined"
          onClick={() => setIsReading(true)}
        >
          Citaj
        </Button>
      </ThemeProvider>

      <div class="video-container">
        <ReactPlayer
          ref={playerRef}
          url="https://www.youtube.com/watch?v=_kFJflibthg&list=RD_kFJflibthg&start_radio=1"
          controls
        />
      </div>
    </div>
  );
};

export default Art;
