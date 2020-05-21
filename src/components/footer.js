import React from 'react';
import './footer.css'

import {FaPhone, FaEnvelope, FaMapMarked, FaFacebook, FaWhatsapp } from 'react-icons/fa'


export default () => (
    <div className="footer" >
        <ul className="footer__contact">
            <li><FaPhone/> +569 9335 6611</li> 
            <a href="mailto: corredora@gvvpropiedades.com"><li><FaEnvelope /> corredora@gvvpropiedades.com</li></a>
            <li><FaMapMarked /> Lincoyan 435, 2do Piso, Oficina D, Concepción</li>
            <a href="https://www.facebook.com/GVV-Corredora-de-Propiedades-1047142228958759/"><li><FaFacebook /> Encuentranos en Facebook</li></a>
            <a href="https://wa.me/56993356611" className="footer__contact-whastapp"><li><FaWhatsapp /> Contactanos por Whatsapp</li></a>
        </ul>
        
    </div>
       
);