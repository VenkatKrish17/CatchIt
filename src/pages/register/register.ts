import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginServiceProvider} from "../../providers/login-service/login-service"
import {HostLoginPage} from "../host-login/host-login"
import { AlertController } from 'ionic-angular';
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
  providers:[LoginServiceProvider]
})
export class RegisterPage {
  registerCredentials = { 'userid': '', 'password': '' };
  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public loginServiceProvider:LoginServiceProvider,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(){
    console.log(this.registerCredentials)
    // let formData=new FormData()
    // formData.append("userid",this.registerCredentials.userid)
    // formData.append("password",this.registerCredentials.password)
    this.loginServiceProvider.register(this.registerCredentials).subscribe(resp => {
      console.log(resp)
      if(resp["status"]){
        console.log(resp)
        let alert = this.alertCtrl.create({
          title: 'Great :) ',
          subTitle: resp["message"],
          buttons: ['Dismiss']
        });
        alert.present();
        this.navCtrl.setRoot(HostLoginPage,{
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
