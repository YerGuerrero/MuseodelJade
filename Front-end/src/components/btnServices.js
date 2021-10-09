import React from "react";

const BtnServices = (props) => {
    return (
        <div id={props.id} className={`btnServices ${props.class}`}>
            <i className="fas fa-wheelchair"></i>
            <span className="services-btn-text">{props.title}</span>
        </div>
    );
};
export default BtnServices;
