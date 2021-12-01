import React, { useState , useEffect } from "react";
import emailjs from "emailjs-com";

const TicketsPage =()=> {
    
    const [nameBuyer,setNameBuyer]= useState();
    const [numPhone,setNumPhone]= useState();
    const [email,setEmail]= useState();
    const [visitDate,setVisitDate]= useState();
    const [tickets,setTickets]= useState(0);
    const [total,setTotal]= useState(0);
    const [countAdultNac,setCountAdultNac]= useState(0);
    const [countAdMayNac,setCountAdMayNac]= useState(0);
    const [countEstNac,setCountEstNac]= useState(0);
    const [countNinos,setCountNinos]= useState(0);
    const [countAdExt,setCountAdExt]= useState(0);
    const [countEstExt,setCountEstExt]= useState(0);

    const TICKETS_TYPE={
        "countAdultNac": 3000,
        "countAdMayNac": 0 ,
        "countEstNac": 1200,
        "countNinos": 1200,
        "countAdExt": 9600,
        "countEstExt": 3000
    }
        

    useEffect(()=>{
        const callback = (e) => { 
            const modalCreateEvents= document.getElementById("modalCreateTickets");
            modalCreateEvents.style.visibility="visible";                    
        };       
        document.addEventListener('createModal', callback);
      })

    const postData=()=>{
        const requestOptions = {
            method: 'POST',
            header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/post_createPurchage', 'Accept': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(
              {
                "nombre_comprador": nameBuyer,
                "numero_telefono":numPhone,
                "correo": email,
                "fecha_visita": visitDate,
                "numero_entradas": tickets,
                "total": total,
                "fecha_compra": new Date(),
              }
            )
          };
          fetch('http://localhost:5000/post_createPurchage', requestOptions)
            .then(response => response.json())
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_nhr6pkh', e.target, 'user_vwZ5warDY0jxtHmoCpIVb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        document.dispatchEvent(new CustomEvent('modalTicketsOpen'))
        postData();
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phoneNum').value = '';
        document.getElementById('date').value = '';
        setCountAdExt(0);
        setCountAdMayNac(0);
        setCountEstNac(0);
        setCountNinos(0);
        setCountEstExt(0);
        setCountAdultNac(0);
        setTotal(0);
    };

    
    const increment = (ticktype) => {

        switch(ticktype){
            case "countAdultNac":
                if ((countAdultNac+1) > 15){
                    setCountAdultNac(countAdultNac);
                }else{
                    setCountAdultNac(countAdultNac+1);
                    setTickets(tickets+1);
                    setTotal(total+TICKETS_TYPE["countAdultNac"])
                }
                break;
            case "countAdMayNac":
                if (countAdMayNac+1 > 15){
                    setCountAdMayNac(countAdMayNac);
                }else{
                    setCountAdMayNac(countAdMayNac+1);
                    setTickets(tickets+1);
                    setTotal(total+TICKETS_TYPE["countAdMayNac"])
                }
                break;
            case "countEstNac":
                if (countEstNac+1 > 15){
                    setCountEstNac(countEstNac);
                }else{
                    setCountEstNac(countEstNac+1);
                    setTickets(tickets+1);
                    setTotal(total+TICKETS_TYPE["countEstNac"])
                }
                break;
            case "countNinos":
                if (countNinos+1 > 15){
                    setCountNinos(countNinos);
                }else{
                    setCountNinos(countNinos+1);
                    setTickets(tickets+1);
                    setTotal(total+TICKETS_TYPE["countNinos"])
                }
                break;
            case "countAdExt":
                if (countAdExt+1 > 15){
                    setCountAdExt(countAdExt);
                }else{
                    setCountAdExt(countAdExt+1);
                    setTickets(tickets+1);
                    setTotal(total+TICKETS_TYPE["countAdExt"])
                }
                break;
            case "countEstExt":
                if (countEstExt+1 > 15){
                    setCountEstExt(countEstExt);
                }else{
                    setCountEstExt(countEstExt+1);
                    setTickets(tickets+1);
                    setTotal(total+TICKETS_TYPE["countEstExt"])
                }
                break;
            default:
                break;
        }
    }

    const decrement = (ticktype) => {

        switch(ticktype){
            case "countAdultNac":
                if ((countAdultNac-1) < 0){
                    setCountAdultNac(0);
                }else{
                    setCountAdultNac(countAdultNac-1);
                    setTickets(tickets-1);
                    setTotal(total-TICKETS_TYPE["countAdultNac"])
                }
                break;
            case "countAdMayNac":
                if (countAdMayNac-1 < 0){
                    setCountAdMayNac(0);
                }else{
                    setCountAdMayNac(countAdMayNac-1);
                    setTickets(tickets-1);
                    setTotal(total-TICKETS_TYPE["countAdMayNac"])
                }
                break;
            case "countEstNac":
                if (countEstNac-1 < 0){
                    setCountEstNac(0);
                }else{
                    setCountEstNac(countEstNac-1);
                    setTickets(tickets-1);
                    setTotal(total-TICKETS_TYPE["countEstNac"])
                }
                break;
            case "countNinos":
                if (countNinos-1 < 0){
                    setCountNinos(0);
                }else{
                    setCountNinos(countNinos-1);
                    setTickets(tickets-1);
                    setTotal(total-TICKETS_TYPE["countNinos"])
                }
                break;
            case "countAdExt":
                if (countAdExt-1 < 0){
                    setCountAdExt(0);
                }else{
                    setCountAdExt(countAdExt-1);
                    setTickets(tickets-1);
                    setTotal(total-TICKETS_TYPE["countAdExt"])
                }
                break;
            case "countEstExt":
                if (countEstExt-1 < 0){
                    setCountEstExt(0);
                }else{
                    setCountEstExt(countEstExt-1);
                    setTickets(tickets-1);
                    setTotal(total-TICKETS_TYPE["countEstExt"])
                }
                break;
            default:
                break;
        }
    }
  
    return (
        <div>
            <h1 className="titleNews"> Tiquetes</h1>        
            <form onSubmit={sendEmail}>
                <div className="DataContainer">
                    <div className="titleDataContainer">
                        <span>Adultos Nacionales ₡3000</span>
                        <span>Adultos Mayores Nacionales ₡0</span>
                        <span>Estudiantes Nacionales ₡1200</span>
                        <span>Niños (De 6 a 12 años) ₡1200</span>
                        <span>Adulto Extranjero ₡9600 </span>
                        <span>Estudiante Extranjero ₡3000</span>
                    </div>

                    <div className="dataTicketsContainer">
                        <div className="dataTickets">
                            <button className="minus" onClick={() => {decrement("countAdultNac")}}>-</button>
                            <input type="text" name="countAdultNac" value={countAdultNac} min="0" max="15"></input>
                            <button className="plus" onClick={() => {increment("countAdultNac")}} >+</button>
                        </div>

                        <div className="dataTickets">
                            <button className="minus" onClick={() => decrement("countAdMayNac")}>-</button>
                            <input type="text" name="countAdMayNac" value={countAdMayNac} min="0" max="15"></input>
                            <button className="plus" onClick={() => increment("countAdMayNac")} >+</button>
                        </div>

                        <div className="dataTickets">
                            <button className="minus" onClick={() => decrement("countEstNac")}>-</button>
                            <input type="text" name="countEstNac" value={countEstNac} min="0" max="15"></input>
                            <button className="plus" onClick={() => increment("countEstNac")} >+</button>
                        </div>

                        <div className="dataTickets">
                            <button className="minus" onClick={() => decrement("countNinos")}>-</button>
                            <input type="text" name="countNinos" value={countNinos} min="0" max="15"></input>
                            <button className="plus" onClick={() => increment("countNinos")} >+</button>
                        </div>

                        <div className="dataTickets">
                            <button className="minus" onClick={() => decrement("countAdExt")}>-</button>
                            <input type="text" name="countAdExt" value={countAdExt} min="0" max="15"></input>
                            <button className="plus" onClick={() => increment("countAdExt")} >+</button>
                        </div>

                        <div className="dataTickets">
                            <button className="minus" onClick={() => decrement("countEstExt")}>-</button>
                            <input type="text" name="countEstExt" value={countEstExt} min="0" max="15"></input>
                            <button className="plus" onClick={() => increment("countEstExt")} >+</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="totalStyle">Total a pagar:</h2>
                    <input className="totalInput" type="text" id="total" name="total" value={total} min="0" max="15"></input>
                </div>
                <div className="userInfo">
                    <h2>Datos del comprador</h2>
                    <input type="text" placeholder="Nombre Completo" id="name" name="name" required onInput={(e) => {setNameBuyer(e.target.value)}}></input>
                    <input type="text" placeholder="Correo electrónico" id="email" name="email" required onInput={(e) => {setEmail(e.target.value)}}></input>
                    <input type="number" placeholder="Número celular" id="phoneNum" name="phoneNum" minLength="6" required onInput={(e) => {setNumPhone(e.target.value)}}></input>
                    <input type="text" placeholder="Fecha de visita. 01/01/2021" maxLength="10" name="date" id="date" required onInput={(e) => {setVisitDate(e.target.value)}}></input>
                    
                </div>
                <input type="submit" value="Comprar"></input>
            </form>
        </div>
    );    
};

export default TicketsPage;