import { Aircraft } from "./Aircraft";
import { Airport } from "./Airport";
import { Shipment } from "./Shipment";

export interface Flight
{
    id:string;
    shipments:Shipment[];
    aircraft:Aircraft;
    departuredate:string;
    arrivalDate:string;
    departureAirport:Airport; 
    arrivalAirport:Airport; 
}