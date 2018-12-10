import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class AuthForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         email: '',
         username: '',
         password: '',
         profileImageUrl: '',
      };
   }

   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value,
      });
   };

   handleSubmit = (e) => {
      e.preventDefault();

      const { signup, onAuth } = this.props;
      const authType = signup ? 'signup' : 'signin';

      onAuth(authType, this.state).then(() => {
         console.log('Logged in successfully');
      });
   };

   render() {
      const {
         email, username, password, profileImageUrl,
      } = this.state;
      const { heading, buttonText, signUp } = this.props;

      return (
         <div className="row justify-content-md-center text-center">
            <div className="col-md-6">
               <form onSubmit={this.handleSubmit}>
                  <h2>{heading}</h2>
                  <div className="form-group">
                     <label className="d-block" htmlFor="email">
                        Email:
                        <input
                           id="email"
                           className="form-control"
                           type="text"
                           name="email"
                           value={email}
                           onChange={this.handleChange}
                        />
                     </label>
                  </div>
                  <div className="form-group">
                     <label className="d-block" htmlFor="password">
                        Password:
                        <input
                           id="password"
                           className="form-control"
                           type="text"
                           name="password"
                           value={password}
                           onChange={this.handleChange}
                        />
                     </label>
                  </div>
                  {signUp && (
                     <Fragment>
                        <div className="form-group">
                           <label className="d-block" htmlFor="username">
                              Username:
                              <input
                                 id="username"
                                 className="form-control"
                                 type="text"
                                 name="username"
                                 value={username}
                                 onChange={this.handleChange}
                              />
                           </label>
                        </div>
                        <div className="form-group">
                           <label className="d-block" htmlFor="image-url">
                              Image URL:
                              <input
                                 id="image-url"
                                 className="form-control"
                                 type="text"
                                 name="profileImageUrl"
                                 value={profileImageUrl}
                                 onChange={this.handleChange}
                              />
                           </label>
                        </div>
                     </Fragment>
                  )}
                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                     {buttonText}
                  </button>
               </form>
            </div>
         </div>
      );
   }
}

AuthForm.defaultProps = {
   signUp: false,
};

AuthForm.propTypes = {
   signUp: PropTypes.bool,
   onAuth: PropTypes.func.isRequired,
   heading: PropTypes.string.isRequired,
   buttonText: PropTypes.string.isRequired,
};

export default AuthForm;
