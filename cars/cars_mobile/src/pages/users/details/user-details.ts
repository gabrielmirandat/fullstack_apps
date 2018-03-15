import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UsersPage } from '../users'
import { UserEditPage } from '../edit/user-edit'
import { HttpService} from '../../../app/services/http.service'
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  user: any;
  
  constructor(public navCtrl: NavController, 
              public params: NavParams,
              private httpService:HttpService,
              public alertCtrl: AlertController) {
    this.user = params.get('user');
  }

  editUser() {
    console.log('lol')
    this.navCtrl.push(UserEditPage, {
      user:this.user
    });
  }

  deleteUser() {
    let confirm = this.alertCtrl.create({
      title: 'Tem certeza que deseja remover este usuário?',
      buttons: [
        {
          text: 'Não'          
        },
        {
          text: 'Sim',
          handler: () => {
            this.httpService.delete('users/', this.user.id).subscribe(response => {
              this.navCtrl.push(UsersPage);
            })
          }
        }
      ]
    });
    confirm.present();
  }
}