import React from "react";
import ContainerArtWork from "../components/containerArtWork";


class ExhibitionPage extends React.Component {
    constructor(props) {
        super(props);
        this.exhibition = null;
        this.state = null;
    }

    get exhibition() {
        return this._exhibition;
    }

    set exhibition(value) {
        this._exhibition = value
    }

    fetchArtWorks() {
        fetch('http://localhost:5000/get_artWorks')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    data: result.map(item => ({
                        id: item[0],
                        title: item[1],
                        description: item[2],
                        imageURL: item[3],
                        idExhibition: item[4],
                    }))
                });
            });
    }

    componentDidMount() {
        this.fetchArtWorks();
    }


    render() {
        this.exhibition = JSON.parse(window.localStorage.getItem("exhibition"));

        return (
            <div>
                <h1 className="titleExhibitions">{this.exhibition.title}</h1>
                <p className="descriptionExhibition">{this.exhibition.description}</p>
                <div id="gridArtWork" className="containerBtnArtWork">
                    {this.state !== null ?
                        this.state.data.map((artWork,index) => {
                            if (artWork.idExhibition === this.exhibition.id) {
                                return (
                                    <ContainerArtWork key={`artWork-${artWork.id}`} imageURL={artWork.imageURL} title={artWork.title} artWork={artWork} index={index} />
                                );
                            }
                        }): <div/>}
                </div>
            </div>
            
        );
    }
};

export default ExhibitionPage;