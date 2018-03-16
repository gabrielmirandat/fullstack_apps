import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { CarsPage } from '../cars'
import { HttpService} from '../../../app/services/http.service'

@Component({
  selector: 'car-edit',
  templateUrl: 'car-edit.html'
})
export class CarEditPage {
  car: any;  
  private form : FormGroup;
 
  constructor(public navCtrl: NavController, 
              public params: NavParams,
              public formBuilder: FormBuilder,
              private httpService:HttpService) {

    this.car = params.get('car');                
    
    this.form = this.formBuilder.group({
      chassi_number: [this.car.chassi_number, Validators.required],
      plate: [this.car.plate, Validators.required],
      brand: [this.car.brand, Validators.required],
      model: [this.car.model, Validators.required],
      color: [this.car.color, Validators.required],
      release_year: [this.car.release_year, Validators.required],
    });
  }

  editUser() {
    this.httpService.update('car/edit/', this.car.id, this.form.value).subscribe(response => {
      console.log(response.data);
      this.navCtrl.push(CarsPage);
    });
  }
}