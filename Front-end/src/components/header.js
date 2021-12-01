import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";



const Header = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/");
    };

    const handleClickNews = () => {
        history.push("/news");
    };

    const handleClickTours = () => {
        history.push("/tours");
    };

    const handleClickServices = () => {
        history.push("/services");
    };

    const handleClickEvents = () => {
        history.push("/events");
    };

    const handleClickExhibitions = () => {
        history.push("/exhibitions");
    };

    const handleClickTickets = () => {
        history.push("/tickets");
    };

    useEffect(()=>{
        const callback = (e) => {  
            window.localStorage.setItem("detail",JSON.stringify( e.detail)); 
            history.push("/all_exhibition"); 
        };       
        document.addEventListener('ExhibitionPage', callback);

        const callbackExhibition = (e) => {    
            window.localStorage.setItem("exhibition",JSON.stringify( e.detail)); 
            history.push("/exhibition"); 
        };       
        document.addEventListener('Exhibition', callbackExhibition);

        const callbackArtWork = (e) => {     
            window.localStorage.setItem("artWork",JSON.stringify( e.detail)); 
            history.push("/art_Work"); 
        };       
        document.addEventListener('ArtWork', callbackArtWork);

        const callbackTour = (e) => {
            window.localStorage.setItem("tour",JSON.stringify(e.detail));
            history.push("/tour");
        };
        document.addEventListener('TourOpen', callbackTour);
    });
    
    return (
        <nav id="header" className="header">
            <div className="headerContent">
                <img className="logoHeader" onClick={handleClick} src="/img/logo.png" alt="Logo Museo del Jade"/>
                <div className="headerNav" id="headerNav">
                    <ul className="headerItems">
                        <li className="headerbtn" onClick={handleClickEvents}>
                            <img  src="/img/eventos.png" alt="Eventos" />
                            <span>
                                Eventos
                            </span>
                        </li>
                        <li className="headerbtn" onClick={handleClickTickets}>
                            <img  src="/img/tiquetes.png" alt="Tiquetes" />
                            <span>
                                Tiquetes
                            </span>
                        </li>
                        <li className="headerbtn" onClick={handleClickTours}>
                            <img  src="/img/tourVirtuales.png" alt="Tours Virtuales" />
                            <span>
                                Tours Virtuales
                            </span>
                        </li>
                        <li className="headerbtn" onClick={handleClickExhibitions}>
                            <img src="/img/galeria.png" alt="Exhibiciones" />
                            <span>
                                Exhibiciones
                            </span>
                        </li>
                        <li className="headerbtn" onClick={handleClickNews}>
                            <img src="/img/noticias.png" alt="Noticias" />
                            <span>
                                Noticias
                            </span>
                        </li>
                        <li className="headerbtn" onClick={handleClickServices}>
                            <img src="/img/servicios.png" alt="Servicios" />
                            <span>
                                Servicios
                            </span>
                        </li>                      
                    </ul>
                </div>
                
            </div>
        </nav>
        

    );
};
export default Header;