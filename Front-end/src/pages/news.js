import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


class NewsPage extends React.Component {

  constructor(props ){
    super(props);
    this.state=null;
  }
  
  fetchNew() {
    fetch('http://localhost:5000/get_news')
      .then(response => response.json())
      .then(result => {
        this.setState({
          data: result.map(item => ({
            id: item[0],
            title: item[1],
            imagenURL: item[2],
            description: item[3],
          }))
        });
    });
  }

  componentDidMount(){
    this.fetchNew();
    
  }

  render(){
    return (        
        <div>
            <h1 className="titleNews"> Noticias</h1>
            <div className="container">
            {this.state!== null?
              this.state.data.map(news=>{
                console.log(news)
                  return(
                        <div className="containerNew">
                            <h2>{news.title}</h2>
                            <div className="gridNews"> 
                                <img id="image-noticia-id" src= {`/img/${news.imagenURL}`} alt= "Noticia" />
                                <span>{news.description}</span>
                            </div>
                            <button onClick={()=>{document.dispatchEvent(new CustomEvent('modalNewsOpen', { 
                              detail: {title: news.title, text: news.description}}))}}>Ver más <FontAwesomeIcon icon={faArrowRight}/></button>
                        </div>
                        );
                  }):<div/>}
            </div>
        </div>
    );
  }
      

      
};

export default NewsPage;
