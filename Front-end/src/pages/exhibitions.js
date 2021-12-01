import React from "react";
import ContainerExhibitions from "../components/containerExhibitions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

class ExhibitionsPage extends React.Component {

  constructor(props ){
    super(props);
    this.state=null;
  }
  
  fetchExhibitions() {
    fetch('http://localhost:5000/get_exhibitions')
      .then(response => response.json())
      .then(result => {
        this.setState({
          data: result.map(item => ({
            id: item[0],
            title: item[1],
            description: item[2],
            imageURL: item[3],
            type: item[4],
          }))
        });
    });
  }

  componentDidMount(){
    this.fetchExhibitions();
  }

  render(){
    return (        
        <div>
            <h1 className="titleExhibitions"> Exhibiciones</h1>
            <h2 className="titleContainerExhibitions"> Permanentes</h2>
            <div className="containerExhibitions">
              <div className="containerBtnExhibitions">
              {this.state!== null?
                this.state.data.map((exhibition, index)=>{
                  if(index<=5 && exhibition.type=== "permanente"){
                      return(
                        <ContainerExhibitions key={`exhibitionPerm-${index}`} imageURL={exhibition.imageURL} title={exhibition.title} exhibition={exhibition}/>
                      );
                    }
                  }):<div/>
                }
              </div>
              
            {window.localStorage.getItem("indexTemp")>5?<button className="btnExhibitionsSeeMore" onClick={()=>{document.dispatchEvent(new CustomEvent('ExhibitionPage', {detail: {type: "permanente", dataState: this.state}}))}}>Ver más <FontAwesomeIcon icon={faArrowRight}/></button>:<div/>}
            </div>
            
            <h2 className="titleContainerExhibitions" style={{marginTop: "3em"}}> Temporales</h2>
            <div className="containerExhibitions">
              <div className="containerBtnExhibitions">
              {this.state!== null?
                this.state.data.map((exhibition, index)=>{
                  window.localStorage.setItem("indexTemp",index);  
                  if(index<=5 && exhibition.type=== "temporal"){
                      return(
                        <ContainerExhibitions key={`exhibitionTemp-${index}`} imageURL={exhibition.imageURL} title={exhibition.title} exhibition={exhibition}/>
                      );
                      
                    }
                  }):<div/>
                }
              </div>
              {window.localStorage.getItem("indexTemp")>5?<button className="btnExhibitionsSeeMore" onClick={()=>{document.dispatchEvent(new CustomEvent('ExhibitionPage', {detail: {type: "temporal", dataState: this.state}}))}}>Ver más <FontAwesomeIcon icon={faArrowRight}/></button>:<div/>}
            </div>
            
        </div>
    );
  }
      

      
};

export default ExhibitionsPage;