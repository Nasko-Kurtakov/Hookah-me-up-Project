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
            id:"1",
            description:"Праскова",
            contacts:{
                phoneNumber:"0899342517",
                address:"Студентски град бл. 42 вх. Б",
                names:"Георги Минков"
            },
            comment:"",
            status:statuses.delivered
        },{
            id:"2",
            description:"Наргиле с мента",
            contacts:{
                phoneNumber:"0899343184",
                address:"жк. Гоце Делчев №420",
                names:"Иван Стоилов"
            },
            comment:"",
            status:statuses.delivered
        },{
            id:"3",
            description:"Наргиле ябълка и банан",
            contacts:{
                phoneNumber:"0899331252",
                address:"Гео Милев 777",
                names:"Петър Иванов"
            },
            comment:"моля не палете въглените преди доставка",
            status:statuses.delivered
        },{
            id:"4",
            description:"Наргиле с банан и мента",
            contacts:{
                phoneNumber:"08993024515",
                address:"Овча Купел Блок 17",
                names:"Георги Иванов"
            },
            comment:"искам по-голямо наргиле",
            status:statuses.delivered
        },{
            id:"5",
            description:"Наргиле с череши",
            contacts:{
                phoneNumber:"0899042745",
                address:"жк. Стрелбище блок 20 Д",
                names:"Иванка Стоилова"
            },
            comment:"",
            status:statuses.delivered
        },{
            id:"6",
            description:"Наргиле с грозде",
            contacts:{
                phoneNumber:"0899190325",
                address:"Младост 1 ул. Върбичка №3",
                names:"Елизабет Жечева"
            },
            comment:"обадете ми се",
            status:statuses.delivered
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
        const items = this.getOrders().filter(oreder=> oreder.status === statuses.delivered);
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
                                            <Button text="Отбележи върнат" className="btn-success" onClick={()=>this.takeBackSelectedOrder()}/>
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