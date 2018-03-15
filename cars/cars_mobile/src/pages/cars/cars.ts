import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService} from '../../app/services/http.service'

@Component({
  selector: 'cars',
  templateUrl: 'cars.html'
})
export class CarsPage {
  cars: any;
  
  constructor(public navCtrl: NavController, 
              private httpService:HttpService) {
  }

  ngOnInit () {
    this.httpService.getAll('cars').subscribe(response => {
      this.cars = response.data;
    })
  }
}
