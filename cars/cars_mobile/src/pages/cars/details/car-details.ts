import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CarsPage } from '../cars'
import { CarEditPage } from '../edit/car-edit'
import { HttpService} from '../../../app/services/http.service'
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'car-details',
  templateUrl: 'car-details.html'
})
export class CarDetailsPage {
  car: any;
  
  constructor(public navCtrl: NavController, 
              public params: NavParams,
              private httpService:HttpService,
              public alertCtrl: AlertController) {
    this.car = params.get('car');
  }

  editCar() {
    this.navCtrl.push(CarEditPage, {
      car:this.car
    });
  }

  deleteCar() {
    let confirm = this.alertCtrl.create({
      title: 'Tem certeza que deseja remover este carro?',
      buttons: [
        {
          text: 'Não'          
        },
        {
          text: 'Sim',
          handler: () => {
            this.httpService.delete('car/delete/', this.car.id).subscribe(response => {
              this.navCtrl.push(CarsPage);
            })
          }
        }
      ]
    });
    confirm.present();
  }
}