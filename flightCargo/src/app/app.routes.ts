import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanesComponent } from './planes/planes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { FlightsComponent } from './flights/flights.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"flights", component:FlightsComponent},
    {path:"planes", component:PlanesComponent, canActivate:[AuthGuard]},
    {path:"shipments", component:ShipmentsComponent, canActivate:[AuthGuard]},
    {path:"**", component:PageNotFoundComponent}
];
