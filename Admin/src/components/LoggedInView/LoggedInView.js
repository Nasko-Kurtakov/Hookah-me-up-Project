import React, { Component } from 'react';
import {BrowserRouter, Switch, HashRouter} from 'react-router-dom';

import {Navigation} from '../Navigation/Navigation';
import {OrdersOverview} from '../OrdersOverview/OrdersOverview'
import {PropsRoute} from '../utils/utils';
import "./LoggedInView.css"
import {TakeBackView} from "../TakeBackView/TakeBackView";

export class LoggedInView extends Component{

    componentWillMount(){
        // const newLocation = window.location.origin+'/';
        // window.location.href = newLocation;
        // window.history.pushState({loggedIn:true}, "Logged In View", newLocation);
    }

    render(){
        return (
            <HashRouter basename="/">
                <div>
                    <Navigation/>
                    <Switch>
                        <PropsRoute path={"/"} component={OrdersOverview}/>
                        <PropsRoute path={"/page-top"} component={OrdersOverview}/>
                        <PropsRoute path={"/newOrders"} component={OrdersOverview}/>
                        <PropsRoute path={"/newOrders"} component={OrdersOverview}/>
                        <PropsRoute path={"/sentOrders"} component={TakeBackView}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default LoggedInView;