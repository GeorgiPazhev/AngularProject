import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanesComponent } from './planes/planes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { FlightsComponent } from './flights/flights.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterNewUserComponent } from './user/register-new-user/register-new-user.component';
import { LoginComponent } from './user/login/login.component';
import { NewShipmentComponent } from './shipments/new-shipment/new-shipment.component';
import { NewFlightComponent } from './flights/new-flight/new-flight.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { CreateNewsRecordComponent } from './news/create-news-record/create-news-record.component';
import { IsAdminGuard } from './guards/isAdmin.guard';
import { ErrorComponent } from './error/error.component';
import { CreateUpdateAircraftComponent } from './aircraft/create-update-aircraft/create-update-aircraft.component';
import { AirportsComponent } from './airport/airports/airports.component';
import { CreateUpdateAirportComponent } from './airport/create-update-airport/create-update-airport.component';
import { UserListComponent } from './user/user-list/user-list.component';

export const routes: Routes = [
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"flights", component:FlightsComponent, canActivate:[AuthGuard]},
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterNewUserComponent},
    {
      path:'airports',
      children:[
        {path:'', component:AirportsComponent, canActivate:[AuthGuard, IsAdminGuard]},
        {path:'update/:id', component:CreateUpdateAirportComponent, canActivate:[AuthGuard, IsAdminGuard]},
        {path:'create', component:CreateUpdateAirportComponent, canActivate:[AuthGuard, IsAdminGuard]},
      ]
    },
    {
      path:"planes", 
      children:[
        {path:'', component:PlanesComponent },
        {path:'update/:id', component:CreateUpdateAircraftComponent, canActivate:[AuthGuard, IsAdminGuard]},
        {path:'create', component:CreateUpdateAircraftComponent, canActivate:[AuthGuard, IsAdminGuard]}
      ]
      },
    {
        path:"shipments",
        children:[
            {path:'', redirectTo:"/home", pathMatch:"full"},
            {path: ':flightId', component:ShipmentsComponent, canActivate:[AuthGuard]}
        ]
    },
    {
        path: 'new-shipment',
        children: [
          { path: '', redirectTo:"/home", pathMatch:"full" },
          {
            path: ':flightId',
            component: NewShipmentComponent,
            canActivate: [AuthGuard],
          },
        ],
    },
    {
      path: 'news',
      children:[
        {path:'', component:NewsListComponent},
        {path:'details/:id', component:NewsDetailsComponent},
        {path:'create', component:CreateNewsRecordComponent, canActivate: [AuthGuard, IsAdminGuard]},
        {path:'update/:id', component:CreateNewsRecordComponent, canActivate: [AuthGuard, IsAdminGuard]},
      ]
    },
    {path:'user-profiles', component:UserListComponent, canActivate:[AuthGuard, IsAdminGuard]},
    {path:"edit-profile", component:EditProfileComponent, canActivate:[AuthGuard]},
    {path:"new-flight", component:NewFlightComponent, canActivate:[AuthGuard, IsAdminGuard]},
    {path:"error", component:ErrorComponent},
    {path:"**", component:PageNotFoundComponent}
];
