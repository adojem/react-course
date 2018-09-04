import React, { Component } from 'react';

export default class AuthForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: '',
         username: '',
         password: '',
         profileImageUrl: '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value,
      });
   }

   handleSubmit(e) {
      e.preventDefault();
      const { signUp, onAuth, history } = this.props;
      const authType = signUp ? 'signup' : 'signin';

      onAuth(authType, this.state)
         .then(() => {
            history.push('/');
         })
         .catch(() => false);
   }

   render() {
      const {
         email, username, password, profileImageUrl,
      } = this.state;
      const {
         heading, buttonText, signUp, errors, history, removeError,
      } = this.props;

      history.listen(() => removeError());

      return (
         <div>
            <div className="row justify-content-md-center text-center" />
            <div className="col-md-6">
               <form onSubmit={this.handleSubmit}>
                  <h2>{heading}</h2>
                  {errors.message && <div className="alert alert-danger">{errors.message}</div>}
                  <label htmlFor="email">Email:</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="email"
                     id="email"
                     className="form-control"
                     onChange={this.handleChange}
                     value={email}
                  />
                  <label htmlFor="password">Password:</label>
                  <input
                     autoComplete="off"
                     type="password"
                     name="password"
                     id="password"
                     className="form-control"
                     onChange={this.handleChange}
                     value={password}
                  />
                  {signUp && (
                     <div>
                        <label htmlFor="username">User Name:</label>
                        <input
                           autoComplete="off"
                           type="text"
                           name="username"
                           id="username"
                           className="form-control"
                           onChange={this.handleChange}
                           value={username}
                        />
                        <label htmlFor="image-url">Image URL:</label>
                        <input
                           type="text"
                           name="profileImageUrl"
                           id="image-url"
                           className="form-control"
                           value={profileImageUrl}
                           onChange={this.handleChange}
                        />
                     </div>
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
