import React from "react";
import image from "../Images/PLAN E 1.svg";

export default function Modal() {

    const [modal, setModal] = React.useState(true);
    function toggleModal() {
        setModal(prevModal => !prevModal);
    }

    return (
        modal && 
        <div className="modal">
            <div className="overlay"></div>
            <div className="pop--up--preview--container">
                <div className="container--pop--up--image">
                    <img src={image}/>
                </div>
                <div className="pop--up--message">
                    <div className="pop--up--title">
                        <h1>PLAN E</h1>
                    </div>
                    <div className="pop--up--subtitle">
                        <h3>LA CASA DE TUS SUEÑOS</h3>
                    </div>
                    <div className="pop--up--second--subtitle">
                        <h2>¡ES POSIBLE!</h2>
                    </div>
                    <div className="pop--up--paragraph">
                        <p>¿QUERÉS SABER MÁS?</p>
                    </div>
                    <div  onClick={toggleModal} className="pop--up--mail">
                        <a href="#contact">Dejanos tu mail</a>
                    </div>
                </div>
                <button onClick={toggleModal} className="close--toggle">
                    X
                </button>
            </div>
        </div>
    );
}