import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BookingComponent } from './booking/booking.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddvehiclesComponent } from './addvehicles/addvehicles.component';
import { ManagevehiclesComponent } from './managevehicles/managevehicles.component';
import { CarsComponent } from './cars/cars.component';
import { BikesComponent } from './bikes/bikes.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewvehiclesComponent } from './components/viewvehicles/viewvehicles.component' 

@NgModule({
  declarations: [
    AppComponent,
    UserdashboardComponent,
    BookingComponent,
    WishlistComponent,
    VieworderComponent,
    AdmindashboardComponent,
    AddvehiclesComponent,
    ManagevehiclesComponent,
    CarsComponent,
    BikesComponent,
    LoginComponent,
    ServicesComponent,
    ViewvehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
