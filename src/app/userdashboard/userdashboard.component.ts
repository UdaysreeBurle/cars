import { Component } from '@angular/core';
import { WishlistService } from '../Service/wishlist.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  constructor(private wish:WishlistService){}
  
  len:any
ngDoCheck(){
  this.len=this.wish.getLengthofwishlist();
}

}
