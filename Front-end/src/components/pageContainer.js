import React from "react";
import Footer from "./footer";
import Header from "./header";
import ModalNews from "./modalNews";
import ModalTickets from "./modalTickets";


const PageContainer = (props) => {
    return <div>
        <ModalNews/>
        <ModalTickets/>
        <Header/>
        {props.children}
       <Footer/>
    </div>;
};

export default PageContainer;