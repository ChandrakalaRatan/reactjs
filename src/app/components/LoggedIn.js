import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import './login.css';

export class LoggedIn extends React.Component{

    constructor(props){
        super();
        this.state = {
            userName: props.userName,
            name:'',
            redirect: false,
        };
    }

//     componentDidMount() {
//         let data = JSON.parse(sessionStorage.getItem('userData'));
//         console.log(data);
//         this.setState({name: data.userData.name})
//    }

    render() {

        // if(!sessionStorage.getItem('userData') || this.state.redirect){
        //     return (<Redirect to={'/'}/>)
        // }
        return (
            <div className="wrapper">
            <div className="form-wrapper">
            <div className="row small-up-2 medium-up-3 large-up-4">
                <div className="column bodyPart">
                    <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                    <h3>Welcome </h3>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                    <h3>  you have logged  as  {this.state.userName} </h3>
                    {/* <h3>{this.state.name}</h3> */}
                    </div>
                    </div>
            </div>
            </div>
            </div>
            </div>
       
        );
    }
}
LoggedIn.propTypes = {
    userName: PropTypes.string,
    //data: PropTypes.arrayOf
};