import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HostLivePage } from './host-live';

@NgModule({
  declarations: [
    HostLivePage,
  ],
  imports: [
    IonicPageModule.forChild(HostLivePage),
  ],
})
export class HostLivePageModule {}
