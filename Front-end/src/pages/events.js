import React from "react";



class EventsPage extends React.Component {

  constructor(props ){
    super(props);
    this.state=null;
  }
  
  fetchEvent() {
    fetch('http://localhost:5000/get_events')
      .then(response => response.json())
      .then(result => {
        this.setState({
          data: result.map(item => ({
            id: item[0],
            title: item[1],
            description: item[2],
            date: item[3],
            hour: item[4],
            imageURL: item[5],
           
          }))
        });
    });
  }

  componentDidMount(){
    this.fetchEvent();
    
  }
  

  render(){
    return (   
      <div>
        <h1 className="titleEvents"> Eventos</h1>
        <div className="container">
          {this.state!== null?
          this.state.data.map(events=>{
            return(
              <div className="containerEvent">
                <h2>{events.title}</h2>
                <div className="info">
                  <img style={{height: "fit-content",width: "7em"}}id="image-evento-id" src= {`/img/${events.imageURL}`} alt= "Evento" />
                  <div className="gridSubtitle"> 
                      <span className="subtitle">Fecha:</span>
                      <span className="subtitle">Hora:</span>
                      <span className="subtitle">Descripción:</span>
                  </div>
                  <div className="gridEvents"> 
                      <span style={{marginBottom: "1em"}}>{events.date==null?"Sin fecha":events.date}</span>
                      <span style={{marginBottom: "1em"}}>{events.hour==null?"Sin hora": events.hour}</span>
                      <span style={{marginBottom: "1em"}}>{events.description==null?"Sin descripción": events.description}</span>
                  </div>
                </div>
              </div>
            );
          }):<div/>}
        </div>
      </div>
    );
  }
      

      
};

export default EventsPage;
