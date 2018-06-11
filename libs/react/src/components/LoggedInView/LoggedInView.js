import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Navigation} from '../Navigation/Navigation';
import {OrdersOverview} from '../OrdersOverview/OrdersOverview'
import {Button, PropsRoute} from '../utils/utils';
import "./LoggedInView.css"

export class LoggedInView extends Component{

    componentWillMount(){
        const newLocation = window.location.origin+'/';
        window.history.pushState({loggedIn:true}, "Logged In View", newLocation);
    }

    render(){
        return (
            <BrowserRouter>
                <div>
                    <Navigation/>
                    <Switch>
                        <PropsRoute path="/" exact component={OrdersOverview}/>
                        <PropsRoute path={"/#view1"} component={OrdersOverview}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default LoggedInView;