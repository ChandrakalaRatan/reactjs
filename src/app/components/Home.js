import React from "react";

export class Home extends React.Component{
    render() {

        return (
            <div>
                <p>{this.props.isExist}</p>
                <h2>this is home page</h2>
            </div>
        );
    }
}
