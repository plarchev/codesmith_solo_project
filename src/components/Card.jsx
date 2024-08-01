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
import React, {useState, setState} from 'react';

const Card = ({transcript}) => {
    return (
        <div id = "Card">
            <p id = 'recording-transcript' > {transcript} </p>
        </div>
    )
}

export default Card;