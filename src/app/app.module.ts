import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HostPage } from '../pages/host/host';
import { HostLoginPage } from '../pages/host-login/host-login';
import { HostLivePage } from '../pages/host-live/host-live';
import { JoinPage } from '../pages/join/join';
import { GamePage } from '../pages/game/game';
import {LeaderBoardPage} from '../pages/leader-board/leader-board';
import {RegisterPage} from '../pages/register/register';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { GameServiceProvider } from '../providers/game-service/game-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HostPage,
    JoinPage,
    GamePage,
    HostLoginPage,
    HostLivePage,
    LeaderBoardPage,
    RegisterPage
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HostPage,
    JoinPage,
    GamePage,
    HostLoginPage,
    HostLivePage,
    LeaderBoardPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameServiceProvider,
    LoginServiceProvider
  ]
})
export class AppModule {}
