import React from "react";
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

    return (
        <nav id="header" className="header">
            <div className="headerContent">
                <img className="logoHeader" onClick={handleClick} src="/img/logo.png" alt="Logo Museo del Jade"/>
                <div className="headerNav" id="headerNav">
                    <ul className="headerItems">
                        <li className="headerbtn" onClick={handleClickNews}>
                            <img  src="/img/eventos.png" alt="Eventos" />
                            <span>
                                Eventos
                            </span>
                        </li>
                        <li className="headerbtn" onClick={handleClickNews}>
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
                        <li className="headerbtn" onClick={handleClickNews}>
                            <img src="/img/galeria.png" alt="Galería" />
                            <span>
                                Galería
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