import React, { Component } from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';

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
            <BrowserRouter>
                <div>
                    <Navigation/>
                    <Switch>
                        <PropsRoute path="/" exact component={OrdersOverview}/>
                        <PropsRoute exact path={"/newOrders"} component={OrdersOverview}/>
                        <PropsRoute exact path={"/sentOrders"} component={TakeBackView}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default LoggedInView;