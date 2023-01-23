import React from "react";

export default function Contact() {
    return (
        <div id="contact" className="user--data--section container">
            <div className="user--data--description">
                <h2>¿Querés recibir asesoramiento?</h2>
                <p>Si tenés alguna consulta para hacernos sobre Plan E, no dudes en contactarnos. Con mucho gusto la responderemos.</p>
            </div>
            <div className="user--data--form">
                <form className="user--form">
                    <div className="left--side">
                        <label>Nombre</label>
                        <input
                            type="text"
                            name="name"
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                        />
                        <label>Número</label>
                        <input
                            type="number"
                            name="telephone"
                        />
                    </div>
                    <div className="right--side">
                        <label>Mensaje</label>
                        <textarea 
                            name="comments"
                        />
                        <button className="button--form button--style">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}