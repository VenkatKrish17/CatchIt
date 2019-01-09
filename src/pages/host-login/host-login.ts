import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginServiceProvider} from "../../providers/login-service/login-service"
import {HostPage} from "../host/host"
import {RegisterPage} from "../register/register"
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the HostLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-host-login',
  templateUrl: 'host-login.html',
  providers:[LoginServiceProvider]
})
export class HostLoginPage {
  loginCredentials = { 'userid': '', 'password': '' };
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,public loginServiceProvider:LoginServiceProvider, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HostLoginPage');
  }
  regpage(){
    this.navCtrl.push(RegisterPage)
  }
  login(){
    console.log(this.loginCredentials)
    // let formData=new FormData()
    // formData.append("userid",this.loginCredentials.userid)
    // formData.append("password",this.loginCredentials.password)
    this.loginServiceProvider.login(this.loginCredentials).subscribe(resp => {
      console.log(resp)
      if(resp["status"]){
        this.navCtrl.setRoot(HostPage,{
          data:resp
        })
      }
      else{
        let alert = this.alertCtrl.create({
          title: 'Aiyoh !',
          subTitle: resp["message"],
          buttons: ['Dismiss']
        });
        alert.present();
      }
    })
    
  }

}
