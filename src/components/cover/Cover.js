import React from 'react';
import "./Cover.css";
import coverVideo from "../../assets/coverParameros.mp4";

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo}  autoPlay loop muted />
        <h1>PARAMEROS</h1>
        <p className='margin-bottom-m'>RECONECTA CON LA NATURALEZA</p>
        <a href="https://wa.me/message/COZWMJFFXZGHF1"  className='button'>RESERVA AHORA!</a>
    </div>
  )
}

export default Cover
