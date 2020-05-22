import React from 'react';
import './footer.css'

import {FaPhone, FaEnvelope, FaMapMarked, FaFacebook, FaWhatsapp } from 'react-icons/fa'


export default () => (
    <div className="footer" >
        <ul className="footer__contact">
            <li><FaPhone/> <span style={{
    color: '#fff'
  }}>+569 8691 1018</span></li> 
            <a href="mailto: corredora@latorredecizer.com"><li><FaEnvelope /> <span style={{
    color: '#fff'
  }}>corredora@latorredecizer.com</span></li></a>
            <li><FaMapMarked /> <span style={{
    color: '#fff'
  }}>Arturo Prat 199, Piso 16, Concepción</span></li>
            <a href=""><li><FaFacebook /> <span style={{
    color: '#fff'
  }}>Encuentranos en Facebook</span></li></a>
            <a href="https://wa.me/56986911018" className="footer__contact-whastapp"><li><FaWhatsapp /> <span style={{
    color: '#fff'
  }}>Contactanos por Whatsapp</span></li></a>
        </ul>
        
    </div>
       
);