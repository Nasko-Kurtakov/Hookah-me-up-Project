import React, { Component } from 'react';
import {LogIn} from "./components/LogIn/LogIn";
import {LoggedInView} from "./components/LoggedInView/LoggedInView";

import "./Main.css"



export class Main extends Component{

    constructor(props){
        super(props);

        this.state={isLoggedIn:false};

    }

    logIn = ()=> {
        sessionStorage.setItem('isLoggedIn',true);
        this.setState({isLoggedIn:true});
    };

    render(){
        const isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn'));
        return !isLoggedIn ? <LogIn loginSuccessfull={this.logIn} /> : <LoggedInView/>;
        // return (<LoggedInView/>);
    }
}

export default Main
