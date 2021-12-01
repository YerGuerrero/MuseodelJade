import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalTickets = () => {
    function close() {
        const modalTickets= document.getElementById("modalTickets");
        modalTickets.style.visibility="hidden";
    };

    useEffect(()=>{
        const callback = () => { 
            const modalTickets= document.getElementById("modalTickets");
            modalTickets.style.visibility="visible";                  
        };       
        document.addEventListener('modalTicketsOpen', callback);
    })

    return (
        <div id="modalTickets" className="modalTickets">
            <div id= "text" >
                <h1>¡Su compra fue exitosa!</h1>
                <div style={{width: "100%", overflowY: "auto"}}>
                    <p>Compra segura, con el respaldo de grupo INS. Pronto recibirá la confirmación por medio del correo electrónico.</p>
                </div>
                <div className="containerModalTicket">
                    <img className="imageINS" src="/img/logoINS.png" alt="ImagenObra"/>
                    <button onClick={close} className="btnSaveModalTicket">Aceptar</button>
                </div>
            </div> 
        </div>
    );
};

export default ModalTickets;