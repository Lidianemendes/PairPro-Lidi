import React from 'react';
import Bolo from './imagens/boloMain.png';
import Pizza from './imagens/pizzaMain.png';
import Smoothie from './imagens/smoothieMain.png';
import Colher from './imagens/colherMain2.png';
import './main.css'

export default function Main(){
    return(
        <>
        <div className='imagetext'>
        <h2>LATEST RECIPES</h2>

        <section className='receitas'>
            <img src={Bolo} alt=""/>
            <img src={Pizza} alt="" />
            <img src={Smoothie} alt="" />
        </section>
        <section className='list'>
            <ul>
                <li>Red Velvet Cake</li>
                <li>Margherita Pizza</li>
                <li>Peanut Smoothie</li>
            </ul> 
        </section>
        </div>
        <section className='duo'>
            <section className='coler'>
            <img src={Colher} alt="" />
            </section>
            <section className='text'>
            <h3>ABOUT</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</h4>
            </section>
        </section>
        <section className='submit'>
            <h3>SUBSCRIBE</h3>
            <h4>Sign up for newsletter</h4>
            <input placeholder='Your Email'/>
            <h2>SUBMIT</h2>
        </section>
        </>
    )
}