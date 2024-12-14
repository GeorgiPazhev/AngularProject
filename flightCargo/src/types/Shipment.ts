import { Currency } from "./Currency";
import { User } from "./User";

export interface Shipment
{
    _id:string;
    userId:User; 
    weight:number;
    price:number;
    currency:Currency;
    width:number;
    height:number;
    edge:number;
    flightId:string;
}

export interface ShipmentForPost
{
    userId:string; 
    width:number;
    height:number;
    edge:number;
    weight:number;
    price:number;
    currency:string;
}