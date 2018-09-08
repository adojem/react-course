import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewMessage } from '../store/actions/messsages';

class MessageForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         message: '',
      };

      this.handleNewMessage = this.handleNewMessage.bind(this);
   }

   handleNewMessage(event) {
      const { postNewMessage, history } = this.props;
      const { message } = this.state;
      event.preventDefault();
      postNewMessage(message);
      this.setState({ message: '' });
      history.push('/');
   }

   render() {
      const { errors } = this.props;
      const { message } = this.state;

      return (
         <form onSubmit={this.handleNewMessage}>
            {errors.message && <div className="alert alert-danger">{errors.message}</div>}
            <input
               type="text"
               className="form-control"
               value={message}
               onChange={e => this.setState({ message: e.target.value })}
            />
            <button type="submit" className="btn btn-success pull-right">
               Add my message!
            </button>
         </form>
      );
   }
}

function mapStateToProps(state) {
   return {
      errors: state.errors,
   };
}

export default connect(
   mapStateToProps,
   { postNewMessage },
)(MessageForm);
