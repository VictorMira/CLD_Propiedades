import React from 'react';
import {Link} from 'gatsby';
import './footer.css'

import Logo from '../assets/img/logo.svg'
import Logo2 from '../assets/img/footer-logo.svg'

import {FaPhone, FaEnvelope, FaMapMarked, FaFacebook, FaWhatsapp } from 'react-icons/fa'


export default () => (
    <div className="footer" >
      <div className="footer-logo">
        <Link to='/' ><img  src={Logo2} style={{ height: '75px', marginBottom: '0px'}} alt="CLD Logo"></img></Link>
      </div>
      <div className="footer-logo-mobil">
        <Link to='/' ><img  src={Logo} style={{ height: '75px', marginBottom: '0px'}} alt="CLD Logo"></img></Link>
      </div>
      <div className="footer-texto">
        <ul className="footer__contact">
            <li><FaPhone/> <span style={{
    color: '#fff'
  }}>+569 8691 1018</span></li> 
            <a href="mailto: carolina@latorredecizer.com"><li><FaEnvelope /> <span style={{
    color: '#fff'
  }}>corredora@latorredecizer.com</span></li></a>
            <li><FaMapMarked /> <span style={{
    color: '#fff'
  }}>Cosme Churruca 135, Concepción</span></li>
            <a href=""><li><FaFacebook /> <span style={{
    color: '#fff'
  }}>Encuentranos en Facebook</span></li></a>
            <a href="https://wa.me/56986911018" className="footer__contact-whastapp"><li><FaWhatsapp /> <span style={{
    color: '#fff'
  }}>Contactanos por Whatsapp</span></li></a>

        </ul>
      </div>
      
    </div>
        
        
  
       
);