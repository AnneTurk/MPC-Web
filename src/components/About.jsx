import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../index.css";
import "../styles/about.css"

const About = () => {
    return (
        <div className="flex-container-row">
            
            <br></br>
            <br></br>
            <div className="col-1"></div>
            <div className="flex-container-column col-12">
            <h1 id="about">About</h1>
            <div className="flex-container-row col-10"> 
            <FontAwesomeIcon icon="globe" size="7x"className="globe"/>
            <div className="col-1"></div>
            <p className="abouttext"><span className="brand">WorldWideImporters</span> is a Dutch family owned company that imports and exports products from all over the world. To let everybody profit from their world wide network to give you everything you wish for just a mouseclick away. The dutch spirit of transporting goods all over the world start centuries ago during the golden ages. The same spirit that motivated the merchants of that time, motivated us to deliver your products at home. Take a look around and experience the comfort and easy of ordering grocesseries at WorldWideImporters  </p>
            </div>
            </div>
            <div className="col-1"></div>
        </div>
    );
  };
  
  export default About;