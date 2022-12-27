import React from "react";
import './navbar.css';
import {RiMenu3Line , RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'; 
import { useState } from "react";

//di 3bara 3n function component 3shan ast5dmha f aktar mn mkan
const Menu = ()=> (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#blog">Library</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu , setToggleMenu] = useState (false);

    return (  
        <div className="gpt3__navbar">
            {/* BEM --> Block Element Modifier    , dii tare2t al tasmya bta3t al css al 7aga al bt relate  t-contain b3dha dii */}
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu/>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                    <p>Sign in</p>
                    <button type="button"> Sign Up </button>
            </div>

             {/*hna b3ml mobile menu ll navbar,  to use some dynamic values from useState*/}
             
            <div className="gpt3__navbar-menu">         
            {
                toggleMenu ? <RiCloseLine color="#fff" size={27} onClick= {()=> setToggleMenu(false)} />
                           : <RiMenu3Line color="#fff" size={27} onClick= {()=> setToggleMenu(true)} /> 
            }

            {  // al tare2a dii y3nii ytnfz fe 7alt lw al toggleMenu b true bs 
                toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center"> 
                    {/* al scale up or whatever eh hytktb hna gmb asm al div dh asm class al animation al na 7tah fe app css*/}
                        <Menu/>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p> Sign in</p>
                                <button type="button"> Sign Up </button>
                            </div>
                    </div>
                )
            }
            </div>
        </div>
    );
}
 
export default Navbar;