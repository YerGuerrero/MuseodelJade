import React from "react";

const BtnTour = (props) => {
    return (
        <div id={props.id} className={`btnTour ${props.class}`}>
            <span className="tour-btn-text">{props.title}</span>
        </div>
    );
};
export default BtnTour;
