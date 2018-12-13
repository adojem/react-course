import React from 'react';
import { Link } from 'react-router-dom';
import MessageTimeline from './MessageTimeline';

const Homepage = ({ currentUser }) => {
   if (!currentUser.isAuthenticated) {
      return (
         <div className="home-hero">
            <h1 className="ls-1">What's Happening</h1>
            <h4 className="ls-1">New to Warbler?</h4>
            <Link to="/signup" className="btn btn-primary mt-3">
               Sign up here
            </Link>
         </div>
      );
   }
   return (
      <div>
         <MessageTimeline
            profileImageUrl={currentUser.user.profileImageUrl}
            username={currentUser.user.username}
         />
      </div>
   );
};

export default Homepage;
