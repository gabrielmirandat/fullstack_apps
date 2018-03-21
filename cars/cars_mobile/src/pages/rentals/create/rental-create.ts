import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { RentalsPage } from '../rentals'
import { HttpService} from '../../../app/services/http.service'

@Component({
  selector: 'rental-create',
  templateUrl: 'rental-create.html'
})
export class RentalCreatePage {
  private form : FormGroup;
  users_available: any[] = [];
  cars_available: any[] = [];
  
  constructor(public navCtrl: NavController, 
              public params: NavParams,
              public formBuilder: FormBuilder,
              private httpService:HttpService) {
    this.form = this.formBuilder.group({
      user_id: ['', Validators.required],
      car_id: ['', Validators.required],
    });

    this.httpService.getAll('usersavailabletorent/').subscribe(response => {
      this.users_available = response.data;
    });

    this.httpService.getAll('carsavailabletorent/').subscribe(response => {
      this.cars_available = response.data;
      console.log(this.cars_available)
    });
  }

  ngOnInit () {
  }

  createRental() {
    console.log(this.form.value)
    this.httpService.add('rental/add/', this.form.value).subscribe(response => {
      console.log(response.data);
      this.navCtrl.push(RentalsPage);
    });
  }
}