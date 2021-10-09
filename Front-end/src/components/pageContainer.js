import React from "react";
import Footer from "./footer";
import Header from "./header";
import ModalNews from "./modalNews";


const PageContainer = (props) => {
    return <div>
        <ModalNews/>
        <Header/>
        {props.children}
       <Footer/>
    </div>;
};

export default PageContainer;