import { Aircraft } from "./Aircraft";
import { Airport } from "./Airport";
import { Shipment } from "./Shipment";

export interface Flight
{
    _id:string;
    shipments:Shipment[];
    aircraft:Aircraft;
    departureDate:Date;
    arrivalDate:Date;
    departureAirport:Airport; 
    arrivalAirport:Airport; 
}