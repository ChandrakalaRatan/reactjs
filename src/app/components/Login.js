import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, withRouter} from 'react-router-dom';
import { browserHistory} from "react-router";

import './login.css';
import { LoggedIn } from "./LoggedIn";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {PostData} from './PostData';


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

export class Login extends React.Component {
  
    constructor(props) {
        super(props);

        this.state = {
            userName: null,
            password: null,
           loggedIn: false,
           loginError: false,
           redirect: false,

            formErrors: {
              userName: "",
              password: ""
            }
          };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
       // this.signup = this.signup.bind(this);
    }

    handleSubmit= (e) =>{
        e.preventDefault();
        
        console.log(this.state);
        if (formValid(this.state)) {
            console.log('The form was submitted with the following data:');
            console.log(`
            User Name: ${this.state.userName}
            Password: ${this.state.password}
           `);
           if(this.state.userName === 'guest' && this.state.password === '1234')
           {
               this.setState( {   loggedIn:true }  );
           }
           else
           {
               this.setState( {loggedIn:false});    
               this.props.history.push('/login')
           }

        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
          }
    };
    handleCancel(e) {
        e.preventDefault();
        // this.setState( {loggedIn:false})
        this.props.history.push('/')
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
  
//     signup(res, type) {
//         let postData;
//         if (type === 'facebook' && res.email) {
//         postData = {
//              name: res.name,
//              provider: type,
//              email: res.email,
//              provider_id: res.id,
//              token: res.accessToken,
//              provider_pic: res.picture.data.url
//         };
//        }
//    //&& res.profileObj.email
//        if (type === 'google' && res.profileObj.email) {
//        postData = {
//         //  name: res.w3.ig,
//         //  provider: type,
//         //  email: res.w3.U3,
//         //  provider_id: res.El,
//         //  token: res.Zi.access_token,
//         //  provider_pic: res.w3.Paa

//          email: res.profileObj.email,
//          name: res.profileObj.name,
//          googleId: res.profileObj.googleId,
//          googleAccessToken: res.Zi.access_token,
//          googleImageURL: res.profileObj.imageURL
//        };
//    }
   
//    if (postData) {
//    PostData('signup', postData).then((result) => {
//       let responseJson = result;
//       sessionStorage.setItem("userData", JSON.stringify(responseJson));
//       this.setState({redirect: true});
//    });
//    } else {}
//    }

    render(){
        const { formErrors } = this.state;
        const { values } = this.props;
        // if (this.state.redirect || sessionStorage.getItem('userData')) {
        //     return (<Redirect to={'/loggedin'}/>)
        // }
        
        const responseFacebook = (response) => {
            console.log("facebook console");
            console.log(response);
            // this.signup(response, 'facebook');
        }
        
        const responseGoogle = (response) => {
            console.log("google console");
            console.log(response);
           // this.signup(response, 'google');
        }
        

        if(this.state.loggedIn === true){
             return(<LoggedIn userName={this.state.userName} /> )
        }
  
        return (
            <div className="wrapper">
            <div className="form-wrapper">
                <div className="row small-up-2 medium-up-3 large-up-4">
                <div className="column bodyPart">
                    <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h3>Welcome Login Page</h3>
                        <h5>username:  guest  &&  password: 1234</h5>
                    </div>
                    </div>
                    <form onSubmit={this.handleSubmit.bind(this)} className="FormFields" >
                    <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <label htmlFor="userName">UserName</label>
                            <input 
                            className={formErrors.userName.length > 0 ? "error" : null} 
                            type="text" name="userName" 
                            placeholder="enter username" 
                            value={this.state.userName} 
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
                    
                    <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">

                    <input type="submit" 
                            value = "log in"
                            value={this.state.loggedIn ? 'log out': 'log in'}
                            className="zooma-delete-item_button" 
                            onClick = {this.handleSubmit.bind(this)}/>  

                   <input type="button"
                            value="cancel" 
                            className="zooma-delete-item_button" 
                            onClick={this.handleCancel.bind(this)} />    
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xs-5 col-xs-offset-1">
    
                            <FacebookLogin
                                appId="1161520780689029" 
                                fields="name,email,picture"
                                callback={responseFacebook}
                            />
                        
                            <GoogleLogin
                                clientId="891946836949-i43c7eug7gofudkcqe5d2u9n6bqbt978.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                                buttonText="LOGIN WITH GOOGLE"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                            />
                    </div>
                    </div>

                </form>
                </div>
                </div>
            </div>
            </div>



        );
    }
}
           