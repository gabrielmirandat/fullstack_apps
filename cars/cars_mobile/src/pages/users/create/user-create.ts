import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { UsersPage } from '../users'
import { HttpService} from '../../../app/services/http.service'

@Component({
  selector: 'user-create',
  templateUrl: 'user-create.html'
})
export class UserCreatePage {
  private form : FormGroup;
 
  constructor(public navCtrl: NavController, 
              public params: NavParams,
              public formBuilder: FormBuilder,
              private httpService:HttpService) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

  createUser() {
    this.httpService.add('user/add/', this.form.value).subscribe(response => {
      console.log(response.data);
      this.navCtrl.push(UsersPage);
    });
  }
}