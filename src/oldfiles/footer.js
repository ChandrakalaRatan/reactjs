
import React from "react";

export const footer = (props) => {
    return(
        <>
        <div className ="container"></div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-color--grey-100">
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title mdl-layout--large-screen-only"><a href="/">Welcome to chandra's Page</a></span>
                    <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation mdl-layout--large-screen-only">
                                <a className="mdl-navigation__link" href="#">Home</a>
                                <a className="mdl-navigation__link" href="#">Service</a>
                                <a className="mdl-navigation__link" href="#">Login</a>
                                <a className="mdl-navigation__link" href="#">Contact</a>
                        </nav>
                </div>
            </header>
            <main className="mdl-layout__content">
                <div className="page-content">
                </div>
            </main>   
        </div>

        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
               
                <span class="mdl-layout-title mdl-layout--large-screen-only"><a href="/">MyFirstReact</a></span>
              
                <div class="mdl-layout-spacer"></div>
                
                <nav class="mdl-navigation mdl-layout--large-screen-only">
                <div class="mdl-layout-spacer"></div>
                <Link to={"/home"}> Home </Link>
                
                <Link to={"/about"}> About </Link> 
                
                <Link to={"/products"}> Products </Link>
                
                <Link to={"/login"}> Login </Link>
                
                <Link to={"/contact"}> Contact Us </Link> 
                
                </nav>
                </div>
             </header>
    </>
    );
};