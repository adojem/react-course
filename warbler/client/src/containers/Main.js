import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
   Switch, Route, withRouter, Redirect,
} from 'react-router-dom';
import Homepage from '../components/Homepage';

const Main = () => (
   <div className="container">
      <Switch>
         <Route exact path="/" render={props => <Homepage />} />
      </Switch>
   </div>
);

const mapStateToProps = state => ({
   currentUser: state.currentUser,
});

export default withRouter(connect(mapStateToProps)(Main));
