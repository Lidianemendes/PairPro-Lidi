import React from 'react';
import Instagram from './imagens/instagram.png';
import Twitter from './imagens/twitter.png';
import Facebook from './imagens/facebook.png';
import Pinterest from './imagens/pinterest.png';
import './styles/Footer.css'


export default function Footer(){
    return(
        <>
        <section className='footer'>
         <section className='redes'>
            <img src={Instagram} alt='instagram'/>
            <img src={Twitter} alt='twitter'/>
            <img src={Facebook} alt='facebook' />
            <img src={Pinterest} alt='pinterest' />
            <ul className='end'>
            <li>ABOUT</li>
            <li>RECIPES</li>
            <li>SUBSCRIBE</li>
            </ul>
         </section>
         <section className='copy'>
            <p>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</p>
         </section>
        </section>

        </>
    )
}