import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Navigation.css';

export class Navigation extends Component {

    render(){
       return (
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
               <div className="container">
                   <NavLink className="navbar-brand js-scroll-trigger navbar-header" to="/page-top">Hookah Me Up</NavLink>
                   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                           aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarResponsive">
                       <ul className="navbar-nav ml-auto">
                           <li className="nav-item">
                               <NavLink className="nav-link js-scroll-trigger" to="/newOrders">Нови поръчки</NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink className="nav-link js-scroll-trigger" to="/sentOrders">Изпратени поръчки</NavLink>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       );
    }
}