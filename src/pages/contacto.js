import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer'

import Portada from '../pages/Portada.jpg'


import {FaPhone, FaEnvelope, FaMapMarked } from 'react-icons/fa'

export default () => (
    <div>
    <Layout>
        <main style={{margin: '20px auto', 
                            marginBottom: '250px',
                            width: '100%', 
                            minHeight: '100vh', 
                            overflow: 'hidden', 
                            position: 'relative',
                            display: 'block' }}>
       
        <div style={{ color: '#000'}}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgb(196, 196, 196)'}}>
                <div style={{
                display: 'flex',
                width: '100%',
                height: '600px',
                background: 'grey', 
                backgroundImage: `url(${Portada})`,
                backgroundSize: '100% 100%' ,
                backgroundRepeat: 'no-repeat',
                alignItems: 'center',
                justifyContent: 'center'

                }}>
                <h1 style={{
                        display: 'flex',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: '36px',
                        lineHeight: '42px',
                        textIndent: '10px',
                        color: '#FFFFFF',
                        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
                        padding: '20px',
                        justifyContent: 'center'
                }}>Contáctenos</h1>
            </div>
            <div style={{
                        display: 'inline-block',
                        width: '90%',
                        height: '400px',
                        padding: '50px',
                         margin: '50px',
                         borderRadius:' 5px',
                         boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px',
                         background: 'rgb(255, 255, 255)'}}>
            <p>Contáctenos para solicitar una visita a la propiedad seleccionada</p>

            <p><FaPhone/>+569 9335 6611</p> 
            <a href="mailto: corredora@gvvpropiedades.com"><p><FaEnvelope />corredora@gvvpropiedades.com</p></a>
            <p><FaMapMarked />Lincoyan 435, 2do Piso, Oficina D, Concepción</p> 
            </div>
        </div>
        </div>
        </main>
    </Layout>
    <Footer />
    </div>
)