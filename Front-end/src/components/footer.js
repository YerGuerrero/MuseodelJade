import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function Footer(){ 
    return( 
        <div id="footer-container"> 
            <div className= "footer">
                <section style={{width: "30%"}}> 
                    <h2>Sobre Nosotros</h2>
                    <p className="line">________________________</p> 
                    <p className="text" style={{marginLeft:"10%",width:"80%"}}> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                    Phasellus at tristique elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;  
                    Quisque congue sem magna, quis tincidunt lorem gravida non. Mauris maximus consectetur varius.  
                    Ut enim erat, tincidunt sit amet ultrices in, egestas eu urna.  
                    </p> 
                </section> 
    
                <section style={{width: "17%"}}> 
                    <h2>Dirección</h2> 
                    <p className="line">________________</p> 
                    <div className="text">
                        <FontAwesomeIcon icon={faPhoneAlt}/>
                        <p style={{marginTop: "-1.5em", marginLeft: "2em"}}> +(506) 2521-6610 </p>    
                    </div>
                    <div style={{marginTop: "1.5em"}}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <p style={{marginTop: "-1.5em", marginLeft: "2em"}}> museodeljade@ins-cr.com </p>     
                    </div>
                    <div style={{marginTop: "1.5em"}}>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                        <p style={{marginTop: "-1.5em", marginLeft: "2em"}}> Costado Oeste de la Plaza de la Democracia, sobre Avenida Central, Calle 13 y 13 bis </p>    
                    </div>
                    
                    
                </section> 
    
                <section style={{width: "30%"}}> 
                    <h2>Horarios</h2> 
                    <p className="line">_______________</p> 
                    <p className="text" style={{textAlignLast: 'center'}}>Lunes a Domingo de 9 a.m. a 5 p.m.</p> 
                </section> 
            </div>
            <div style={{display: "inline-flex", marginTop: "3em"}}>
                <p className="copyright">Copyright ® Museo del Jade 2021 - All rights reserved</p>
                <div className="socialIcons">
                    <a href="https://tecdigital.tec.ac.cr/register/?return%5furl=%2fdotlrn%2findex#/" rel = "noreferrer" target= "_blank" > <img id="facebook" src="/img/facebook.png" alt= "Facebook"/></a>
                    <a href="https://tecdigital.tec.ac.cr/register/?return%5furl=%2fdotlrn%2findex#/" rel = "noreferrer" target= "_blank"> <img id="instagram" src="/img/instagram.png" alt= "Instagram"/></a>
                    <a href="https://tecdigital.tec.ac.cr/register/?return%5furl=%2fdotlrn%2findex#/" rel = "noreferrer" target= "_blank"> <img id="twitter" src="/img/twitter.png" alt= "Twitter"/></a>
                    <a href="https://tecdigital.tec.ac.cr/register/?return%5furl=%2fdotlrn%2findex#/" rel = "noreferrer" target= "_blank"> <img id="youtube" src="/img/youtube.png" alt= "Youtube"/></a>
                </div>
                <a href="https://www.ins-cr.com/" rel = "noreferrer" target= "_blank" > <img className= "insImage" id="ins" src="/img/logo-color.jpg" alt= "INS"/></a>
            </div>
        </div> 
    ) 
} 
 
export default Footer