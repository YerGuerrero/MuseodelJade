import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";


class HomePage extends React.Component {
    render() {
        return (
            <div className="homeContainer">
                <div className="segmentsContainer">
                <div className="segment" style={{ backgroundImage: `url(/img/exhibiciones.jpeg)` }}>
                    <div className="textContainer" style={{'background-color': '#401709'}}>
                            <div className="textSegment">
                                <h3 className="titleText"> ¿Quieres ver lo que hay en el museo? </h3>
                                <p className="descriptionText"> Explora las exhibiciones que tenemos disponibles </p>
                            </div> 
                        </div>            
                    </div>
                    <div className="segment" style={{ backgroundImage: `url(/img/museo.jpeg)` }}>
                    <div className="textContainer2" style={{'background-color': '#324D51'}}>
                            <div className="textSegment">
                                <h3 className="titleText"> No hay nada parecido a ver algo en persona </h3>
                                <p className="descriptionText"> Planea tu visita </p>
                            </div> 
                        </div>            
                    </div>
                    <div className="segment" style={{ backgroundImage: `url(/img/tours.jpeg)` }}>
                    <div className="textContainer" style={{'background-color': '#6D2F22'}}>
                            <div className="textSegment">
                                <h3 className="titleText"> ¿No puedes visitar el museo? </h3>
                                <p className="descriptionText"> Visitanos mediante los tours virtuales </p>
                            </div> 
                        </div>            
                    </div>
                </div>
                <div className="covid">
                    <h3>Por el Covid-19</h3>
                    <div className="imgCovid" style={{ backgroundImage: `url(/img/covid.jpeg)` ,backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
                    <span className="descCovid">Por cuestiones de crisis sanitaria es necesaria la compra previa de los tiquetes. Se requiere el uso de mascarilla y la desinfección de las manos previo a entrar al museo. Lamentamos los inconvenientes.</span>

                </div>
            </div>
        )
    }
};

export default HomePage;