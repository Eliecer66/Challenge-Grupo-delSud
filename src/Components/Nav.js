import React from "react";
import logo from "../Images/logo.svg"

export default function Nav() {
    return (
        <div className="container">
            <div className="nav--bar"> 
                <div className="nav--bar--logo">
                    <img src={logo} alt="Logo" className="logo"/>
                </div>
                <div className="nav--bar--items">
                    <ul className="nav--bar--items--list">
                        <li className="item--list">INICIO</li>
                        <li className="item--list">NOSOTROS</li>
                        <li className="item--list">VIVIENDA<i className="arrow"></i></li>
                        <li className="item--list">QUINCHOS</li>
                        <li className="item--list">PLAN E</li>
                        <li className="item--list">REALIDAD VIRTUAL</li>
                        <li className="item--list">CONTACTO</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

