import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const MessageItem = ({
   date, profileImageUrl, text, username, removeMessage,
}) => (
   <div>
      <li className="list-group-item">
         <img
            src={profileImageUrl || DefaultProfileImg}
            alt={username}
            heighht="100"
            width="100"
            className="timeline-image"
         />
         <div className="message-area">
            <Link to="/">@{username}</Link>
            <span className="text-muted">
               <Moment className="text-muted" format="Do MM YYYY">
                  {date}
               </Moment>
            </span>
            <p>{text}</p>
            <a className="btn btn-danger" onClick={removeMessage}>
               delete
            </a>
         </div>
      </li>
   </div>
);

export default MessageItem;
