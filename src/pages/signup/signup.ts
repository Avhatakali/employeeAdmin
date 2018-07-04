import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import arr from '../../app/arrayT';
import { Task } from '../../app/Task';
import { HttpClientModule } from '@angular/common/http';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
 url ='http://www.dealnetcapital.com/files/2014/10/blank-profile.png';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  selectFile = null;

  onFileSelected(event) {
    /*The purpose of this method is to take the file path and convert it 
    to a url that the browser can read */
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {//will fire event if the file has been recieved
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);//converts file path to a url
      console.log(event.target.files);
    }
  }


  signup = function (name, surname, username, password, id, role, file) {

    let obj = new Task(name, surname, username, password, id, role);
    arr.push(obj);
    
    if (obj != null) {

      console.log(obj);
      this.navCtrl.setRoot(LoginPage);
    }

    else if(name == '' || surname == ''){
      this.navCtrl.setRoot(SignupPage);
    }

    else (obj != null)
    {
      this.navCtrl.setRoot(LoginPage);
    }
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

}
