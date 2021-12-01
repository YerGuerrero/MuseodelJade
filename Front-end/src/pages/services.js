import React from "react";
import BtnServices from "../components/btnServices";

class ServicesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;
    }

    fetchServices() {
        fetch('http://localhost:5000/get_services')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    data: result.map(item => ({
                        id: item[0],
                        title: item[1],
                        type: item[2],
                        image: item[3],
                    }))
                });
            });
    }

    componentDidMount() {
        this.fetchServices();
    }

    render() {
        return (
            <div className="services">
                <h2 className="titleContainerServices" style={{marginTop: "3em"}}>Instalaciones</h2>
                <div className="containerServices">
                    {this.state !== null ?
                        this.state.data.map((service, index) => {
                            if (service.type === "instalaciones") {
                                return (
                                    <BtnServices key={`Instalacion-${index}`} id={service.id} title={service.title} image={service.image}></BtnServices>
                                );
                            }
                        }) : <div />
                    }
                </div>
                <h2 className="titleContainerServices">Servicios</h2>
                <div className="containerServices">
                    {this.state !== null ?
                        this.state.data.map((service, index) => {
                            if (service.type === "servicios") {
                                return (
                                    <BtnServices key={`Servicio-${index}`} id={service.id} title={service.title} image={service.image}></BtnServices>
                                )
                            }
                        }) : <div />
                    }
                </div>
            </div>
        );
    }
}
export default ServicesPage;