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

   handleSubmit() {}

   render() {
      const {
         email, username, password, profileImageUrl,
      } = this.state;
      const { heading, buttonText, signUp } = this.props;

      return (
         <div className="row justify-content-md-center text-center">
            <div className="col-md-6">
               <form onSubmit={this.handleSubmit}>
                  <h2>AuthForm</h2>
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
               </form>
            </div>
         </div>
      );
   }
}

export default AuthForm;
