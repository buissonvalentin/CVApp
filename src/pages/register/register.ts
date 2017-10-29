import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import  { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  credentials = { email : '', password : ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public fire : AngularFireAuth, public alert : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  // Create an account on the firebase database
  register(){
    let cred = this.credentials;
		if(cred.email != '' &&  cred.email.indexOf('@')>-1 && cred.password.length >= 6){
      this.fire.auth.createUserWithEmailAndPassword(cred.email, cred.password)
      .then(() => {
        this.navCtrl.setRoot('MenuPage');
      })
      .catch(error => {
          this.dispAlert(error.message);
      })
		}
		else{
			this.dispAlert('invalid credential '); 
    }
  }

  // display an alert
  dispAlert(text){
    this.alert.create({
      title : 'Info !',
      message : text,
      buttons : ['OK']
      
    }).present();
  }

}


//Developed by Valentin Buisson (1106329)