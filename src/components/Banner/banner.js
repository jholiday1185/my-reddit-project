import React from "react";
import MyImage from "../images/Zeus-Logo.png";
import './banner.css';
export function Banner () {
    return(
        
        <div className="Banner">
            <header>
                    <h1>Redditt by Justin</h1>
                    <img src={MyImage} className="Zeus-Logo" alt="zeus-logo" />
            </header>
        </div>
    );
}