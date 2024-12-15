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

export const routes: Routes = [
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"flights", component:FlightsComponent, canActivate:[AuthGuard]},
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterNewUserComponent},
    {path:"planes", component:PlanesComponent},
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
        {path:'create', component:CreateNewsRecordComponent, canActivate: [AuthGuard, IsAdminGuard]}
      ]
    },
    {path:"edit-profile", component:EditProfileComponent, canActivate:[AuthGuard]},
    {path:"new-flight", component:NewFlightComponent, canActivate:[AuthGuard, IsAdminGuard]},
    {path:"**", component:PageNotFoundComponent}
];
