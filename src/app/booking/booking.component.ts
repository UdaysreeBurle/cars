import { Component } from '@angular/core';
import { OrderService } from '../Service/order.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  orders:any;
constructor(private order:OrderService){}

ngOnInit(){
  this.order.getOrders().subscribe((res)=>{
    this.orders=res;
    console.log(this.orders)
  })
}

}
