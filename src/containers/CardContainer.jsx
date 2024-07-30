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

 import React from 'react';
 import Card from '../components/Card.jsx';

 const CardContainer = () => {
    return (
    <div id = 'CardContainer'>
        <Card/>
    </div>
    )
 }

 export default CardContainer;