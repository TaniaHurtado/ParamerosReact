import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1> Parameros </h1>
            <p> Mongua-Boyacá</p>
        </div>
        <div className='footer-contact'>
            <h3> Contactanos</h3>
            <span> Y ven a vivirlo con nosotros</span>
        </div>
        <div className='footer-sns'>
            <div> By Parameros</div>
            <div className='sns-links'>
                <a href="https://www.facebook.com/profile.php?id=100082044590331" target='_blank' rel="noopener noreferrer" >
                    <i className='fab fa-facebook facebook'></i>
                </a>
                <a href="http://instagram.com/paramerostours?utm_source=qr" target='_blank' rel="noopener noreferrer" >
                    <i className='fab fa-instagram instagram'></i>
                </a>

            </div>
        </div>


    </footer>
  )
}

export default Footer