import React from "react";


class TourPage extends React.Component {

    constructor(props) {
        super(props);
        this.tour = null;
    }

    get tour() {
        return this._tour;
    }

    set tour(value) {
        this._tour = value;
    }

    render() {
        this.tour = JSON.parse(window.localStorage.getItem("tour"));

        return (
            <div>
                <div className='containerImgTour'>
                    <img className="imageTour" alt="imageTour" src={`/img/${this.tour.image}`}></img>
                </div>
                <div className="tourContainer">
                    <h1 className="tourTitle"> {this.tour.title} </h1>
                    <span className='tourDesc'> {this.tour.description} </span>
                </div>
                <button className='btnTourUrl' onClick={() => { window.open(`${this.tour.urltour}`, '_blank') }}>Ir al tour</button>
            </div>
        )
    }
};

export default TourPage;