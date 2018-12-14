import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMessages, removeMessage } from '../store/actions/messages';
import MessageItem from '../components/MessageItem';

class MessageList extends Component {
   componentDidMount() {
      this.props.fetchMessages();
   }

   render() {
      const { messages, removeMessage, currentUser } = this.props;

      const messageList = messages.map(m => (
         <MessageItem
            key={m._id}
            date={m.createdAt}
            text={m.text}
            username={m.user.username}
            profileImageUrl={m.user.profileImageUrl}
            removeMessage={() => removeMessage(m.user._id, m._id)}
            isCorrectUser={currentUser === m.user._id}
         />
      ));

      return (
         <div className="row">
            <div className="offset-1 col-sm-10">
               <ul id="messages" className="list-group">
                  {messageList}
               </ul>
            </div>
         </div>
      );
   }
}

MessageList.propTypes = {
   fetchMessages: PropTypes.func.isRequired,
   removeMessage: PropTypes.func.isRequired,
   currentUser: PropTypes.string.isRequired,
   messages: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.strin,
         text: PropTypes.string,
         createAt: PropTypes.string,
         user: PropTypes.shape({
            username: PropTypes.string.isRequired,
            profileImageUrl: PropTypes.string,
         }).isRequired,
      }),
   ).isRequired,
};

const mapStateToProps = state => ({
   messages: state.messages,
   currentUser: state.currentUser.user.id,
});

export default connect(
   mapStateToProps,
   { fetchMessages, removeMessage },
)(MessageList);
