import React from "react";
import logo from "../Images/icon-elemental_ynayoj.png"
import instagram from "../Images/instaa_iy2xs3.svg"
import facebook from "../Images/fbbb_wnp8tw.svg"
import whatsapp from "../Images/wsppp_tyjzbh.svg"

export default function Footer() {
    return (
        <div className="footer--container">
            <div className="footer--section container">
                <div className="footer--right--section">
                    <img className="logo--footer" src={logo}/>
                    <div className="company--info">
                        <h2>© ELEMENTAL CONSTRUCTORA</h2>
                        <p>Todos los derechos reservados. 2021.</p>
                        <p>Todas las imágenes son ilustrativas.</p>
                    </div>
                </div>
                <div className="footer--left--section">
                    <div className="footer--left--houses">
                        <h2>VIVIENDAS</h2>
                        <a>Línea Tradicional</a>
                        <a>Línea Disign</a>
                    </div>
                    <div className="footer--left--address">
                        <h2>UBICACIÓN</h2>
                        <p>Av. 7 840 e/48 y 49</p>
                        <p>La Plata, Buenos Aires.</p>
                        <p>Argentina</p>
                    </div>
                    <div className="footer--left--contact">
                        <h2>CONTACTO</h2>
                        <div className="icons">
                            <a href="https://www.facebook.com/elemental.constructora/" target="_blank"><img  src={facebook} className="contact--social--media facebook"/></a>
                            <a href="https://www.instagram.com/elemental.constructora/" target="_blank"><img  src={instagram} className="contact--social--media instagram"/></a>
                            <a href="https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre..." target="_blank"><img  src={whatsapp} className="contact--social--media whatsapp"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}