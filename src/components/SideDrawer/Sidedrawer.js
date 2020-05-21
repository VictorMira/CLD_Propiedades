import React from 'react';
import './SideDrawer.css';
import { Link } from 'gatsby';

import Logo from '../../assets/img/logo.svg'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
  if(props.show){
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
        <img src={Logo} alt="GVV Propiedades"/>
        <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/venta'>Venta</Link></li>
            <li><Link to='/arriendo'>Arriendo</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
        </ul>
    </nav>
  )
};

export default sideDrawer;