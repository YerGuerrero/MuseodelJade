import React from "react";

const BtnTour = (props) => {

    const handleClickTour = () => {
        document.dispatchEvent(new CustomEvent('TourOpen',
            {
                detail: props.tour
            }))
    };

    return (
        <div id={props.id} className='btnTour' style={{ backgroundImage: `url(/img/${props.image})` }} onClick={handleClickTour}>
            <div className="titleBtnTour">
                <p style={{ marginBottom: 8, marginTop: 8, fontWeight: 700, fontSize: "small" }}>{props.title}</p>
            </div>
        </div>
    );
};

export default BtnTour;
