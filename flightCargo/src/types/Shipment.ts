import { Currency } from "./Currency";
import { User } from "./User";

export interface Shipment
{
    id:string;
    userId:User; 
    volume:number;
    weight:number;
    price:number;
    currency:Currency;
}