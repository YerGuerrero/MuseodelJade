import React from "react";

const containerArtWork = (props) => {
     
    const handleOnClick=()=>{
        document.dispatchEvent(new CustomEvent('ArtWork', {detail: props.artWork}));
    }

    return (
        <div id ="btnExhibitions" onClick={handleOnClick} className= "" style={{ background: "linear-gradient(0deg, rgba(64,41,33,1) 0%, rgba(200,147,116,1) 100%)"}}>
            <img className="imageBtnArtWork" src="/img/armadillo.png" alt="ImagenObra"/>
            <div className="titleBtnArtWork">
                <p style={{marginBottom: 0, fontSize: "small"}}>{`Obra ${props.index +1}`}</p>
                <p style={{marginTop: 0, fontWeight: 700}}>{props.title}</p>
            </div>
        </div>
      
    );
};
export default containerArtWork;