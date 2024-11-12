import { Component } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars:any;
  constructor(private service:VehiclesService,private router:Router){}
  ngOnInit(){
    this.service.getCars().subscribe((data)=>{
      this.cars=data;
     console.log(this.cars);
     
    })}
    openvehicle(id:any){
      console.log(id)
      this.router.navigateByUrl('/user/view/'+id)
    }
  
}