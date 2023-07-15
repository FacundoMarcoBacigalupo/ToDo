import React from 'react'
import ToDo from '../../img/ToDo.png'
import "./footer.css"


const Footer = () => {
    return (
        <footer className='containerFooter'>
            <img src={ToDo} alt="Img footer" />
            <h5 className='motivation'>Do something GREAT...</h5>
            <p className='copyright'>Argentina, Buenos Aires ©2023. Todos los derechos reservados. Hecho por Facundo Marco Bacigalupo</p>
        </footer>
    )
}


export default Footer