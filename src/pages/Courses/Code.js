import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './Art.css'; // Import the CSS file

const textToRead = "Our Coding Course is meticulously crafted to ignite your passion for coding and enhance your programming skills. Whether you're taking your first steps into the world of coding or you're a seasoned developer, our comprehensive curriculum encompasses various programming languages and technologies, including HTML, CSS, JavaScript, Python, and more. Guided by experienced instructors, you'll receive tailored support and expert guidance to refine your coding style and problem-solving abilities. Come join us and embark on an exhilarating journey of discovery and mastery in the world of coding.";

const Code = () => {
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
            <h1>Code Course</h1>
            <p>
            Our Coding Course is meticulously crafted to ignite your passion for coding and enhance your programming skills. Whether you're taking your first steps into the world of coding or you're a seasoned developer, our comprehensive curriculum encompasses various programming languages and technologies, including HTML, CSS, JavaScript, Python, and more. Guided by experienced instructors, you'll receive tailored support and expert guidance to refine your coding style and problem-solving abilities. Come join us and embark on an exhilarating journey of discovery and mastery in the world of coding.
            </p>
            <button onClick={() => setIsReading(true)}>Citaj</button>
        </div>
    );
};

export default Code;
