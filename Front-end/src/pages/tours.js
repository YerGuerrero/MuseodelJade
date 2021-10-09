import React from "react";
import BtnTour from "../components/btnTour";


const ToursPage = () => {
    /*const handleClickTour1 = () => {
        document.dispatchEvent(new CustomEvent('TourOpen', 
        {detail: {
            title: tour.title,
            image: tour.image, 
            description: tour.description,
            link: tour.link
        }}))
    };*/
    
    return(
        <div>
            <h1> Tours Virtuales </h1>
            <div className="grid">
                <BtnTour id="Tour1" class="" title="Naturaleza y ritualidad" ></BtnTour>
            </div>
        </div>
    );
};

export default ToursPage;