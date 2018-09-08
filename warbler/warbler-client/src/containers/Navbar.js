import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import Logo from '../images/warbler-logo.png';

const Navbar = (props) => {
   const logout = (e) => {
      e.preventDefault();
      props.logout();
   };

   return (
      <nav className="navbar navbar-expand">
         <div className="container-fluid">
            <div className="navbar-header">
               <Link to="/" className="navbar-brand">
                  <img src={Logo} alt="Warbler Home" />
               </Link>
            </div>
            {props.currentUser.isAuthenticated ? (
               <ul className="nav navbar-nav navbar-right">
                  <li>
                     <Link to={`/users/${props.currentUser.user.id}/messages/new`}>
                        New Message
                     </Link>
                  </li>
                  <li>
                     <a onClick={props.logout}>Log out</a>
                  </li>
               </ul>
            ) : (
               <ul className="nav navbar-nav navbar-right">
                  <li>
                     <Link to="/signup">Sing up</Link>
                  </li>
                  <li>
                     <Link to="/signin">Log in</Link>
                  </li>
               </ul>
            )}
         </div>
      </nav>
   );
};

const mapStateToProps = state => ({
   currentUser: state.currentUser,
});

export default connect(
   mapStateToProps,
   { logout },
)(Navbar);
