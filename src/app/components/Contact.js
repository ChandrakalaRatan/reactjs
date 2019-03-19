import React from "react";
import './login.css';

export class Contact extends React.Component{
    render() {

        return (
            <div className="wrapper">
            <div className="form-wrapper">
            <div className="row small-up-2 medium-up-3 large-up-4">
                <div className="column bodyPart">
                    <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                    <h3>Contact Us </h3>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                    <h5>Name: Chandra Kala </h5>
                    <h5>Phone:45435435 </h5>
                    <h5> Email:abc@gmail.com</h5>
                    <h5>Address: 34234 rue richelieu </h5>
                    <h5>Quebec city, Quebec, Canada </h5>
                    <h5>ER3 ER8</h5>
                    </div>
                    </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}
