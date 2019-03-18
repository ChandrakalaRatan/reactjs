import React from "react";

export class LoggedIn extends React.Component{
    constructor(props){
        super();
        this.state = {
            username: props.username
        };
    }
    render() {

        return (
            <div>
                <h2>you are loggedin as {this.props.username}</h2>
            </div>
        );
    }
}