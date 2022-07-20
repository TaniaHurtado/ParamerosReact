import React from 'react';
import './About.css';
import aboutImage from "../../assets/aboutUs.jpeg";

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>Nuestra esencia</h3>
        <p className='margin-bottom-m'>
          Parameros nace a partir de nuestras experiencias vividas en los páramos de Mongua Boyacá,
          estos lugares maravillososo llenos de magia e historias fantásticas hacen que queramos 
          compartir estas expericenias con el mundo!.
        </p>
        <p>
        Y que mejor forma de hacerlo que a través de una experiencia completa de 
          vivencias en el campo, acompañando de cerca las actividades que realizan a diario
          nuestros campesinos y lo mas importante, poniendo nuestro 
          granito de arena en la conservación del medio ambiente mediante la siembra de 
          frailejones y árboles nativos en las regiones de nuestros páramos 
          que se encuentran en recuperación.
        </p>

      </div>
      <div className='about-img'>
        <img src={aboutImage} alt="about-parameros" />
      </div>
    </div>
  )
}

export default About