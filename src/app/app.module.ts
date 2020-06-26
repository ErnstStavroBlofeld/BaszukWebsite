import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppLinkComponent } from './app-link/app-link.component';
import { AppRouteHomeComponent } from './app-route-home/app-route-home.component';
import { AppRouteProjectsComponent } from './app-route-projects/app-route-projects.component';
import { AppRouteContactComponent } from './app-route-contact/app-route-contact.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppLinkComponent,
    AppRouteHomeComponent,
    AppRouteProjectsComponent,
    AppRouteContactComponent,
    AppFooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
