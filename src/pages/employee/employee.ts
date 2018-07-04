import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import arr from '../../app/arrayT';
import { Task } from '../../app/Task';
import {AlertController} from 'ionic-angular';


/**
 * Generated class for the EmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage {

  arrEmo = arr;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  
  addEmployee = function(name, surname, username,password, id, role){

    let obj = new Task(name, surname, username, password, id, role);
    arr.push(obj);
      
  if(obj != null){
  
  console.log(obj);
  }
     else (obj != null)
      {
        this.navCtrl.setRoot(EmployeePage);
      }
    }

    update(u,name,surname, username,role,id,password){

      let alert = this.alertCtrl.create({
        title: 'Update',
        inputs: [
          {
            name: 'name',
            placeholder: 'data.name'
          },
          {
            name: 'surname',
            placeholder: 'surname'
          },
          {
            name: 'role',
            placeholder: 'role',
          },
          {
            name: 'id',
            placeholder: 'id'
          },

          {
            name: 'username',
            placeholder: 'username'
          },
          {
            name: 'password',
            placeholder: 'password',
          },
            {
              name:'file',
              
            }

        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Update',
            handler: data => {
             let obj = new Task(data.name, data.surname,data.id, data.role, data.username, data.password);
            this.arrEmo.splice(u,1,obj);
            console.log(obj);
            }
          }
        ]
      });
      alert.present();
    }

Delete(u){
    this.arrEmo.splice(u,1);
  }
}
  




