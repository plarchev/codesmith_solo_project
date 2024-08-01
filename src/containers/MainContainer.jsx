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
import DownloadButton from '../components/DownloadButton.jsx';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const MainContainer = () => {
    const handleDownloadPDF = (input) => {
        console.log(input);
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('downloaded-file.pdf'); 
            // Specify the name of the downloaded PDF file
          });
    }
    return <div className = "container" >
        <h1 id= "header"> ChattyCards</h1>
        <NavBarContainer/>
        <CardContainer/>
        {/* <DownloadButton handleDownloadPDF = {handleDownloadPDF}/> */}
    </div>
}

export default MainContainer;
