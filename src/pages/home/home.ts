import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HostLoginPage} from '../host-login/host-login';
import {JoinPage} from '../join/join';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navigateToPage(page): void {
    console.log(page)
    if(page=="host"){
      this.navCtrl.push(HostLoginPage);
    }
    else{
      this.navCtrl.push(JoinPage);
    }
    
 }

}
