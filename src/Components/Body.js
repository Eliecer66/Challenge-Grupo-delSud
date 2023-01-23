import React from "react";
import itemA from "../Images/simple_y_accesible_ícono_fopqnm.svg";
import itemB from "../Images/liquidez_inmediata_ícono_zsofct.svg";
import itemC from "../Images/flexible_ícono_afucep.svg";
import itemD from "../Images/erra_bjguw5.jpg";
import itemE from "../Images/Gráfico_Plan_E_hajghl.png";

export default function Body() {
    return (
        <div className="body--sections">
            <div className="body--first--section container">
                <div className="item--body--descriptions">
                    <img src={itemA}/>
                    <div className="item--description">
                        <p className="item--subtitle">SIMPLE Y ACCESIBLE</p>
                        <p className="item--description">Más inclusivo que el sistema tradicional.</p>
                    </div>
                </div>    
                <div className="item--body--descriptions">
                    <img src={itemB}/>
                    <div className="item--description">
                        <p className="item--subtitle">LIQUIDEZ INMEDIATA</p>
                        <p className="item--description">Ves tu capital crecer desde el inicio.</p>
                    </div>
                </div>
                <div className="item--body--descriptions">
                    <img src={itemC}/>
                    <div className="item--description">
                        <p className="item--subtitle">FLEXIBLE</p>
                        <p className="item--description">No te comprometes a pagar una cuota.</p>
                    </div>
                </div>
            </div>
            <div className="body--second--section">
                <img className="second--section--image"src={itemD}/>
            </div>
            <div className="body--third--section">
                <div className="body--third--container container">
                    <div className="body--third--container--image">
                        <img className="plane--image" src={itemE}/>
                    </div> 
                    <div className="body--third--container--description">
                        <h3>PLAN E</h3>
                        <h3>es una inversión simple, segura y rentable </h3>
                        <p>Que te genera liquidez inmediata sin condicionarte a ingresar dinero de manera constante.</p>
                        <p>Una alternativa financiera para aquellos que tienen dificultades para acceder a construir su casa propia, como así también para quienes ven al ladrillo como un resguardo de valor para su capital.</p>
                        <a type="button" href="#contact" className="button--style">CONOCÉ MÁS</a>
                    </div>
                </div> 
            </div>
        </div>
    );
}
