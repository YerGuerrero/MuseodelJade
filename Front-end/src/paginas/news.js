import React, { useEffect,  useState} from "react";



const NewsPage = (props) => {
    
    const [meta, setMeta] = useState({ meta: 'aaa' });
    
    const fetchNews = () => {
    
        fetch('http://localhost:5000/get_news')
          .then(response => response.json())
          .then(result => {
            setMeta({
              meta: result.map(item => ({
                id: item[0],
                title: item[1],
                descripcion: item[2],
                imagenURL: item[3],
              }))
            });
          });
      };
    
    return (
        <div>
            <h1> Noticias</h1>
            <div className="containerNew">
                <h2>Titulo noticia</h2>
                <div className="grid"> {/*Esto se hace en un map por cada una de las noticias que tenga la base*/}
                    <img id="image-noticia-id" src="link" alt="Noticia" />
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum nunc leo, quis malesuada enim luctus sit amet. Fusce in leo sollicitudin, luctus odio efficitur, malesuada lectus. Donec sed consequat mauris, ac ultrices ex. Cras sagittis sem dui, vitae ultrices magna lobortis sed. Proin vulputate egestas nunc, dictum consectetur enim tincidunt id. Quisque convallis metus vitae dapibus faucibus.
                    </span>
                </div>

            </div>
        </div>

    );
};

export default NewsPage;
