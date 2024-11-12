import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist:any=[];
getVehicles(){
  return of(this.wishlist);
}
addtowishlist(newvehicle:any){
  this.wishlist.push(newvehicle);
}
getLengthofwishlist(){
  return this.wishlist.length;
}

  constructor() { }
}
