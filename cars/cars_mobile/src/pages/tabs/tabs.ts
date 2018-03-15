import { Component } from '@angular/core';

import { UsersPage } from '../users/users';
import { CarsPage } from '../cars/cars';
import { AboutPage } from '../about/about';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UsersPage;
  tab2Root = CarsPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
