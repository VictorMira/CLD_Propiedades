import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer'

import Portada from '../pages/Portada.jpg'

import './contacto.css';


import {FaPhone, FaEnvelope, FaMapMarked, FaWhatsapp} from 'react-icons/fa'

export default () => (
    <div>
    <Layout>
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="text" name="phone" />
      <input type="email" name="email" />
      <textarea name="message"></textarea>
    </form>

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
                
                <div className="formulario">
                <h3>Formulario de Contacto</h3>
                <p>Enviénos sus datos para solicitar una visita a la propiedad seleccionada</p>
                    <form className="contacto_main-formulario-bloque" name="contact" method="POST">
                        <input type="hidden" name="form-name" value="contact" />
                            <p>
                                <label>Nombre Completo: <input className="contacto_main-formulario-cuadro" type="text" name="name" placeholder="Ingrese Nombre y Apellido"/></label>
                            </p>
                            <p>
                                <label>Teléfono de Contato: <input className="contacto_main-formulario-cuadro" type="text" name="phone" placeholder="Ingrese su Teléfono de Contacto"/></label>
                            </p>
                            <p>
                                <label>Correo Electrónico: <input className="contacto_main-formulario-cuadro" type="email" name="email" placeholder="Ingrese su Dirección de Correo"/></label>
                            </p>
                            <p>
                                <label>Texto de Solicitud: <textarea className="contacto_main-formulario-cuadro-texto" name="message" placeholder="Dejenos su Mensaje"></textarea></label>
                            </p>
                            
                                <button  className="button__mail" type="submit"><span>Enviar</span></button>
                            
                    </form>
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