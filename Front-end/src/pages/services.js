import React from "react";
import BtnServices from "../components/btnServices";

const ServicesPage = () => {
    return(
        <div>
            <h1> Instalaciones </h1>
            <div className="grid">
                <BtnServices id="Service1" class="" title="Facilidades de acceso"></BtnServices>
                <BtnServices id="Service2" class="" title="Guardarropa"></BtnServices>
                <BtnServices id="Service3" class="" title="Auditorio"></BtnServices>
            </div>
        </div>
    );
};

export default ServicesPage;