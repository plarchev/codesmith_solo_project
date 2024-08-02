/**
 * ************************************
 *
 * @module  Card Component
 * @author Peter Larcheveque
 * @date 7/30/24
 * @description card component
 *
 * ************************************
 */
import React from 'react';

const Card = ({transcript, handleInput, backgroundImage}) => {
    // console.log(backgroundImage)
    // console.log({"backgroundImage":backgroundImage})
    return (
        <div id = "Card" style = {{"backgroundImage":backgroundImage}}>
            <p id = 'recording-transcript' onChange = {handleInput} contentEditable={true} suppressContentEditableWarning={true}> {transcript} </p>
        </div>
    )
}

export default Card;