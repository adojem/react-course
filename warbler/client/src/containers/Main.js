import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
   Switch, Route, withRouter, Redirect,
} from 'react-router-dom';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/error';

const Main = ({
   authUser, currentUser, errors, removeError,
}) => (
   <div className="container">
      <Switch>
         <Route
            exact
            path="/"
            render={props => <Homepage currentUser={currentUser} {...props} />}
         />
         <Route
            exact
            path="/signin"
            render={props => (
               <AuthForm
                  errors={errors}
                  onAuth={authUser}
                  removeError={removeError}
                  buttonText="Log in"
                  heading="Welcome Back."
                  {...props}
               />
            )}
         />
         <Route
            exact
            path="/signup"
            render={props => (
               <AuthForm
                  errors={errors}
                  onAuth={authUser}
                  removeError={removeError}
                  signUp
                  buttonText="Sign me up!"
                  heading="Join Warbler today."
                  {...props}
               />
            )}
         />
      </Switch>
   </div>
);

Main.propTypes = {
   authUser: PropTypes.func.isRequired,
   errors: PropTypes.shape({
      message: PropTypes.string,
   }).isRequired,
};

const mapStateToProps = state => ({
   currentUser: state.currentUser,
   errors: state.errors,
});

export default withRouter(
   connect(
      mapStateToProps,
      { authUser, removeError },
   )(Main),
);
