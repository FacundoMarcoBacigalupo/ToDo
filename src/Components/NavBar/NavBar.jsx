import React from 'react'
import ToDo  from '../../img/ToDo.png'
import { Link } from 'react-router-dom'
import "./navbar.css"



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-black">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand">
                        <img src={ToDo} alt="Avatar Logo" className="rounded-pill efectLogo" /> 
                    </Link>
                </div>


                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item efect">
                        <Link to={'/'} className="nav-link text-white-50" aria-current="page">Home</Link>
                    </li>

                    <li className="nav-item efect">
                        <Link to={'/tasks'} className="nav-link text-white-50">Tasks</Link>
                    </li>

                    <li className="nav-item efect">
                        <Link to={'/login'} className="nav-link text-white-50">Login</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar