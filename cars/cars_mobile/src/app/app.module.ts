import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { UserDetailsPage } from '../pages/users/details/user-details';
import { UserCreatePage } from '../pages/users/create/user-create';
import { UserEditPage } from '../pages/users/edit/user-edit';

import { CarsPage } from '../pages/cars/cars';
import { CarDetailsPage } from '../pages/cars/details/car-details';
import { CarCreatePage } from '../pages/cars/create/car-create';

import { RentalsPage } from '../pages/rentals/rentals';
import { RentalCreatePage } from '../pages/rentals/create/rental-create';

import { AboutPage } from '../pages/about/about';

import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    
    UsersPage,
    UserCreatePage,
    UserDetailsPage,
    UserEditPage,

    CarsPage,
    CarCreatePage,
    CarDetailsPage,

    RentalsPage,
    RentalCreatePage,
    
    AboutPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,

    UsersPage,
    UserCreatePage,
    UserDetailsPage,
    UserEditPage,

    CarsPage,
    CarCreatePage,
    CarDetailsPage,

    RentalsPage,
    RentalCreatePage,
    
    AboutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
