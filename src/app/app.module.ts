import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';

import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

var config = {
  apiKey: "AIzaSyDG0wnVEHTE9_uRoIOB8MCXRewga2OX2DU",
  authDomain: "cvapp-fa687.firebaseapp.com",
  databaseURL: "https://cvapp-fa687.firebaseio.com",
  projectId: "project-226352828985",
  storageBucket: "",
  messagingSenderId: "226352828985"
};


@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireModule.initializeApp(config)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
