import { Aircraft } from "./Aircraft";
import { Airport } from "./Airport";
import { Shipment } from "./Shipment";

export interface Flight
{
    id:string;
    shipments:Shipment[];
    aircraft:Aircraft;
    departureDate:string;
    arrivalDate:string;
    departureAirport:Airport; 
    arrivalAirport:Airport; 
}