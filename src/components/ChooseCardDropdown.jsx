import React from 'react';

const ChooseCard = ({handleDropdown, value}) => {
    return (
        <div className = "dropdown">
            <p id = 'select-occasion'> Select Occasion: </p>
            <select value = {value} onChange={handleDropdown}>

                <option value="Birthday-Card">Birthday Card</option>

                <option value="Christmas-Card">Christmas Card</option>

                <option value="Valentines-Day-Card" >Valentine's Day Card</option>

            </select>
        </div>
    )
}

export default ChooseCard;