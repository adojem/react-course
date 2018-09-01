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
   }

   render() {
      const {
         email, username, password, profileImageUrl,
      } = this.state;
      const { heading, buttonText } = this.props;
      return (
         <div>
            <div className="row justify-content-md-center text-center" />
            <div className="col-md-6">
               <form onSubmit={this.handleSubmit}>
                  <h2>{heading}</h2>
                  <label htmlFor="email">
                     Email:
                     <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control"
                        onChange={this.handleChange}
                        value={email}
                     />
                  </label>
                  <label htmlFor="email">
                     Password:
                     <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        onChange={this.handleChange}
                     />
                  </label>
               </form>
            </div>
         </div>
      );
   }
}
