import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MessageTimeLine from './MessageTimeline';

const Homepage = ({ currentUser }) => {
   if (!currentUser.isAuthenticated) {
      return (
         <div className="home-hero">
            <h1>What&apos;s Happening?</h1>
            <h4>New to Warbler?</h4>
            <Link to="/signup" className="btn btn-primary">
               Sign up here
            </Link>
         </div>
      );
   }
   const { profileImageUrl, username } = currentUser.user;
   return (
      <div>
         <MessageTimeLine profileImageUrl={profileImageUrl} username={username} />
      </div>
   );
};

Homepage.propTypes = {
   currentUser: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
      user: PropTypes.shape({
         username: PropTypes.string.isRequired,
         profileImageUrl: PropTypes.string,
      }).isRequired,
   }).isRequired,
};

export default Homepage;
