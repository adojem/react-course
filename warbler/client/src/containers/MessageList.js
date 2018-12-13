import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMessages } from '../store/actions/messages';
import MessageItem from '../components/MessageItem';

class MessageList extends Component {
   componentDidMount() {
      this.props.fetchMessages();
   }

   render() {
      const { messages } = this.props;
      const messageList = messages.map(m => (
         <MessageItem
            key={m._id}
            date={m.createAt}
            text={m.text}
            username={m.user.username}
            profileImageUrl={m.user.profileImageUrl}
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
});

export default connect(
   mapStateToProps,
   { fetchMessages },
)(MessageList);
