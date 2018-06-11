import React, { Component } from 'react';
import {Route} from 'react-router-dom';

export class Button extends Component {
    render() {
        return <button disabled={this.props.disabled} className={'btn ' + (!!this.props.className ? this.props.className :"")} onClick={this.props.onClick} type={this.props.type}>{this.props.text}</button>
    }
}
const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (
        React.createElement(component, finalProps)
    );
};

export const PropsRoute = ({ component, ...rest }) => {
    return (
        <Route {...rest} render={routeProps => {
            return renderMergedProps(component, routeProps, rest);
        }}/>
    );
};