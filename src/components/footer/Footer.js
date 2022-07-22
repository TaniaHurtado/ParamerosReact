import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1> Parameros </h1>
            <p> Mongua-Boyacá</p>
            <div className='sns-links'>
                <a href="https://www.facebook.com/profile.php?id=100082044590331" target='_blank' rel="noopener noreferrer" >
                    <i className='fab fa-facebook facebook'></i>
                </a>
                <a href="http://instagram.com/paramerostours?utm_source=qr" target='_blank' rel="noopener noreferrer" >
                    <i className='fab fa-instagram instagram'></i>
                </a>

            </div>
        </div>
        <div className='footer-contact'>
        <iframe src="https://widgets.scribblemaps.com/sm/?d=true&z=true&l=true&id=09qiLUUzpb&s" allow="geolocation" allowfullscreen width="550" height="550" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>

    </footer>
  )
}

export default Footer