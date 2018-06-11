import React, { Component } from 'react';

const flatten = (arr)=>{
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
};

export class Table extends Component {
    constructor(props){
        super(props);
        this.headers = this.props.headers;
        this.items = this.props.items;
        this.getHeaders = this.getHeaders.bind(this);
        this.getBody = this.getBody.bind(this);
    }

    getHeaders(){
        const ths = this.headers.map(header => <th key={header} className={header} scope="col">{header}</th>);

        return (<tr>{ths}</tr>);
    }

    getBody(){
        const headers = this.headers;
        const selectRow = this.props.selectRow;
        return this.items.map((item,index)=>{
            const tds = headers.map(header=> <td key={header}>{item[header]}</td>);
            return <tr onClick={(e)=> selectRow(item)} key={index}>{tds}</tr>
        });
    }

    render(){
        return (
            <table className="table table-bordered table-hover">
                <thead>{this.getHeaders()}</thead>
                <tbody>{this.getBody()}</tbody>
            </table>
        );
    }
}