import React, { Component } from "react";
import {Link} from "react-router-dom";
import {navbar} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import "./mystyle.css";

export const Header = (props) => {
        return(
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-color--grey-100">
  
                <div class="mdl-layout__drawer">
                <span class="mdl-layout-title">Chandra's Home Page</span>
                <nav class="mdl-navigation">
                   
                    <a class="mdl-navigation__link">
                    <Link to={"/home"}> Home </Link>
                    </a>
                    <a class="mdl-navigation__link">
                    <Link to={"/about"}> About </Link> 
                    </a>
                    <a class="mdl-navigation__link">
                    <Link to={"/products"}> Products </Link>
                    </a>
                    <a class="mdl-navigation__link">
                    <Link to={"/login"}> Login </Link>
                    </a>
                    <a class="mdl-navigation__link">
                    <Link to={"/contact"}> Contact Us </Link> 
                    </a>  
                </nav>
                </div>
            <main class="mdl-layout__content">
            <div class="page-content">
            </div>
        </main>
        </div>
        );
    };