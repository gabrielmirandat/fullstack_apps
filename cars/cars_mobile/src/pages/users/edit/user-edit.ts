import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { UsersPage } from '../users'
import { HttpService} from '../../../app/services/http.service'

@Component({
  selector: 'user-edit',
  templateUrl: 'user-edit.html'
})
export class UserEditPage {
  user: any;  
  private form : FormGroup;
 
  constructor(public navCtrl: NavController, 
              public params: NavParams,
              public formBuilder: FormBuilder,
              private httpService:HttpService) {

    this.user = params.get('user');                
    
    this.form = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, Validators.required],
      age: [this.user.age, Validators.required],
      street: [this.user.street, Validators.required],
      city: [this.user.city, Validators.required],
      state: [this.user.state, Validators.required],
    });
  }

  editUser() {
    this.httpService.update('user/edit/', this.user.id, this.form.value).subscribe(response => {
      console.log(response.data);
      this.navCtrl.push(UsersPage);
    });
  }
}