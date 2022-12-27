import React from "react";
import { useState } from "react";
import './brand.css';

const Brand = () => {
    const [logos, setLogo]= useState([
        {
            name : "google",
            src : require('../../assets/google.png')    /*3shan a2dr a7ot al pic fe src al img b7ot al path bta3ha fe require*/
        },
        {
            name : "slack",
            src : require('../../assets/slack.png')
        },
        {
            name : "atlassian",
            src : require('../../assets/atlassian.png')
        },
        {
            name : "dropbox",
            src : require('../../assets/dropbox.png')
        },
        {
            name : "shopify",
            src : require('../../assets/shopify.png')
        }  
    ])
    return (  
        <div className="gpt3__brand section__padding">
            <div className="gpt3__brand-images">
               { logos.map((logo, index)=>(
                <img src={logo.src} alt={logo.name} key={index}/>       /*5aly al key index 3shan unique*/ 
                ))
                }
            </div>
        </div>
    );
}
 
export default Brand;