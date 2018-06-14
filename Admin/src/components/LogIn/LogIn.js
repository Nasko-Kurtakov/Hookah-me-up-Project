import React, { Component } from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import {Button, PropsRoute} from '../utils/utils';

import './LogIn.css';

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        };

        // this.handleChange = this.handleChange.bind(this);

    }

    validateForm(){
        return !!this.state.username.length && !!this.state.password.length;
    }

    handleChange = (event)=> {
        this.setState({
            [event.target.id]:event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.loginSuccessfull();
    };


    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username">
                        <ControlLabel>Потребителско име</ControlLabel>
                        <FormControl autoFocus="true" type="text" value={this.state.username} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <ControlLabel>Парола</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button disabled={!this.validateForm()} type="submit" className="btn-light btn-block" text="Влез"/>
                    {/*<Button disabled={!this.validateForm()} block type="submit">Login</Button>*/}
                </form>
            </div>
        );
    }
}

class LogInWrapper extends Component{

    render() {
        return (
            <section id="logIn-section">
                <div className="container">
                    <div className="row center-content">
                        <div className="login-holder col-md-4">
                            <LoginView {...this.props} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }



}

export class LogIn extends Component {

    render(){
        return (
            <BrowserRouter>
            <div className="view-container">
                <Switch>
                    <PropsRoute path="/" exact component={LogInWrapper} loginSuccessfull={this.props.loginSuccessfull} />
                    <PropsRoute path="/login" exact component={LogInWrapper} loginSuccessfull={this.props.loginSuccessfull} />
                </Switch>
            </div>
        </BrowserRouter>);
    }
}

export default LogIn;
