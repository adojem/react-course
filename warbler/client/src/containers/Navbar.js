import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import Logo from '../images/warbler-logo.png';

class Navbar extends Component {
   logout = (e) => {
      e.preventDefault();
      this.props.logout();
   };

   render() {
      const { currentUser } = this.props;

      return (
         <nav className="navbar navbar-expand">
            <div className="container-fluid">
               <div className="navbar-header">
                  <Link to="/" className="navbar-brand">
                     <img src={Logo} alt="Warbler Home" />
                  </Link>
               </div>
               {currentUser.isAuthenticated ? (
                  <ul className="nav navbar-nav navbar-light">
                     <li>
                        <Link to={`/users/${currentUser.user.id}/messages/new`}>New Message</Link>
                     </li>
                     <li>
                        <a href="/" onClick={this.logout}>
                           Log out
                        </a>
                     </li>
                  </ul>
               ) : (
                  <ul className="nav navbar-nav navbar-light">
                     <li>
                        <Link to="/signup">Sign up</Link>
                     </li>
                     <li>
                        <Link to="/signin">Log in</Link>
                     </li>
                  </ul>
               )}
            </div>
         </nav>
      );
   }
}

Navbar.propTypes = {
   currentUser: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
   }).isRequired,
   logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
   currentUser: state.currentUser,
});

export default connect(
   mapStateToProps,
   { logout },
)(Navbar);
