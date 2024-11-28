import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanesComponent } from './planes/planes.component';

export const routes: Routes = [
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"planes", component:PlanesComponent}
];
