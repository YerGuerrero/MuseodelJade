import React from "react";

const containerExhibitions = (props) => {
     

    
    const handleOnClick=()=>{
        document.dispatchEvent(new CustomEvent('Exhibition', {detail: props.exhibition}));
    }

    return (
        <div id ="btnExhibitions" onClick={handleOnClick} className= "" style={{backgroundImage: `url(/img/${props.imageURL})`}}>
            <div className="titleBtnExhibitions">
                <p style={{marginBottom: 0, fontSize: "small"}}>Colección</p>
                <p style={{marginTop: 0, fontWeight: 700}}>{props.title}</p>
            </div>
        </div>
      
    );
};
export default containerExhibitions;