import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { browserHistory} from "react-router";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Login } from "./components/Login";
import { Contact } from "./components/Contact";
class App extends React.Component {
    render(){
        return (
            <Router history={browserHistory} >
            <div>
            <Root>
                <Route path={"/home"} component={Home}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/products"} component={Products}/>
                <Route path={"/login"} component={Login}/>
                <Route path={"/contact"} component={Contact}/>
                
            </Root>
            </div>
            </Router>
            // <div className="container">
            //     <div className="row">
            //     <div className="col-xs-10 col-xs-offset-1">
            //         <Header/>
            //     </div>
            //     </div>
            //     <div className="row">
            //     <div className="col-xs-10 col-xs-offset-1">
            //         <Login/>
            //     </div>
            //     </div>
            // </div>
        );
    }
}

render(<App/>,window.document.getElementById('app'));