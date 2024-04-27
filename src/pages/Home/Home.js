import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./Home.css"; // Import the CSS file for styling
import theme from "../../theme/theme";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import nit from "../../img/nit.png";
import google from "../../img/google.png";
import uni from "../../img/uninp.png";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import MicOffIcon from "@mui/icons-material/MicOff";
const textToRead =
  "Our Digital Marketing Course is meticulously designed to ignite your passion for online marketing and hone your digital skills. Whether you're new to the realm of digital marketing or a seasoned marketer, our comprehensive curriculum covers a diverse array of topics, including social media marketing, search engine optimization (SEO), content marketing, email marketing, and more. Led by industry experts, you'll receive personalized guidance and hands-on experience to develop effective marketing strategies and leverage digital tools to drive business growth. Join us now and embark on an exciting journey to become a proficient digital marketer.";
const asistentClick = () =>{
  const text = "If you want to go to art course say art, if you want to go to coding course say code, if you want to go to digital course say digital"
  const value =  new SpeechSynthesisUtterance(text)
  window.speechSynthesis.speak(value)
  value.onend = () => {
        
    SpeechRecognition.startListening();
};
}
const HomePage = () => {
  const navigate = useNavigate(); // Declare useNavigate here

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

  if (transcript.toLowerCase() === "art") {
    navigate("/home/art");
  } else if (transcript.toLowerCase() === "code") {
    navigate("/home/coding");
  } else if (transcript.toLowerCase() == "digital") {
    navigate("/home/digital-marketing");
  } else if (
    transcript.toLowerCase() !== "art" ||
    transcript.toLowerCase() !== "code" ||
    transcript.toLowerCase() !== "digital"
  ) {
  }
  return (
    <ThemeProvider theme={theme}>
      <div onClick={asistentClick} className="home-page">
        <div className="f">
          {listening ? (
            <KeyboardVoiceIcon color="#1d3455"></KeyboardVoiceIcon>
          ) : (
            <MicOffIcon color="#1d3455"></MicOffIcon>
          )}
          <p>Microphone: {listening ? "on" : "off"}</p>
        </div>
        <Button variant="contained" onClick={SpeechRecognition.startListening}>
          Start
        </Button>
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
            <h2>Centar NIt Coding Course</h2>
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

            <h2>Google Digital Marketing Course</h2>
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
