import React from "react";
import Layout from '../components/layout'

import { Link, graphql } from 'gatsby';

import Img from 'gatsby-image';

//import SideDrawer from '../components/SideDrawer/Sidedrawer';
//import Backdrop from '../components/Backdrop/Backdrop';
import Footer from '../components/footer'; 



import './index.css'
import '../assets/fonts/fonts.css'

import {FaWhatsapp, FaBed, FaShower, FaRulerCombined, FaHandshake, FaClipboardCheck, FaCameraRetro, FaTasks} from 'react-icons/fa'


export default ({data}) => (
  <div>
    <Layout >
        
        <main className="main">
            <div className="main__portada">
                <h1 className="main__portada-titulo" style ={{fontFamily: 'Candara'}}>Busca tu Propiedad</h1>
                <div className="main__portada-modal">
                <p >En CLD Gestión Inmobiliaria, trabajamos con y para las personas, la meta final es convertir esas casas y departamentos en cálidos hogares 
y para eso el principal pilar es comenzar con un trato amable, abierto y mucha confianza.</p>
                <p>Contáctanos para guiarte, apoyarte y asesorarte en el mundo inmobiliario.</p>
                
                </div>
            </div>
            <div style={{
    background: '#646E78'
  }}>
    <h1 className="destacadas-titulo" style ={{fontFamily: 'Candara'}}>Propiedades Destacadas</h1>
    <hr />
    <div className="destacadas-fichas">
    {data.allMarkdownRemark.edges.map(({ node }) => (
          

              <Link key={node.id} to={node.fields.slug} className="destacadas-fichas-link">
                  <div className="destacadas-fichas-ficha">
                  <Img fluid={node.frontmatter.album_image1.childImageSharp.fluid}/>
                      <h3 className="destacadas-fichas-ficha-titulo" style ={{fontFamily: 'Candara'}}>
                          {node.frontmatter.title}{" "}
                          <span>
                          
                          </span>
                      </h3>
                      <p className="destacadas-fichas-ficha-texto">{node.excerpt}</p>
                      <ul className="destacadas-fichas-ficha-lista">
                          <li className="destacadas-ficha-caracteristicas-texto"> <FaBed className="destacadas-ficha-caracteristicas-icono"/> Habitaciones: {node.frontmatter.dormitorios_c}</li>
                          <li className="destacadas-ficha-caracteristicas-texto"><FaShower className="destacadas-ficha-caracteristicas-icono"/>Baños: {node.frontmatter.bano_c}</li>
                          <li className="destacadas-ficha-caracteristicas-texto"><FaRulerCombined className="destacadas-ficha-caracteristicas-icono"/>Superficie:  {node.frontmatter.area_u}</li>
                      </ul>
                      <p className="destacadas-fichas-ficha-tipo" >{node.frontmatter.tipo}</p>
                      <h3 className="destacadas-fichas-ficha-precio">{node.frontmatter.precio}</h3>
                  </div>
              </Link>
              
          ))}
          </div>
  </div>
               
            <div className="pasos__principal">
                <h1
                className="main__portada-titulo" style ={{fontFamily: 'Candara'}}>¿Quieres vender o arrendar tu propiedad?</h1>
                <h2 className="pasos__principal-subtitulo" style ={{fontFamily: 'Candara'}}>¡Contáctanos! </h2>
                <div className="pasos__principal-cuadro">
                    <div className="pasos__principal-cuadro-unidad ">
                    <h3><span style={{ color: '#F7934C'}}>1.</span> Reunión de Coordinación</h3>
                    <div className="pasos__principal-cuadro-unidad-bloque">
                        <FaHandshake className="pasos__principal-cuadro-unidad-icono"/>
                        <p className="pasos__principal-cuadro-unidad-texto">Agendaremos una reunión para presentarte nuestra metodología de trabajo y además para conocer tu propiedad.</p>
                    </div>
                    
                    <h3><span style={{ color: '#F7934C'}}>2.</span> Propuesta Comercial</h3>
                    <div className="pasos__principal-cuadro-unidad-bloque">
                        <FaClipboardCheck className="pasos__principal-cuadro-unidad-icono"/>
                        <p className="pasos__principal-cuadro-unidad-texto"> Basadonos en las características de tu propiedad y en la investigación de precios publicados en el barrio, procederemos a proponerte un precio de compra/venta o arriendo.</p>
                    </div>
                    
                    </div>
            <div className="pasos__principal-cuadro-unidad ">
                    <h3><span style={{ color: '#F7934C'}}>3.</span> Fotografías de la Propiedad</h3>
                    <div className="pasos__principal-cuadro-unidad-bloque">
                        <FaCameraRetro className="pasos__principal-cuadro-unidad-icono"/>
                        <p className="pasos__principal-cuadro-unidad-texto">Nos encargaremos de fotografiar tu propiedad para entregar al potencial comprador/arrendatario una clara idea de las características y ubicación de la propiedad.</p>

                    </div>
                    <h3><span style={{ color: '#F7934C'}}>4.</span> Publicación</h3>
                    <div className="pasos__principal-cuadro-unidad-bloque">
                        <FaTasks className="pasos__principal-cuadro-unidad-icono"/>
                        <p className="pasos__principal-cuadro-unidad-texto"> Publicaremos tu propiedad en nuestro sitio web y en las plataformas digitales más importantes del país, para darte la mayor exposición posible y maximizar las oportunidades de ser visto.</p>

                    </div>
            </div>
                    <a href="/contacto" className="button__mail">
                                <span>Contactanos </span></a>
                    <a href="https://wa.me/56986911018" className="button__whatsapp">
                                <span><FaWhatsapp /> Contactanos </span></a>
                </div>
            </div> 
        </main>
    </Layout>
<Footer/>
</div>                            
);


export const query = graphql`
    query {
        allMarkdownRemark(filter:{frontmatter: {destacada: {eq: "si"}} },
        sort:{fields: [frontmatter___date], order: DESC}){
            totalCount
            edges {
                node{
                    id
                    frontmatter{
                        title
                        precio
                        tipo
                        bano_c
                        dormitorios_c
                        area_u
                        album_image1 {
                            childImageSharp{
                                 fluid(maxWidth: 900){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
    `