import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService} from '../../app/services/http.service'

import {UserCreatePage} from './create/user-create'
import {UserDetailsPage} from './details/user-details'

@Component({
  selector: 'users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: any;
  
  constructor(public navCtrl: NavController, 
              private httpService:HttpService) {
    this.httpService.getAll('users/').subscribe(response => {
      this.users = response.data;
    })
  }

  ngOnInit () {
  }

  createUser() {
    this.navCtrl.push(UserCreatePage);
  }

  viewUser(user) {
    this.navCtrl.push(UserDetailsPage, {
      user:user
    });
  }
}
