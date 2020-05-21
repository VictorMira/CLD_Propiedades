import React from 'react';
import { Link, graphql } from 'gatsby';
import Footer from '../components/footer';
import Layout from '../components/layout';

import Img from 'gatsby-image'

import './venta.css'

import { FaBed, FaShower, FaRulerCombined} from 'react-icons/fa'


export default ({data}) => {
    console.log(data)
    return (
        <div>
        <Layout>
        <main className="main-venta">
            <div>

            <div className="main-venta-portada">
            <h1 
                className="main-venta-titulo">Propiedades en Venta</h1>
            </div>
            
                <h4
                className="buscar-titulo">{data.allMarkdownRemark.totalCount} Propiedades Publicadas</h4>
                <div className="buscar-fichas">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Link key={node.id} to={node.fields.slug} className="buscar-fichas-link">
                        <div  className="buscar-fichas-ficha">
                        <Img fluid={node.frontmatter.album_image1.childImageSharp.fluid}/>
                            <h3>
                                {node.frontmatter.title}{" "}
                                <span>
                                </span>
                            </h3>
                            <p>{node.excerpt}</p>
                            <ul className="buscar-fichas-ficha-lista">
                                    <li>Habitaciones <FaBed/> {node.frontmatter.dormitorios_c}</li>
                                    <li>Baños <FaShower />{node.frontmatter.bano_c}</li>
                                    <li>Superficie <FaRulerCombined /> {node.frontmatter.area_u}</li>
                                </ul>
                                <p className="buscar-fichas-ficha-tipo" >{node.frontmatter.tipo}</p>
                                <h3 className="buscar-fichas-ficha-precio">{node.frontmatter.precio}</h3>
                        </div>
                    </Link>
                ))}
                
                </div>
            </div>
            </main>
        </Layout>
        <Footer />
    </div>
)};

export const query = graphql`
    query {
        allMarkdownRemark(filter:{frontmatter: {tipo: {eq: "venta"}} },
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