import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService} from '../../app/services/http.service'

import {CarCreatePage} from './create/car-create'
import {CarDetailsPage} from './details/car-details'

@Component({
  selector: 'cars',
  templateUrl: 'cars.html'
})
export class CarsPage {
  cars: any[] = [];
  
  constructor(public navCtrl: NavController, 
              private httpService:HttpService) {
      
      console.log('CONSTRUTOR')

      this.cars = [];
    
      this.httpService.getAll('carswithbrandsmodels/get/').subscribe(response => {
        this.cars = response.data;
      })
  }

  ngOnInit () {
  }

  createCar() {
    this.navCtrl.push(CarCreatePage);
  }

  viewCar(car) {
    this.navCtrl.push(CarDetailsPage, {
      car:car
    });
  }
}
