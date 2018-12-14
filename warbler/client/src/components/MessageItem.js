import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const MessageItem = ({
   date, profileImageUrl, text, username, removeMessage, isCorrectUser,
}) => (
   <div>
      <li className="list-group-item">
         <img
            className="timeline-image"
            src={profileImageUrl || DefaultProfileImg}
            alt={username}
            height="100"
            width="100"
         />
         <div className="message-area">
            <Link to="/">{`@${username} `}</Link>
            <span className="text-muted">
               <Moment className="text-muted" format="Do MMM YYY">
                  {date}
               </Moment>
            </span>
            <p>{text}</p>
            {isCorrectUser && (
               <button type="button" className="btn btn-danger" onClick={removeMessage}>
                  Delete
               </button>
            )}
         </div>
      </li>
   </div>
);

MessageItem.propTypes = {
   date: PropTypes.string.isRequired,
   profileImageUrl: PropTypes.string,
   text: PropTypes.string,
   username: PropTypes.string.isRequired,
   removeMessage: PropTypes.func.isRequired,
   isCorrectUser: PropTypes.bool.isRequired,
};

export default MessageItem;
