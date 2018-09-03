import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMessages } from '../store/actions/messsages';
import MessageItem from '../components/MessageItem';

class MessageList extends Component {
   componentDidMount() {
      this.props.fetchMessages();
   }

   render() {
      const { messages } = this.props;
      console.log(messages);
      const messageList = messages.map(m => (
         <MessageItem
            key={m._id}
            date={m.createdAt}
            text={m.text}
            username={m.user.username}
            profileImageUrl={m.user.profileImageUrl}
         />
      ));
      return messageList;
   }
}

const mapStateToProps = state => ({ messages: state.messages });

export default connect(
   mapStateToProps,
   { fetchMessages },
)(MessageList);
