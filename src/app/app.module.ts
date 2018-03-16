import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GaleriePage } from '../pages/galerie/galerie';
import { DatesPage } from '../pages/dates/dates';
import { ContactPage } from '../pages/contact/contact';
import { ConnexionPage } from '../pages/connexion/connexion';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Contacts } from '@ionic-native/contacts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GaleriePage,
    DatesPage,
    ContactPage,
    ConnexionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GaleriePage,
    DatesPage,
    ContactPage,
    ConnexionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contacts,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
