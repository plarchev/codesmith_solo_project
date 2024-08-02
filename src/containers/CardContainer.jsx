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
import ChooseCardDropdown from '../components/ChooseCardDropdown.jsx';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



const CardContainer = () => {
    const [microphoneText, setmicrophoneText] = useState('Start Recording'); // tracks inner text of recording button
    const [micOnOpacity, setMicOnOpacity] = useState('0%');
    const [micOffOpacity, setMicOffOpacity] = useState('100%');
    const [story, setStory] = useState("");
    const [cardVal, setCardVal] = useState('Birthday-card');
    const [backgroundImage, setBackgroundImage] = useState('');

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

      // manually edit the transcript - note that these changes don't persist once you start talking again!!!!
      const handleInput = (e) => {
        useEffect(() => {
            setStory(transcript);
          }, [transcript]);
      }

      const handleDropdown = (event) => {
        if (event.target.value == 'Birthday-Card') {
            setBackgroundImage('url("' + 'https://www.dayspring.com/media/catalog/product//8/6/86067-1401_alt1_1_1.jpg' + '")')
        } else if (event.target.value == 'Christmas-Card') {
            setBackgroundImage('url("' + "https://printthistoday.com/wp-content/uploads/2021/08/free-printable-christmas-card-1-1056x675.png" + '")')
        } else if (event.target.value == 'Valentines-Day-Card') {
            setBackgroundImage('url("' + "https://printthistoday.com/wp-content/uploads/2023/01/free-printable-valentines-day-cards-for-teachers-1-1123x675.png" + '")')
        } 
        setCardVal(event.target.value); // update state of dropdown value
      }

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
        handleInput = {handleInput}
        backgroundImage = {backgroundImage}
        onChange={(e) => setStory(e.target.value)}
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
        <ChooseCardDropdown 
        value = {cardVal}
        handleDropdown = {handleDropdown}
        />
    </div>
    )
}

export default CardContainer;