import React, { Component } from 'react';
import { connect } from 'react-redux';

const withAuth = (ComponentToBeRendered) => {
   class Authenticate extends Component {
      componentWillMount() {
         const { isAuthenticated, history } = this.props;
         if (isAuthenticated === false) {
            history.push('/signin');
         }
      }

      componentWillUpdate(nextProps) {
         const history = this.props;
         if (nextProps.isAuthenticated === false) {
            history.push('/signin');
         }
      }

      render() {
         return <ComponentToBeRendered {...this.props} />;
      }
   }

   const mapStateToProps = state => ({ isAuthenticated: state.currentUser.isAuthenticated });

   return connect(mapStateToProps)(Authenticate);
};

export default withAuth;
