import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EmployeePage} from '../employee/employee';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import arr from '../../app/arrayT';
import { Task } from '../../app/Task';
import { AlertController } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

//condition to access employeePage
Name;
Password;
login = function(username,password){

for(let index = 0; index < arr.length; index++){
    this.Name = arr[index].username;
    this.Password = arr[index].password;
}
      if (username == this.Name && password == this.Password ){
        this.navCtrl.push(EmployeePage);
      }

      else if(name == '' && password == this.Password){
        const alert = this.alertCtrl.create({
          title: 'ERROR MESSAGE!',
          subTitle: 'insert correct username!',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(LoginPage);
      }

      else if(name == this.Name && password == ''){
      
          const alert = this.alertCtrl.create({
            title: 'ERROR MESSAGE!',
            subTitle: 'insert username and password!',
            buttons: ['OK']
          });
          alert.present();
        this.navCtrl.push(LoginPage);
      }

      else{
    
            const alert = this.alertCtrl.create({
              title: ' ERROR MESSAGE!',
              subTitle: ' !',
              buttons: ['OK']
            });
            alert.present();
      this.navCtrl.push(LoginPage);
      }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

      cancel(){
        this.navCtrl.push(SignupPage);
   }
 
}
