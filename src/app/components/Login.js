import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom';
import { browserHistory} from "react-router";
import PropTypes from 'prop-types';


import './login.css';


const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };

const userloggedin =(params) =>{
    return(<h1>welcome  user</h1>)
}
export class Login extends React.Component {
    state = {
        loggedIn: false
    }
    loginHandle = () =>{
        if(this.state.userName == "Chandra" & this.state.password == "kala")
        {
            this.setState( {loggedIn:true})
        }
        else
        {
            this.setState( {loggedIn:false})
        }
        
    }
    constructor(props) {
        super(props);

        this.state = {
            userName: null,
            password: null,
            
            formErrors: {
              userName: "",
              password: ""
            }
          };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log('The form was submitted with the following data:');
            console.log(`
            User Name: ${this.state.userName}
            Password: ${this.state.password}
           `);
           loginHandle()
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
          }
    };
    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "userName":
            formErrors.userName =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          case "password":
            formErrors.password =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
  

    render(){
        const { formErrors } = this.state;
        return (
            <div className="wrapper">
            <div className="form-wrapper">
                <div className="row small-up-2 medium-up-3 large-up-4">
                <div className="column bodyPart">
                    <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Login Page</h1>
                    </div>
                    </div>
                    <form onSubmit={this.handleSubmit} className="FormFields" >
                    <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <label htmlFor="usertName">UserName</label>
                            <input 
                            className={formErrors.userName.length > 0 ? "error" : null} 
                            type="text" name="username" 
                            placeholder="enter username" 
                            value={this.state.username} 
                            noValidate
                            onChange={this.handleChange}/>
                        {formErrors.userName.length > 0 && (
                        <span className="errorMessage">{formErrors.userName}</span>
                        )}
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <label htmlFor="password">Password</label>
                            <input 
                            className={formErrors.password.length > 0 ? "error" : null}
                            type="password" 
                            name="password" 
                            placeholder="enter password" 
                            value={this.state.password} 
                            noValidate
                            onChange={this.handleChange} />
                        {formErrors.password.length > 0 && (
                         <span className="errorMessage">{formErrors.password}</span>
                        )}
                    </div>
                    </div>
                    <Router>
                    <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">

                    <input type="submit" 
                        value={this.state.loggedIn ? 'log out': 'log in'}
                        className="button" 
                        onClick={this.loginHandle.bind(this)} 
                    />
                    <Route path ="/loggedin" exact strict render = {() => (
                            this.state.loggedIn ? (<userloggedin userName='match.params.username'/>) :(<Redirect to="/"/>)
                        )}/>
                    
                   <input type="cancel" value="cancel" className="button"  />
                   {/* onClick={<Redirect to="/"/>} */}
                    </div>
                    </div>
                    </Router>

                    </form>
                </div>
                </div>
            </div>
            </div>
        );
    }
}
