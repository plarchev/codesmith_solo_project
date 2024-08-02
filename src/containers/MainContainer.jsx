/**
 * ************************************
 *
 * @module  MainContainer
 * @author Peter Larcheveque
 * @date 7/30/24
 * @description stateful component that renders MainContainer and NavBarContainer
 *
 * ************************************
 */

import React, {useRef} from 'react';
import CardContainer from './CardContainer.jsx';
import NavBarContainer from './NavBarContainer.jsx';

const MainContainer = () => {
    return <div className = "container" >
        <h1 id= "header"> ChattyCards</h1>
        <NavBarContainer/>
        <CardContainer/>
    </div>
}

export default MainContainer;
