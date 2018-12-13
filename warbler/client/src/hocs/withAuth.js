import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function withAuth(ComponentToBeRendered) {
   class Authenticate extends Component {
      componentWillMount() {
         const { isAuthenticated, history } = this.props;

         if (!isAuthenticated) {
            history.push('/signin');
         }
      }

      componentWillUpdate(nextProps) {
         if (nextProps.isAuthenticated === false) {
            this.props.history.push('/signin');
         }
      }

      render() {
         return <ComponentToBeRendered {...this.props} />;
      }
   }

   const mapStateToProps = state => ({
      isAuthenticated: state.currentUser.isAuthenticated,
   });

   return connect(mapStateToProps)(Authenticate);
}
