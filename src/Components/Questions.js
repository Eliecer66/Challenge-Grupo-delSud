import React from "react";
import item from "../Images/PF_o2qhsg.png"

export default function Questions() {
    const [answer, setAnswer] = React.useState(Array(5).fill(0));
    function handleClick(element) {
        let answers = Array(5).fill(0);
        if (answer[element]) {
            return setAnswer(answers); 
        }
        answers[element] = true;
        setAnswer(answers);
    }

    return (
        <div className="questions--container">
            <div className="questions--section container">
                <div className="question--container--content">
                    <ul className="question--list">
                        <li onClick={() => handleClick(0)} className="question first--question">
                            ¿Por qué invertir en Plan E? ¿A quién está dirigido?
                            <span className={`arrow--questions ${answer[0] ? "arrow--deployed" : ""}`}></span>
                        </li>
                        <ul className={`drop--down--answer ${answer[0] ? "display--answer": ""}`} >
                            <li>
                                El sector inmobiliario es una industria en constante crecimiento y permite un resguardo de valor para tu capital. Plan E está pensado para aquellos que quieren construir su casa propia y no pueden acceder por la línea de créditos tradicional, y también para quienes ven una oportunidad de inversión en el ladrillo.
                            </li>
                        </ul>
                        <li onClick={() => handleClick(1)} className="question second--question">
                            ¿Cómo funciona?
                            <span className={`arrow--questions ${answer[1] ? "arrow--deployed" : ""}`}></span>
                        </li>
                        <ul className={`drop--down--answer ${answer[1] ? "display--answer": ""}`}>
                            <li>
                                El usuario podrá comprar con un plan financiero a medida, unidades de un metro cuadrado en adelante. Estas unidades podrán ser: canjeables por una vivienda construible cuando haya llegado a un total de 60m2. comercializadas con la empresa u otros usuarios.
                            </li>
                        </ul>
                        <li onClick={() => handleClick(2)} className="question third--question">
                            ¿Cuál es el precio de un metro cuadrado?
                            <span className={`arrow--questions ${answer[2] ? "arrow--deployed" : ""}`}></span>
                        </li>
                        <ul className={`drop--down--answer ${answer[2] ? "display--answer": ""}`}>
                            <li>
                                Los valores del metro cuadrado están regidos por la APYMECO (Asociación de Pymes de la Construcción de la Provincia de Buenos Aires) y pueden consultarse en la plataforma de la misma.
                            </li>
                        </ul>
                        <li onClick={() => handleClick(3)} className="question fourth--question">
                            ¿Desde qué momento puedo decidir vender mis m2?
                            <span className={`arrow--questions ${answer[3] ? "arrow--deployed" : ""}`}></span>
                        </li>
                        <ul className={`drop--down--answer ${answer[3] ? "display--answer": ""}`}>
                            <li>
                                Cada usuario es libre de tomar la decisión de vender sus m2 en el momento que lo decida. Puede comercializarlos tanto con la empresa como con otros particulares.
                            </li>
                        </ul>
                        <li onClick={() => handleClick(4)} className="question fifth--question">
                            ¿Cuánto tiempo pasa hasta que recupere el dinero de mi inversión?
                            <span className={`arrow--questions ${answer[4] ? "arrow--deployed" : ""}`}></span>
                        </li>
                        <ul className={`drop--down--answer ${answer[4] ? "display--answer": ""}`}>
                            <li>
                                Es una inversión que genera líquidez inmediata, desde el primer momento. En caso de no construir, se pueden comercializar los m2 con la empresa o con otras personas.
                            </li>
                        </ul>
                    </ul>
                </div>
                <div className="question--container--image">
                    <img className="kitchen--image" src={item}/>
                </div>
            </div>
        </div>
    );
}