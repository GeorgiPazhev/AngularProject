import { Currency } from "./Currency";
import { User } from "./User";

export interface Shipment
{
    id:string;
    userId:User; 
    weight:number;
    price:number;
    currency:Currency;
    width:number;
    height:number;
    edge:number;
}