import { Injectable } from '@angular/core';
import { Vehicles } from './vehicles';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehiclesService{ 
vehicle:Vehicles[] = [
  // Cars
  {
    vehicleId: 1,
    vehicleName: "Swift",
    vehicleCompany: "Maruti Suzuki",
    vehiclePrice: 600000,
    availableTime: "9:00 AM - 6:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 5,
    vehicleType: "Car",
    vehicleImage: "https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    rating: 4.5
  },
  {
    vehicleId: 2,
    vehicleName: "City",
    vehicleCompany: "Honda",
    vehiclePrice: 1000000,
    availableTime: "8:00 AM - 5:00 PM",
    fuelType: "Diesel",
    seatingCapacity: 5,
    vehicleType: "Car",
    vehicleImage: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/134287/city-exterior-right-front-three-quarter-77.jpeg?isig=0&q=80&q=80",
    rating: 4.7
  },
  {
    vehicleId: 3,
    vehicleName: "Creta",
    vehicleCompany: "Hyundai",
    vehiclePrice: 1200000,
    availableTime: "7:00 AM - 7:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 7,
    vehicleType: "Car",
    vehicleImage: "https://trident-group.s3.ap-south-1.amazonaws.com/hyundai/models/colors/1705922962.png",
    
    rating: 4.6
  },
  {
    vehicleId: 4,
    vehicleName: "Fortuner",
    vehicleCompany: "Toyota",
    vehiclePrice: 3000000,
    availableTime: "9:00 AM - 8:00 PM",
    fuelType: "Diesel",
    seatingCapacity: 7,
    vehicleType: "Car",
    vehicleImage: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg",
    rating: 4.8
  },
  {
    vehicleId: 5,
    vehicleName: "Kwid",
    vehicleCompany: "Renault",
    vehiclePrice: 500000,
    availableTime: "8:00 AM - 6:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 5,
    vehicleType: "Car",
    vehicleImage: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Renault/KWID/10076/1717586320303/front-left-side-47.jpg",
    rating: 4.3
  },
  {
    vehicleId: 6,
    vehicleName: "Thar",
    vehicleCompany: "Mahindra",
    vehiclePrice: 1500000,
    availableTime: "10:00 AM - 5:00 PM",
    fuelType: "Diesel",
    seatingCapacity: 5,
    vehicleType: "Car",
    vehicleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXckDJ7V-DbnRlry16mnjDKUq673AJqoGdeg&s",
    rating: 4.9
  },

  // Bikes
  {
    vehicleId: 7,
    vehicleName: "Splendor Plus",
    vehicleCompany: "Hero",
    vehiclePrice: 70000,
    availableTime: "7:00 AM - 9:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "https://imgd.aeplcdn.com/211x211/n/cw/ec/15109/splendor-plus-right-side-view-2.png?isig=0&q=80",
    rating: 4.2
  },
  {
    vehicleId: 8,
    vehicleName: "Pulsar 150",
    vehicleCompany: "Bajaj",
    vehiclePrice: 90000,
    availableTime: "6:00 AM - 10:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaX2nZOgNU0OvsvL6imlMydMxMcOy1XHMJiQ&s",
    rating: 4.5
  },
  {
    vehicleId: 9,
    vehicleName: "FZ S V3",
    vehicleCompany: "Yamaha",
    vehiclePrice: 110000,
    availableTime: "8:00 AM - 8:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzrT4FDzoMIrNepCrO_1bPrDqd7f6CIawcHA&s",
    rating: 4.6
  },
  {
    vehicleId: 10,
    vehicleName: "Duke 250",
    vehicleCompany: "KTM",
    vehiclePrice: 200000,
    availableTime: "9:00 AM - 6:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYSuCQJ4sqDj8-4ZTgFrgx5jJgI-QVl-sFA&s",
    rating: 4.7
  },
  {
    vehicleId: 11,
    vehicleName: "Bullet 350",
    vehicleCompany: "Royal Enfield",
    vehiclePrice: 160000,
    availableTime: "10:00 AM - 7:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgy2QB6cn-Cab-zJMfg7pZHzCzxxgljMjSiw&s",
    rating: 4.8
  },
  {
    vehicleId: 12,
    vehicleName: "Apache RTR 160",
    vehicleCompany: "TVS",
    vehiclePrice: 95000,
    availableTime: "8:00 AM - 6:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0augYFWGBGKoMtt37FPjO8xNiZLQtVpS_tA&s",
    rating: 4.4
  }
];
getAllVehicles(){
  return of(this.vehicle);
}
getVehicleById(id:any){
  return this.vehicle.find(vehicle=>vehicle.vehicleId==id)
}
getBikes(){
  return of(this.vehicle.filter(vehicle=>vehicle.vehicleType=="Bike"));
}
getCars(){
  return of(this.vehicle.filter(vehicle=>vehicle.vehicleType=="Car"));
}
addnewVehicle(newVehicle:any){
  this.vehicle.push(newVehicle);
  return "added"
}
updateVehicle(id:any,newVehicle:any){
  let index=this.vehicle.findIndex(vehicle=>vehicle.vehicleId==id);
  this.vehicle.splice(index,1,newVehicle);
  return "updated"
}
deleteVehicle(id:any){
 let index=this.vehicle.findIndex(vehicle=>vehicle.vehicleId==id);
 this.vehicle.splice(index,1)
 return "deleted"
}
}