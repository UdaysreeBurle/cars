import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from '../../Service/vehicles.service';
import { WishlistService } from '../../Service/wishlist.service';
import { OrderService } from '../../Service/order.service';

@Component({
  selector: 'app-viewvehicles',
  templateUrl: './viewvehicles.component.html',
  styleUrl: './viewvehicles.component.css'
})
export class ViewvehiclesComponent {
  vid:any;
vehicle:any;
orderedVehicle:any;
uname:any;
uaddress:any;
utime:any;
neworder:any;
constructor(private route:ActivatedRoute,private service:VehiclesService,private wish:WishlistService,private router:Router,private order:OrderService){}
ngOnInit(){
  this.vid=this.route.snapshot.params['id'];
  console.log(this.vid);
  if(this.vid!=null){
    this.vehicle=this.service.getVehicleById(this.vid);
    console.log(this.vehicle)
  }
}
addtowishlist(vehicle:any){
  this.wish.addtowishlist(vehicle);
  alert("added to wishlist")
  this.router.navigateByUrl('user/wishlist')
}
openModal(vehicle:any){
  this.orderedVehicle=vehicle;
}
orderNow(){
  this.neworder={
    vehicleId:this.orderedVehicle.vehicleId,
    vehicleName:this.orderedVehicle.vehicleName,
    vehiclePrice:this.orderedVehicle.vehiclePrice,
    username:this.uname,
    address:this.uaddress,
    time:this.utime
  }
  console.log(this.neworder)
  this.order.addtoOrders(this.neworder);
  alert("order placed successfully")
}

}
