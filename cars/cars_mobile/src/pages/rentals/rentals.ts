import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService} from '../../app/services/http.service'

import { RentalCreatePage } from './create/rental-create'

@Component({
  selector: 'rentals',
  templateUrl: 'rentals.html'
})
export class RentalsPage {
  rentals: any[] = [];
  
  constructor(public navCtrl: NavController, 
              private httpService:HttpService) {
      
      console.log('ctor')
      
      this.rentals = [];
    
      this.httpService.getAll('rentalswithuserscars/get/').subscribe(response => {
        this.rentals = response.data;
        console.log(this.rentals)
      })
  }

  ngOnInit () {
  }

  createRental() {
    this.navCtrl.push(RentalCreatePage);
  }

  deleteRental(id, index) {
    this.httpService.delete('rental/delete/', id).subscribe(response => {
      console.log(index);
      this.rentals.splice(index);
    })
  }
}
