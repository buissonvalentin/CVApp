import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentials = { email : '', password : ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public fire : AngularFireAuth, public alert : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // login using an email and password 
  login(){
    let cred = this.credentials;
		if(cred.email != '' &&  cred.email.indexOf('@')>-1 && cred.password.length >= 6){
			 this.fire.auth.signInWithEmailAndPassword(cred.email,cred.password)
			 .then(() => {
        this.navCtrl.setRoot('MenuPage');
        this.dispAlert('login as : ' + cred.email);
			})
			.catch(error => {
				this.dispAlert(error.message)
			});
		}
		else{
			this.dispAlert('invalid credential ');  
    }
  }

  // push the register page
  goToRegister(){
    this.navCtrl.push('RegisterPage');
  }

  // login using google account then set the root page 
  loginGoogle(){
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(() => {
      this.navCtrl.setRoot('MenuPage');
    })
    .catch(error => {
      this.dispAlert(error.message);
    })
  }

  // Display an alert
  dispAlert(text){
    this.alert.create({
      title : 'Info !',
      message : text,
      buttons : ['OK']
      
    }).present();
  }

}


//Developed by Valentin Buisson (1106329)