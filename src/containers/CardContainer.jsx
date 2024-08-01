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
    const [micOnOpacity, setMicOnOpacity] = useState('0%');
    const [micOffOpacity, setMicOffOpacity] = useState('100%');

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
    
      // start recording on click, stop recording on next click, edit the microphone icon as well
      const handleClick = () => {
        if (microphoneText == 'Start Recording') {
            setmicrophoneText('Stop Recording');
            SpeechRecognition.startListening({ continuous: true }); // continuous makes it s.t. your app will continue to listen to you even after you pause mid sentence
            setMicOnOpacity('100%');
            setMicOffOpacity('0%');
        } else if (microphoneText == 'Stop Recording') {
            setmicrophoneText('Start Recording');
            SpeechRecognition.stopListening();
            setMicOnOpacity('0%');
            setMicOffOpacity('100%');
        }
      }

    //   const handleInput = (e) => {
    //     console.log(transcript)
    //     transcript += e.currentTarget.textContent; 
    //   }

      // edit styling of button on click
      const buttonStyle = {
        background: microphoneText === 'Start Recording' ? 'green' : 'red'
      }

      const micOnStyle = {
        opacity: micOnOpacity
      }

      const micOffStyle = {
        opacity: micOffOpacity
      }


    return (
    <div id = 'CardContainer'>
        <Card 
        transcript = {transcript}
        // handleInput = {handleInput}
        /> 
        <RecordSpeechButton 
        listening = {listening}
        resetTranscript = {resetTranscript}
        handleClick = {handleClick}
        microphoneText = {microphoneText}
        buttonStyle = {buttonStyle}
        micOnStyle = {micOnStyle}
        micOffStyle = {micOffStyle}
        />
    </div>
    )
}

export default CardContainer;