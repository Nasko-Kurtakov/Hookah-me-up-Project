import React, { Component } from 'react';
// import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import { Button } from '../utils/utils'

import './Navigation.css';

export class Navigation extends Component {

    render(){
       return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">Hookah Me Up</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#view1">View 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#view2">View 2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>);
    }

}