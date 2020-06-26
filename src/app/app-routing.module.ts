import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppRouteHomeComponent} from './app-route-home/app-route-home.component';
import {AppRouteProjectsComponent} from './app-route-projects/app-route-projects.component';
import {AppRouteContactComponent} from "./app-route-contact/app-route-contact.component";

const routes: Routes = [
  { path: '', component: AppRouteHomeComponent },
  { path: 'contact', component: AppRouteContactComponent },
  { path: 'projects', component: AppRouteProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
