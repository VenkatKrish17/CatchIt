import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HostLoginPage } from './host-login';

@NgModule({
  declarations: [
    HostLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(HostLoginPage),
  ],
})
export class HostLoginPageModule {}
