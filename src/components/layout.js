import React, { Component } from "react";

import Toolbar from '../components/Toolbar';
import SideDrawer from '../components/SideDrawer/Sidedrawer';
import Backdrop from '../components/Backdrop/Backdrop';

class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            sideDrawerOpen: false
          };
    }
       
      drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen};
        } )
      }
    
      backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
      }
render (){
    const { children } = this.props;
    let backdrop;

  if(this.state.sideDrawerOpen) {
    backdrop = <Backdrop click={this.backdropClickHandler}/>;
  };
  return (
    <div>
        <div style={{margin: '0 auto',
        maxWidth: '1200px',
        minHeight: '100%',
        marginTop: '35px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'}}>
            <Toolbar drawerClickHandler = {this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.sideDrawerOpen}/>

        {backdrop}
    
        { children }
        </div>
    </div>
    
    );
}

};

export default Layout;

