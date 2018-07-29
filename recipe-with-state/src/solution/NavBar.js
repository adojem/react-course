import React, { Component } from 'react';
import './NavBar.css';

class Navbar extends Component {
   static propTypes = {

   };

   render() {
      const navMenus = this.props.menus.map((menu, index) => (
         <li key={index}>{menu}</li>
      ));
      
      return (
         <div className="NavBar">
            <h1 className="nav-title">{this.props.title}</h1>
            <ul className="nav-menu">
               {navMenus}
            </ul>
         </div>
      );
   }
}

export default Navbar;
