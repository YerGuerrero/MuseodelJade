import React from "react";
import BtnTour from "../components/btnTour";

class ToursPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = null;
    }

    fetchTour() {
        fetch('http://localhost:5000/get_tours')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    data: result.map(item => ({
                        id: item[0],
                        title: item[1],
                        description: item[2],
                        urltour: item[3],
                        image: item[4],
                    }))
                });
            });
    }

    componentDidMount() {
        this.fetchTour();
    }

    render() {
        return (
            <div>
                <h1 className="titleTours"> Tours Virtuales </h1>
                <div className="gridBtnTours">
                    {this.state !== null ?
                        this.state.data.map(tour => {
                            return (
                                <BtnTour id={tour.id} title={tour.title} description={tour.description} linktour={tour.linktour} image={tour.image} funcion='handleClickTour' tour={tour}></BtnTour>
                            );
                        }) : <div />}
                </div>
            </div>
        );

    }
};

export default ToursPage;