import React from 'react';
import Proptypes from 'prop-types';
import MessageList from '../containers/MessageList';
import UserAside from './UserAside';

const MessageTimeLine = ({ profileImageUrl, username }) => (
   <div className="row">
      <UserAside profileImageUrl={profileImageUrl} username={username} />
      <MessageList />
   </div>
);

MessageTimeLine.defaultProps = {
   profileImageUrl: '',
};

MessageTimeLine.propTypes = {
   profileImageUrl: Proptypes.string,
   username: Proptypes.string.isRequired,
};

export default MessageTimeLine;
