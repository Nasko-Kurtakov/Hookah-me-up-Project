import React, { Component } from 'react';

import "./OrdersOverview.css"
import {Table} from "../Table/Table";
import {GoogleMap} from "../GoogleMap/GoogleMap"
import {Button} from "../utils/utils";

import "./OrdersOverview.css";

export const statuses = {
    received:"приет",
    delivered:"доставен",
    takenBack:"върнат"
};

export class OrdersOverview extends Component {

    constructor(props){
        super(props);
        this.orders = [{
            id:"3",
            description:"Наргиле с банан и мента",
            contacts:{
                phoneNumber:"0899342517",
                address:"Ivan Vazov Blok 26",
                names:"Петър Иванов"
            },
            comment:"обадете ми се",
            status:statuses.received
        },{
            id:"1",
            description:"Наргиле с банан и мента",
            contacts:{
                phoneNumber:"0899342517",
                address:"ж.к. Младост 3 Blok 7",
                names:"Иван Иванов"
            },
            comment:"обадете ми се",
            status:statuses.received
        },{
            id:"2",
            description:"Наргиле с банан и мента",
            contacts:{
                phoneNumber:"0899342517",
                address:"Студентски град бл. 52 вх. Б",
                names:"Георги Иванов"
            },
            comment:"обадете ми се",
            status:statuses.received
        }];

        this.getOrders = this.getOrders.bind(this);
        this.state={selectedOrder:this.orders[0]};
        // this.selectedOrder=this.orders[0]
    }

    getOrders(){
        return this.orders
    }

    sendSelectedOrder(){
        var selected=this.state.selectedOrder;
        selected.status=statuses.delivered;
        this.setState({selectedOrder:selected});
    }

    changeSelection=(newSelectedOrder)=>{
        this.setState({selectedOrder:newSelectedOrder});
    };

    render(){
        var selected=this.state.selectedOrder;
        const items = this.getOrders().filter(oreder=>oreder.status === statuses.received);
        return(
            <section id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pull-left">
                            <Table headers={["id","description","status"]} selectRow={this.changeSelection} items={items}/>
                        </div>
                        <div className="col-lg-6 pull-right">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="info-container">
                                        <h4>Информация за поръчката</h4>
                                        <div>
                                            <span>Имена: </span>
                                            <span>{selected.contacts.names}</span>
                                        </div>
                                        <div>
                                            <span>Адрес: </span>
                                            <span>{selected.contacts.address}</span>
                                        </div>
                                        <div>
                                            <span>Телефон: </span>
                                            <span>{selected.contacts.phoneNumber}</span>
                                        </div>
                                        <div className="send-container">
                                            <Button text="Изпрати" className="btn-success" onClick={()=>this.sendSelectedOrder()}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <GoogleMap order={selected.contacts} isMarkerShown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}