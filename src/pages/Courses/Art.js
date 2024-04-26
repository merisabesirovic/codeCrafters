import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './Art.css'; // Import the CSS file

const textToRead = "Our Art Course is designed to unleash your creativity and develop your artistic skills. Whether you are a beginner or an experienced artist, our comprehensive curriculum covers a wide range of techniques and mediums, including drawing, painting, sculpture, and digital art. Led by talented instructors, you will receive personalized feedback and guidance to help you explore your artistic voice and express yourself through your work. Join us and embark on a journey of self-discovery and artistic growth.";

const Art = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
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

    if (transcript.toLowerCase() === "read me") {
        setIsReading(true); // Start reading if "read me" is detected
        resetTranscript(); // Reset the transcript after executing the command
    }

    return (
        <div className="art-container" onKeyDown={handleKeyDown} tabIndex="0">
            <div>
                <p>Microphone: {listening ? 'on' : 'off'}</p>
                <button onClick={SpeechRecognition.startListening}>Start</button>
                <button onClick={SpeechRecognition.stopListening}>Stop</button>
                <button onClick={resetTranscript}>Reset</button>
                <p>{transcript}</p>
            </div>
            <h1>Art Course</h1>
            <p>
                Our Art Course is designed to unleash your creativity and develop your artistic skills. Whether you are a beginner or an experienced artist, our comprehensive curriculum covers a wide range of techniques and mediums, including drawing, painting, sculpture, and digital art. Led by talented instructors, you will receive personalized feedback and guidance to help you explore your artistic voice and express yourself through your work. Join us and embark on a journey of self-discovery and artistic growth.
            </p>
            <button onClick={() => setIsReading(true)}>Citaj</button>
        </div>
    );
};

export default Art;
