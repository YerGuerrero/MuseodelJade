import React from "react";

const BtnServices = (props) => {
    return (
        <div className="btnServices">
            <div className="imageServices"> <img className="imageService" src={`/img/iconos/${props.image}`} alt="ImgServicio"/> </div>
            <div className="servicesTitle"> {props.title} </div>
        </div>
    );
};
export default BtnServices;
