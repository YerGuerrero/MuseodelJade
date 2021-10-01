import React from "react";



const NewsPage = (props) => {
   
   
    return (
        <div>
            <h1> Noticias</h1>
            <div className="containerNew">
                <h2>Título noticia</h2>
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
