import React from 'react';
import "./Slider.css";
import { AiOutlineDollar, AiFillCheckCircle, AiFillWarning } from "react-icons/ai";

// Resources
import lagunaNegra from "../../assets/lagunaNegra.jpeg";
import lagunaEstrellas from "../../assets/lagunaEstrella.jpeg";
import siembras from "../../assets/siembras.jpeg";
import hospedaje from "../../assets/hospedaje.jpeg";
import caminataRio from "../../assets/caminatario.jpeg";

const slidesInfo = [
    {
        src: lagunaNegra,
        alt: 'ecoturismo laguna negra',
        title: 'Caminata ecológica Laguna Negra',
        desc: 'Ven a conocer la laguna negra. Encontraremos dos lindas cascadas que alimentan la laguna, y podrás apreciar las montañas del páramo de Ocetá, considerado el mas lindo del mundo',
        cost: 'Desde 80.000COP',
        includes: ['Transporte local', 'Almuerzo viajero tipo sandwich', 'guía local', 'entrada a la laguna']

    },
    {
        src: lagunaEstrellas,
        alt: 'ecoturismo laguna de la estrella',
        title: 'Caminata ecológica Lagunas de la Estrella',
        desc: 'Caminata con recorridos por quebradas y visita de dos lagunas en el páramo de San Ignacio, avistamiento de aves y flora típica del páramo, recorrido por camino real hacia los llanos orientales',
        cost: 'Desde 100.000COP',
        includes: ['Transporte local', 'Almuerzo viajero tipo sandwich', 'guía local', 'Visita dos lagunas', 'Visita páramo San Ignacio']
    },
    {
        src: hospedaje,
        alt: 'Hospedaje Rural',
        title: 'Hospedaje rural',
        desc: 'Hospedaje en tradicional finca campesina en donde podrás participar de las actividades diarias del campo, disfrutar de una fogata y de la mejor comida hecha en estufa de carbón',
        cost: 'Desde 60.000COP',
        includes: ['Desayuno campesino', 'Recorrido por la finca', 'Fogata', 'hospedaje x noche']
    },
    {
        src: siembras,
        alt: 'Siembra de árboles',
        title: 'Caminata y Siembra de árboles',
        desc: 'Siembra de frailejones y/o árboles nativos en el páramo Los Higuerones aportando a la recuperación de los terrenos antes utilizados en ganadería.',
        cost: 'Desde 80.000COP',
        includes: ['Frailejón', 'Almuerzo tipo sandwich', 'Caminata con guía local', 'Siembra']
    },
    {
        src: caminataRio,
        alt: 'Caminata rio y miradores',
        title: 'Caminata y baño de río',
        desc: 'Participa de esta caminata por Las Piedras y antiguo molino, disfruta de un refrescante y medicinal baño de río en las heladas aguas del rio saidube',
        cost: 'Desde 30.000COP',
        includes: ['Caminata al rio', 'Caminata mirador La Peña', 'Guía local', 'Fotografías']
    }
]

const slides = slidesInfo.map(slide => (
    <div className='slide-container'>
        <div className='slide-info'>
            <div className='slide-info-container'>
                <div className='slide-title'>
                    <h3>
                        {slide.title}
                    </h3>
                </div>
                <div className='slide-desc'>
                    <span>
                        {slide.desc}
                    </span>
                </div>
                <div className='slide-cost'>
                    <AiOutlineDollar />
                    <span>
                        {slide.cost}
                    </span>
                </div>
                <div className='slide-includes'>
                    <h4> Incluye: </h4>
                    {
                        slide.includes.map(item => {
                            return <div className='slide-includes-item'>
                                <AiFillCheckCircle />
                                <span> {item} </span>
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
        <div className='slide-img'>
            <img src={slide.src} alt={slide.alt} />
        </div>
    </div>
));

export default slides;