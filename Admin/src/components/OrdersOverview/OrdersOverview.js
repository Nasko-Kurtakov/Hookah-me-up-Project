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
            "№":"1",
            "описание":"Праскова",
            "контакти":{
                "номер":"0899342517",
                "адрес":"Студентски град бл. 42 вх. Б",
                "имена":"Георги Минков"
            },
            "час на връщане":"18:10",
            "коментар":"",
            "статус":statuses.received
        },{
            "№":"2",
            "описание":"Наргиле с мента",
            "контакти":{
                "номер":"0899343184",
                "адрес":"жк. Гоце Делчев №420",
                "имена":"Иван Стоилов"
            },
            "час на връщане":"18:00",
            "коментар":"",
            "статус":statuses.received
        },{
            "№":"3",
            "описание":"Наргиле ябълка и банан",
            "контакти":{
                "номер":"0899331252",
                "адрес":"Гео Милев 777",
                "имена":"Петър Иванов"
            },
            "час на връщане":"19:15",
            "коментар":"моля не палете въглените преди доставка",
            "статус":statuses.received
        },{
            "№":"4",
            "описание":"Наргиле с банан и мента",
            "контакти":{
                "номер":"08993024515",
                "адрес":"Овча Купел Блок 17",
                "имена":"Георги Иванов"
            },
            "час на връщане":"16:50",
            "коментар":"искам по-голямо наргиле",
            "статус":statuses.received
        }];

        this.getOrders = this.getOrders.bind(this);
        this.state={selectedOrder:this.orders[0]};
    }

    getOrders(){
        return this.orders
    }

    sendSelectedOrder(){
        var selected=this.state.selectedOrder;
        selected["статус"]=statuses.delivered;
        this.setState({selectedOrder:selected});
    }

    changeSelection=(newSelectedOrder)=>{
        this.setState({selectedOrder:newSelectedOrder});
    };

    render(){
        var selected=this.state.selectedOrder;
        const items = this.getOrders().filter(oreder=>oreder["статус"] === statuses.received);
        return(
            <section id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pull-left">
                            <Table headers={["№","описание","статус"]} selectRow={this.changeSelection} items={items}/>
                        </div>
                        <div className="col-lg-6 pull-right">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="info-container">
                                        <h4>Информация за поръчката</h4>
                                        <div>
                                            <span>Имена: </span>
                                            <span>{selected["контакти"]["имена"]}</span>
                                        </div>
                                        <div>
                                            <span>Адрес: </span>
                                            <span>{selected["контакти"]["адрес"]}</span>
                                        </div>
                                        <div>
                                            <span>Телефон: </span>
                                            <span>{selected["контакти"]["номер"]}</span>
                                        </div>
                                        <div>
                                            <span>Коментар за доставчика: </span>
                                            <span>{selected["коментар"]}</span>
                                        </div>
                                        <div className="send-container">
                                            <Button text="Изпрати" className="btn-success" onClick={()=>this.sendSelectedOrder()}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <GoogleMap order={selected["контакти"]} isMarkerShown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}