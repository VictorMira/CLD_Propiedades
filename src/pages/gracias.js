import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer'

import Portada from '../pages/Portada.jpg'

import './contacto.css';


import {FaPhone, FaEnvelope, FaMapMarked, FaWhatsapp} from 'react-icons/fa'

export default () => (
    <div>
    <Layout>
        <main className="contacto_main">
       
        <div style={{ color: '#000'}}>
            <div className="contacto_main-cuadro">
                <div className="contacto_main-cuadro-bloque">
                <h1 className="contacto_main-cuadro-bloque-titulo">Contáctenos</h1>
            </div>
            <div className="contacto_main-formulario">
                {/* <p>Contáctenos para solicitar una visita a la propiedad seleccionada</p>
                <p><FaPhone/> +569 8691 1018</p> 
                <a href="mailto: corredora@latorredecizer.com"><p><FaEnvelope /> corredora@latorredecizer.com</p></a>
                <p><FaMapMarked /> Arturo Prat 199, Piso 16, Concepción</p>  */}
                
                <div style={{height: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'}}>
                <h3>Gracias por Contactarnos</h3>
                <p>¡Le responderemos a la brevedad!</p>
                    
                </div>
                    <div >
                        <h3 className="button__whatsapp-titulo">Contáctanos directamente por Whatsapp</h3>
                        <a href="https://wa.me/56986911018" className="button__whatsapp">
                                <span><FaWhatsapp /> Contactanos </span></a>
                    </div>
                
            </div>
        </div>
        </div>
        </main>
    </Layout>
    <Footer />
    </div>
)