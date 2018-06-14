import React, { Component } from 'react';
import {Table} from "../Table/Table";
import {GoogleMap} from "../GoogleMap/GoogleMap"
import {Button} from "../utils/utils";

import "./TakeBackView.css"

import {statuses} from '../OrdersOverview/OrdersOverview'

const orderStatuses = statuses;

export class TakeBackView extends Component {

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
            "статус":statuses.delivered
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
            "статус":statuses.delivered
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
            "статус":statuses.delivered
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
            "статус":statuses.delivered
        },{
            "№":"5",
            "описание":"Наргиле с череши",
            "контакти":{
                "номер":"0899042745",
                "адрес":"жк. Стрелбище блок 20 Д",
                "имена":"Иванка Стоилова"
            },
            "час на връщане":"17:00",
            "коментар":"",
            "статус":statuses.delivered
        },{
            "№":"6",
            "описание":"Наргиле с грозде",
            "контакти":{
                "номер":"0899190325",
                "адрес":"Младост 1 ул. Върбичка №3",
                "имена":"Елизабет Жечева"
            },
            "час на връщане":"19:30",
            "коментар":"обадете ми се",
            "статус":statuses.delivered
        }];

        this.getOrders = this.getOrders.bind(this);
        this.state={selectedOrder:this.orders[0]};
    }

    getOrders(){
        return this.orders
    }

    takeBackSelectedOrder(){
        var selected=this.state.selectedOrder;
        selected.status=statuses.takenBack;
        this.setState({selectedOrder:selected});
    }

    changeSelection=(newSelectedOrder)=>{
        this.setState({selectedOrder:newSelectedOrder});
    };

    render(){
        var selected=this.state.selectedOrder;
        var statuses = orderStatuses;
        const items = this.getOrders().filter(oreder=> oreder["статус"] === statuses.delivered);
        return(
            <section id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pull-left">
                            <Table headers={["№","описание","статус","час на връщане"]} selectRow={this.changeSelection} items={items}/>
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
                                        <div className="send-container">
                                            <Button text="Отбележи върнат" className="btn-success" onClick={()=>this.takeBackSelectedOrder()}/>
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