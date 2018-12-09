import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
   Switch, Route, withRouter, Redirect,
} from 'react-router-dom';

const Main = () => (
   <div>
      <Switch>
         <Route exact path="/" render={props => <Homepage />} />
      </Switch>
   </div>
);

const mapStateToProps = state => ({
   currentUser: state.currentUser,
});

export default withRouter(connect(mapStateToProps)(Main));
