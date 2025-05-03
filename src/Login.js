import React, { useState } from 'react';
import pik  from "./images/pik.png"
import one from "./images/one.gif"
import two from "./images/two.gif"
import three from "./images/three.gif"
import slide from "./images/slide.png"
import img from "./images/img.png"
import about from "./images/about.png"
import token from "./images/token.png"
import four from "./images/four.gif"
import five from "./images/five.gif"
import vone from "./images/vone.gif"
import vtwo from "./images/vtwo.gif"
import vthree from "./images/vthree.gif"
import vfour from "./images/vfour.gif"

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <nav className="navbar">
      <div className="logo">Pikachu</div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#token">Tokenomics</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="toggle-button" onClick={toggleNavbar}>
        {isOpen ? <span className="close-icon">&times;</span> : <span className="hamburger">&#9776;</span>}
      </div>
    </nav>

  <div className='text' id='home'>
      <img src={pik}/>
        <a href="#" class="buy">
              Buy Now
          </a>
     </div>
     <div className='gifs'>
     <img src={one}/>
     <img src={two}/>
     <img src={three}/>
     </div>
     <marquee behavior="infinite" direction="right">
       <div class="cnts">
        <h4>Pikachu</h4>
         <img src={slide}/>
         <h4>Pikachu</h4>
         <img src={slide}/>
         <h4>Pikachu</h4>
         <img src={slide}/>
         <h4>Pikachu</h4>
         <img src={slide}/>
         <h4>Pikachu</h4>
         <img src={slide}/>
         <h4>Pikachu</h4>
         <img src={slide}/>
         <h4>Pikachu</h4>
         <img src={slide}/>
         <h4>Pikachu</h4>
         <img src={slide}/>
         <h4>Pikachu</h4>
         <img src={slide}/>
         <h4>Pikachu</h4>
         <img src={slide}/>
         <h4>Pikachu</h4>
         <img src={slide}/>
         <h4>Pikachu</h4>
         <img src={slide}/>
         <h4>Pikachu</h4>
         <img src={slide}/>
         <h4>Pikachu</h4>
         <img src={slide}/>
         <h4>Pikachu</h4>
         <img src={slide}/>
        </div>
     </marquee>
     <div className='about' id='about'>
      <div className='left'>
         <img src={img}/>
      </div>
      <div className='right'>
         <img src={about}/>
         <p>We are determined to bring the legendary Pikachu to life on Ethereum. 
          Together, we will build a community and take Pikachu to the places it truly 
          deserves. Join us now and be a part of this journey 
          with us. Pikachu is ready to go to the moon!
          </p>
      </div>
     </div>
     {/* ----token-----*/}
     <div className='token' id='token'>
              <img className='gif-one' src={four}/>
              <img className='gif-two' src={five}/>
             <div className='contnt'>
               <img src={token}/>
               <p>No Taxes</p>
               <p>LP Burned</p>
               <p>420.690.000.000 Supply</p>
            </div>
          </div>
           {/* ------slider------*/}
           <marquee behavior="infinite" direction="left" className='marqee' id='contact'>
              <div className='sliders'>
              <img  src={vone}/>
               <img  src={vtwo}/>
               <img  src={vthree}/>
               <img  src={vfour}/>
               <img  src={vone}/>
               <img  src={vtwo}/>
               <img  src={vthree}/>
               <img  src={vfour}/>
               <img  src={vone}/>
               <img  src={vtwo}/>
               <img  src={vthree}/>
               <img  src={vfour}/>
               <img  src={vfour}/>
               <img  src={vfour}/>
               <img  src={vfour}/>
               <img  src={vfour}/>
               <img  src={vfour}/>
               </div>
            </marquee>
            <div className='ftr'>
             <p>
             © 2024 PIKACHU . All rights reserved.
             </p>
            </div>
     </div>
 
  );
};

export default Login;







          
           
          
      



    

