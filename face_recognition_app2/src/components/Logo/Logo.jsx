import React from 'react'
import { Tilt } from "react-tilt";
import './Logo.css' ;
import brain from './brain.png' ;

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function Logo() {
  return (

    // position absolute krne per content logo k niche na start hokr age agya 
    // <div className="ma4 mt0" style={{position:"absolute"}}>
    <div className="ma4 mt0">
      <Tilt
        options={defaultOptions}
        className="Tilt br2 shadow-2"
        style={{ height: 150, width: 150 }}
      >
        <div className='pa3'><img src={brain} alt='brain logo' style={{paddingTop:'5px'}}/></div>
      </Tilt>
    </div>
  );
}

export default Logo