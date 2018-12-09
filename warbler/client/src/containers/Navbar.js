import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from '../images/warbler-logo.png';

class Navbar extends Component {
   state = {};

   render() {
      return (
         <nav className="navbar navbar-expand">
            <div className="container-fluid">
               <div navbar-header>
                  <Link to="/" className="navbar-brand">
                     <img src={Logo} alt="Warbler Home" />
                  </Link>
               </div>

               <ul className="nav navbar-nav navbar-light">
                  <li>
                     <Link to="/signup">Sign up</Link>
                  </li>
                  <li>
                     <Link to="/signin">Log in</Link>
                  </li>
               </ul>
            </div>
         </nav>
      );
   }
}

const mapStateToProps = state => ({
   currentUser: state.currentUser,
});

const mapDispatchToProps = {};

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(Navbar);
