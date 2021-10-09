import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalNews = (props) => {
    const initialValue =
    { title: "",text: ""};
    const [modalData, setModalData] = useState(initialValue); 

    function close() {
        const modalNews= document.getElementById("modalNews");
        modalNews.style.visibility="hidden";
    };

    useEffect(()=>{
        const callback = (e) => { 
            const modalNews= document.getElementById("modalNews");
            modalNews.style.visibility="visible";                
            setModalData(e.detail);    
        };       
        document.addEventListener('modalNewsOpen', callback);
    })

    return (
        <div id="modalNews" className="modalNews">
            <button id ="btnClose" onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
            <div id= "text" >
                <h1>{modalData.title}</h1>
                <div style={{width: "100%", overflowY: "auto"}}>
                    <p>{modalData.text}</p>
                </div>
            </div> 
        </div>
    );
};

export default ModalNews;