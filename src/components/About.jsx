import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../index.css";
import "../styles/about.css"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <br></br>
            <div className="flex-container"> 
            <FontAwesomeIcon icon="globe" className="globe"/><p className="abouttext"><span className="brand">WorldWideImporters</span> is a Dutch family owned company that imports and exports products from all over the world. To let everybody profit from their world wide network to give you everything you wish for just a mouseclick away. </p>
            </div>
            
        </div>
    );
  };
  
  export default About;