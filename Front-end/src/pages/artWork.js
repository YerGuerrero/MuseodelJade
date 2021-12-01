import React from "react";

class ArtWorkPage extends React.Component {
    constructor(props) {
        super(props);
        this.artWork = null;
        this.state = null;
    }

    get artWork() {
        return this._artWork;
    }

    set artWork(value) {
        this._artWork = value
    }


    render() {
        this.artWork = JSON.parse(window.localStorage.getItem("artWork"));
        return (
            <div>
                <div className='containerImgArtWork'>
                    <img className="imageArtWork" src={`/img/${this.artWork.imageURL} `}  alt="ImagenObra"/>
                </div>
                <div className= "ArtWorkContainer">
                    <h1 className="ArtWorkTitle">{this.artWork.title}</h1>
                    <p className='ArtWorkDesc'>{this.artWork.description}</p>    
                </div>
            </div>
        );
    }
};

export default ArtWorkPage;