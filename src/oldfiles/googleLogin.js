import React, { Component } from "react";

export default class googleLogin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.SignOutHandler = this.SignOutHandler.bind(this);
    }
  
    SignOutHandler() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
        Authenticate.signOutUser();
      });
    }
  
    render() {
      return (
        <div class="header-content">
          <h2 class="header-title">Schedule</h2>
          <h3 class="header-user-button">
              <a href="/" onClick={this.SignOutHandler}>User First Name</a>
          </h3>
        </div>
      );
    }
  }