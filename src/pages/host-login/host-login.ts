import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginServiceProvider} from "../../providers/login-service/login-service"
import {HostPage} from "../host/host"
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
  registerCredentials = { 'userid': '', 'password': '' };
  constructor(public navCtrl: NavController,public loginServiceProvider:LoginServiceProvider, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HostLoginPage');
  }

  login_or_register(){
    console.log(this.registerCredentials)
    // let formData=new FormData()
    // formData.append("userid",this.registerCredentials.userid)
    // formData.append("password",this.registerCredentials.password)
    this.loginServiceProvider.login(this.registerCredentials).subscribe(resp => {
      console.log(resp)
      if(resp["status"]){
        this.navCtrl.push(HostPage,{
          data:resp
        })
      }
    })
    
  }

}
