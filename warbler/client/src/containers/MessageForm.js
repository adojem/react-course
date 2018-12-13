import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postNewMessage } from '../store/actions/messages';

class MessageForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         message: '',
      };
   }

   handleNewMessage = (event) => {
      event.preventDefault();
      const { postNewMessage, history } = this.props;

      postNewMessage(this.state.message);
      this.setState({ message: '' });
      history.push('/');
   };

   render() {
      const { errors } = this.props;

      return (
         <form onSubmit={this.handleNewMessage}>
            {errors.message && <div className="alert danger">{errors.message}</div>}
            <input
               className="form-control"
               type="text"
               value={this.state.message}
               onChange={e => this.setState({ message: e.target.value })}
            />
            <button className="btn btn-success float-right" type="submit">
               Add my message!
            </button>
         </form>
      );
   }
}

MessageForm.propTypes = {
   postNewMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
   errors: state.errors,
   currentUser: state.currentUser,
});

export default connect(
   mapStateToProps,
   { postNewMessage },
)(MessageForm);
