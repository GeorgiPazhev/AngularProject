import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanesComponent } from './planes/planes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { FlightsComponent } from './flights/flights.component';

export const routes: Routes = [
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"flights", component:FlightsComponent},
    {path:"planes", component:PlanesComponent},
    {path:"shipments", component:ShipmentsComponent},
    {path:"**", component:PageNotFoundComponent}
];
