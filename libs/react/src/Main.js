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
        this.setState({isLoggedIn:true});
    };

    render(){
        // return !this.state.isLoggedIn ? <LogIn loginSuccessfull={this.logIn} /> : <LoggedInView/>;
        return (<LoggedInView/>);
    }
}

export default Main
