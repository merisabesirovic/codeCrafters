import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './Art.css'; // Import the CSS file

const textToRead = "Our Digital Marketing Course is meticulously designed to";

const initialTextToRead = "Say read me to start.";

const Dmarket = () => {
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

    if (transcript.toLowerCase() === "read me") {
        setIsReading(true); // Start reading if "read me" is detected
        resetTranscript(); // Reset the transcript after executing the command
    }else if (transcript.toLowerCase() === "stop") {
        SpeechRecognition.stopListening(); // Stop listening if "stop" is detected
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
            <h1>Digital Market Course</h1>
            <p>
            Our Digital Marketing Course is meticulously designed to ignite your passion for online marketing and hone your digital skills. Whether you're new to the realm of digital marketing or a seasoned marketer, our comprehensive curriculum covers a diverse array of topics, including social media marketing, search engine optimization (SEO), content marketing, email marketing, and more. Led by industry experts, you'll receive personalized guidance and hands-on experience to develop effective marketing strategies and leverage digital tools to drive business growth. Join us now and embark on an exciting journey to become a proficient digital marketer.
            </p>
            <button onClick={() => setIsReading(true)}>Citaj</button>
        </div>
    );
};

export default Dmarket;
