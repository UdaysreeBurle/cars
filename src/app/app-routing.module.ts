import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { BikesComponent } from './bikes/bikes.component';
import { BookingComponent } from './booking/booking.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { VieworderComponent } from './vieworder/vieworder.component';

import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { LoginComponent } from './login/login.component';
import { ManagevehiclesComponent } from './managevehicles/managevehicles.component';
import { AddvehiclesComponent } from './addvehicles/addvehicles.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'User',component:UserdashboardComponent,
    children:[
      {path:'Cars',component:CarsComponent},
      {path:'Bikes',component:BikesComponent},
      {path:'Booking',component:BookingComponent},
      {path:'Whislist',component:WishlistComponent},
      {path:'Vieworder',component:VieworderComponent},
    
      {path:'Managevehicles',component:ManagevehiclesComponent},
      {path:'Addvehicles',component:AddvehiclesComponent},
      {path:'Admindashboard',component:AdmindashboardComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
