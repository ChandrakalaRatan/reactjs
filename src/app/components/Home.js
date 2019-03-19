import React from "react";
import ReactDOM from 'react-dom';
// import { LoggedIn } from "./LoggedIn";

// import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
import './login.css';

export class Home extends React.Component{
  
    render() {

        // const responseFacebook = (response) => {
            
        //     console.log(response);
        //     return(<LoggedIn data={response} /> );
        //   }
      
        //   const responseGoogle = (response) => {
        //     console.log(response);
        //     return(<LoggedIn data={response} /> );
        //   }

        return (
            <div className="wrapper">
            <div className="form-wrapper">
                <div className="row small-up-2 medium-up-3 large-up-4">
                <div className="column bodyPart">
                    <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h3>Welcome to Home Page</h3>
                    </div>
                    </div>
                    {/* <form className="FormFields" >
                    <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
    
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
          </form> */}
           </div>
          </div>
          </div>
          </div>
        );
    }
}
