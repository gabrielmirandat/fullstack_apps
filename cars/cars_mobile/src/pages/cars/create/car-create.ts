import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { CarsPage } from '../cars'
import { HttpService} from '../../../app/services/http.service'

@Component({
  selector: 'car-create',
  templateUrl: 'car-create.html'
})
export class CarCreatePage {
  private form : FormGroup;
  brands:any[] = [];
  models:any[] = [];
 
  constructor(public navCtrl: NavController, 
              public params: NavParams,
              public formBuilder: FormBuilder,
              private httpService:HttpService) {
    this.form = this.formBuilder.group({
      brand_id: ['', Validators.required],
      model_id: ['', Validators.required],
      chassi_number: ['', Validators.required],
      plate: ['', Validators.required],
      release_year: ['', Validators.required],
    });
  }

  ngOnInit () {
    this.httpService.getAll('brands/get/').subscribe(response => {
      this.brands = response.data;
    });
  }

  createCar() {
    this.httpService.add('car/add/', this.form.value).subscribe(response => {
      console.log(response.data);
      this.navCtrl.push(CarsPage);
    });
  }

  updateModels(brand_id) {
    this.httpService.get('modelsbybrand/', brand_id).subscribe(response => {
      this.models = response.data;
    });
  }
}