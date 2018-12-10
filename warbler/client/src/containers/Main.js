import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
   Switch, Route, withRouter, Redirect,
} from 'react-router-dom';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';

const Main = () => (
   <div className="container">
      <Switch>
         <Route exact path="/" render={props => <AuthForm />} />
         <Route exact path="/" render={props => <Homepage />} />
         <Route
            exact
            path="/signin"
            render={props => <AuthForm buttonText="Log in" heading="Welcome Back." {...props} />}
         />
         <Route
            exact
            path="/signup"
            render={props => (
               <AuthForm signUp buttonText="Sign me up!" heading="Join Warbler today." {...props} />
            )}
         />
      </Switch>
   </div>
);

const mapStateToProps = state => ({
   currentUser: state.currentUser,
});

export default withRouter(connect(mapStateToProps)(Main));
