import React from "react";
import ContainerExhibitions from "../components/containerExhibitions";


class  AllExhibitionPage extends React.Component {
  constructor(props){
    super(props);
    this.dataExhibitions= null;
  }

  get dataExhibitions(){
    return this._dataExhibitions;
  }

  set dataExhibitions(value){
    this._dataExhibitions= value
  }
  
  render(){
    this.dataExhibitions= JSON.parse(window.localStorage.getItem("detail"));
    
    return (
          <div> 
              <h1 className="titleExhibitions"> {this.dataExhibitions.type ==="permanente"?"Exhibiciones Permantes":"Exhibiciones Temporales"}</h1>
              <div className="container">
                <div id="gridExhibitions" className="containerBtnExhibitions"> 
                {this.dataExhibitions.dataState.data.map((exhibition)=>{
                  if(exhibition.type=== this.dataExhibitions.type) {
                    return(
                      <ContainerExhibitions key={`exhibition-${exhibition.id}`} imageURL={exhibition.imageURL} title={exhibition.title} exhibition={exhibition}/>
                    );
                    }})}
                </div>
              </div>
          </div>
      );
  }
};

export default AllExhibitionPage;


