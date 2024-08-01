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

const Dictaphone = ({listening, resetTranscript, handleClick, microphoneText, buttonStyle, micOnStyle, micOffStyle}) => {
  return (
    <div>
      <div id = 'mic-icon-on' style = {micOnStyle}></div> 
      <div id = 'mic-icon-off' style = {micOffStyle}></div> 
      <div id = 'mic-text'>Microphone: {listening ? 'on' : 'off'}</div>
      <button className = 'recording' id = 'start-recording' onClick={handleClick} style = {buttonStyle}>
        {microphoneText}
      </button>
      <button className = 'recording' id = 'reset-recording' onClick={resetTranscript}>Reset</button>
    </div>
  );
};

export default Dictaphone;