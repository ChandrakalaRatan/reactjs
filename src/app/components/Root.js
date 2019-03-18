import React, { Component } from "react";
import { render } from "react-dom";

import {Header} from "./Header";
import {Home} from "./Home";
// import {Login} from "./Login";

export class Root extends React.Component {
    render(){
            let renderData;
            renderData = (
                this.props.children
            );
    
        return (
            <div className="container">
            <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                <Header/>
            </div>
            <hr/>
            </div>
            <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
               {renderData}
            </div>
            </div>
        </div>
        );
    }
}