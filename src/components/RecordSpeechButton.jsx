/**
 * ************************************
 *
 * @module  RecordSpeechButton
 * @author Peter Larcheveque
 * @date 7/30/24
 * @description RecordSpeechButton component
 *
 * ************************************
 */

import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = ({listening, resetTranscript, handleClick, microphoneText, buttonStyle}) => {
  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button className = 'recording' id = 'start-recording' onClick={handleClick} style = {buttonStyle}>
        {microphoneText}
      </button>
      <button className = 'recording' id = 'reset-recording' onClick={resetTranscript}>Reset</button>
    </div>
  );
};

export default Dictaphone;