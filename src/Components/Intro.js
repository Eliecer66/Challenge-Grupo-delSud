import React from "react";
import laptop from "../Images/preview-laptop.png"
import playIcon from "../Images/play-icon.svg";

export default function Intro() {
    return (
        <div className="intro--section ">
            <div className="intro--container container">
                <div className="intro--info">
                    <h2>BIENVENIDO A</h2>
                    <h1>PLAN E</h1>
                    <p className="intro--bold--paragraph">Te invitamos a conocer la nueva herramienta financiera de Elemental Constructora.</p>
                    <p>Plan E te da la posibilidad de ahorrar en metros cuadrados poniendo vos los plazos y la cantidad de unidades que querés comprar, mientras tu inversión crece por la actualización de valores.</p>
                </div>
                <div className="intro--image">
                    <img src={laptop} alt="laptop display" className="laptop--image"/>
                    <div className="play--icon">
                        <img src={playIcon}/>
                    </div>

                </div>
            </div>
        </div>
    );
}