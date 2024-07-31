/**
 * ************************************
 *
 * @module  CardContainer
 * @author Peter Larcheveque
 * @date 7/30/24
 * @description stateful component that renders Card component
 *
 * ************************************
 */

import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import RecordSpeechButton from '../components/RecordSpeechButton.jsx';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const CardContainer = () => {
    const [microphoneText, setmicrophoneText] = useState('Start Recording'); // tracks inner text of recording button
    
    // speech recognition invocation
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
    
      // start recording on click, stop recording on next click
      const handleClick = () => {
        if (microphoneText == 'Start Recording') {
            setmicrophoneText('Stop Recording');
            SpeechRecognition.startListening({ continuous: true }); // continuous makes it s.t. your app will continue to listen to you even after you pause mid sentence
        } else if (microphoneText == 'Stop Recording') {
            setmicrophoneText('Start Recording');
            SpeechRecognition.stopListening();
        }
      }

      // edit styling of button on click
      const buttonStyle = {
        background: microphoneText === 'Start Recording' ? 'green' : 'red'
      }

    return (
    <div id = 'CardContainer'>
        <Card transcript = {transcript}/> 
        <RecordSpeechButton 
        listening = {listening}
        resetTranscript = {resetTranscript}
        handleClick = {handleClick}
        microphoneText = {microphoneText}
        buttonStyle = {buttonStyle}
        />
    </div>
    )
}

export default CardContainer;