import React from 'react';
import {  graphql } from 'gatsby';
import Layout from '../components/layout';
import Footer from '../components/footer';

import './ficha-propiedad.css';


import Img from 'gatsby-image';

import {FaBed, FaShower, FaWarehouse, FaRulerCombined, FaWhatsapp } from 'react-icons/fa';

export default ({ data }) => {
    const propiedad = data.markdownRemark;
    
    return (
        <div>
        <Layout>
            <main className="main">
            <div className="main__container">
                <div className="main__container-header">
                <h1 className="main__container-header-titulo">FICHA DE PROPIEDAD</h1>
                </div>
                <h2 className="main__container-titulo">{propiedad.frontmatter.title}</h2>
                <h3 className="main__container-subtitulo">Propiedad en {propiedad.frontmatter.tipo}</h3>
                <div className="main__container-ficha">
                    <div className="main__container-ficha-fondo">
                        <div className="main__container-ficha-fondo-fotos">
                            <div className="main__container-ficha-fondo-fotos-foto">
                                <Img fluid={propiedad.frontmatter.album_image1.childImageSharp.fluid}/></div>
                            <div className="main__container-ficha-fondo-fotos-foto">
                                <Img fluid={propiedad.frontmatter.album_image2.childImageSharp.fluid}/></div>
                            <div className="main__container-ficha-fondo-fotos-foto">
                                <Img fluid={propiedad.frontmatter.album_image3.childImageSharp.fluid}/></div>
                            <div className="main__container-ficha-fondo-fotos-foto">
                                <Img fluid={propiedad.frontmatter.album_image4.childImageSharp.fluid}/></div>
                            <div className="main__container-ficha-fondo-fotos-foto">
                                <Img fluid={propiedad.frontmatter.album_image5.childImageSharp.fluid}/></div>
                            <div className="main__container-ficha-fondo-fotos-foto">
                                <Img fluid={propiedad.frontmatter.album_image6.childImageSharp.fluid}/></div>
                            <div className="main__container-ficha-fondo-fotos-foto">
                                <Img fluid={propiedad.frontmatter.album_image7.childImageSharp.fluid}/></div>
                            <div className="main__container-ficha-fondo-fotos-foto">
                                <Img fluid={propiedad.frontmatter.album_image8.childImageSharp.fluid}/></div>
                            <div className="main__container-ficha-fondo-fotos-foto">
                                <Img fluid={propiedad.frontmatter.album_image9.childImageSharp.fluid}/></div>
                        </div>   
                        
                                <h2 className="main__container-ficha-titulo">Descripción de la Propiedad</h2>
                                <div className="main__container-ficha-texto" dangerouslySetInnerHTML={{ __html: propiedad.html}}/>                   
                                <h2 className="main__container-ficha-titulo">Caracteristicas de la Propiedad</h2>
                            <div className="main__container-ficha-caracteristicas">
                                <p>Habitaciones <FaBed/> {propiedad.frontmatter.dormitorios_c}</p>
                                <p>Baños <FaShower /> {propiedad.frontmatter.bano_c}</p>
                                <p>Estacionamiento <FaWarehouse/> {propiedad.frontmatter.estacionamiento}</p>
                                <p>Superficie <FaRulerCombined /> {propiedad.frontmatter.area_u}</p>
                                <p>Gasto Común: {propiedad.frontmatter.gastocomun}</p>
                            </div>
                            <div className="precio__container">
                                <h3 className="main__container-subtitulo">Precio de {propiedad.frontmatter.tipo}</h3>
                                <h1 className="precio-operacion">{propiedad.frontmatter.precio}</h1>

                            </div>
                                          

                    </div>
                </div>
                <a href="mailto:corredora@gvvpropiedades.com" className="button"><span>Contactanos </span></a>
                <a href="https://wa.me/56993356611" className="button__whatsapp">
                                <span><FaWhatsapp /> Contactanos </span></a>
            </div>
            </main>
            </Layout>
            <Footer />
        </div>
        
    )
}

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug }} ){
            html
            frontmatter{
                title
                tipo
                dormitorios_c
                bano_c
                gastocomun
                estacionamiento
                area_u
                precio
                album_image1 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image2 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image3 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image4 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image5 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image6 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image7 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image8 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image9 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image10 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }

            }
        }
    }
`