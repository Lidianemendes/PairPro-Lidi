import React from "react";
import Star from './imagens/imageStar.png';
import RC from './imagens/imageRC.png'
import './Header.css'

export default function Header(){
    return(
        <>
        <h1>RECIPES</h1>
        <div className="rc">
        <img src={RC} alt='logo'/>
        <ul>
            <li>ABOUT</li>
            <li>RECIPES</li>
            <li className="destak">SUBSCRIBE</li>
        </ul>
        </div>
        <div className="star">
        <img src={Star} alt='torradeira'/>
        </div>
        </>
        
    )
}