import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MobileNet} from '../../tf_utils/mobilenet';
import * as tfc from '@tensorflow/tfjs-core';
import {GameServiceProvider} from "../../providers/game-service/game-service";
import { LeaderBoardPage } from '../leader-board/leader-board';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface CameraDimentions {
  [index: number]: number;
}

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
  providers: [GameServiceProvider]
})
export class GamePage {
  videoElement=null;
  model:MobileNet;
  isRunning=false;

  VIDEO_PIXELS=224;
  aspectRatio:number;
  cameraPaused=false;
  objectslist=[];
  objectsnamelist=[];
  start_time:Date;
  current_time:Date;
  gameInfo={}
  duration:Number;
  stream:any;
  timer=null;
  objects_found=0;
  // timerbox:HTMLButtonElement;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController,public navParams: NavParams, public gameService:GameServiceProvider) {
    this.model=new MobileNet()
    console.log(this.model)
    console.log(this.gameInfo)
    this.gameInfo=this.navParams.get("data")
    console.log("this")
    this.objectsnamelist=this.gameInfo['objects']
    for(let i=0;i<this.objectsnamelist.length;i++){
      this.objectslist.push({"label":this.objectsnamelist[i],"found":false})
    }
    this.start_time=new Date(this.gameInfo['game_time'])
    this.duration=parseInt(this.gameInfo['duration'])
    console.log(this.start_time)
    console.log(this.objectslist)
    this.current_time=new Date()
    this.objects_found=0
  }
  updateScore(){
    document.getElementById("scorer").innerHTML=this.objects_found+"/"+this.objectslist.length+" found"
    console.log("updating score")
    console.log("Calling db")
    this.gameService.putScore({"game_code":this.gameInfo['game_code'],"nick_name":this.gameInfo["nick_name"],"score":this.objects_found}).subscribe(resp=>{
      if(resp.status){
        console.log("updated score")
      }
      else{
        console.log(resp.message)
      }
    })

  }
  stopGame(){
      console.log(this.stream)
      this.stream.getTracks().forEach(track => track.stop())
      this.videoElement.pause();
      this.isRunning=false;
      let alert = this.alertCtrl.create({
        title: 'Time Up!!',
        subTitle: "Well done ! ",
        buttons: ['Dismiss']
      });
      alert.present();
    this.gameService.getPlayers(this.gameInfo['game_code']).subscribe(resp=>{
      if(resp["status"]){
        this.navCtrl.setRoot(LeaderBoardPage, {data:resp["data"]}, {animate: true, direction: 'forward'});
      }
      else{
       window.alert("Some error occured")
      }
      
    })
    
   
  }
 async refreshData(){
    // this.current_time=new Date()
    console.log(this.current_time)
    let difference =(this.current_time.getTime()-this.start_time.getTime())/1000
    let countdown=parseInt(""+(parseInt(""+this.duration)*60-difference))
    // this.timerbox.innerHTML=""+countdown
    console.log(difference)
    if(countdown==0 || countdown<0){
      this.updateScore()
      clearInterval(this.timer)
      this.stopGame();
    }
  }
  
getColor(bool){
  if(bool){
    return "found"
  }
  else{
    return "notfound"
  }
}

  async setupCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({
        'audio': false,
        'video': {facingMode: 'environment'}
      });
      (<any>window).stream = stream;
      this.videoElement.srcObject = stream;
      return new Promise(resolve => {
        this.videoElement.onloadedmetadata = () => {
          resolve([this.videoElement.videoWidth,
              this.videoElement.videoHeight]);
        };
      });
    }

    return null;
  }

  /**
   * Adjusts the video element width and height to align with the native
   * screen aspect ratio while also constraining it to the amount of pixel
   * we use for our training data.
   *
   * @param width The video element native width.
   * @param height The video element native height.
   */
  setupVideoDimensions(width: number, height: number) {
    this.aspectRatio = width / height;

    if (width >= height) {
      this.videoElement.height = this.VIDEO_PIXELS;
      this.videoElement.width = this.aspectRatio * this.VIDEO_PIXELS;
    } else {
      this.videoElement.width = this.VIDEO_PIXELS;
      this.videoElement.height = this.VIDEO_PIXELS / this.aspectRatio;
    }
  }

  warmUpModel() {
    console.log("Warming up model")
    this.model.predict(
        tfc.zeros([this.VIDEO_PIXELS, this.VIDEO_PIXELS, 3]));
  }
  pauseCamera() {
    if (!this.cameraPaused) {
      this.videoElement.pause();
      this.cameraPaused = true;
    }
  }

  unPauseCamera() {
    if (this.cameraPaused) {
      this.videoElement.play();
      this.cameraPaused = false;
    }
  }

  validateAndUpdate(topK){
    for(let i=0;i<topK.length;i++){
      let index=this.objectsnamelist.indexOf(topK[i].label.toLowerCase())
      if(index>=0){
        if(!this.objectslist[index].found){
          this.objects_found+=1;
          this.objectslist[index].found=true;
          this.updateScore()
        }
        if(this.objects_found==this.objectsnamelist.length){
          let alert = this.alertCtrl.create({
            title: 'Amazing !!',
            subTitle: "You Caught everything! ",
            buttons: ['Okay']
          });
          alert.present();
          this.stopGame()
        }
       
      }
    }

  }
  async predict() {

    // Only do predictions if the game is running, ensures performant view
    // transitions and saves battery life when the game isn't in running mode.
    if (this.isRunning) {


      // Run the tensorflow predict logic inside a tfc.tidy call which helps
      // to clean up memory from tensorflow calls once they are done.
      const result = tfc.tidy(() => {

        // For UX reasons we spread the video element to 100% of the screen
        // but our traning data is trained against 244px images. Before we
        // send image data from the camera to the predict engine we slice a
        // 244 pixel area out of the center of the camera screen to ensure
        // better matching against our model.
        const pixels = tfc.fromPixels(this.videoElement);
        const centerHeight = pixels.shape[0] / 2;
        const beginHeight = centerHeight - (this.VIDEO_PIXELS / 2);
        const centerWidth = pixels.shape[1] / 2;
        const beginWidth = centerWidth - (this.VIDEO_PIXELS / 2);
        const pixelsCropped =
              pixels.slice([beginHeight, beginWidth, 0],
                           [this.VIDEO_PIXELS, this.VIDEO_PIXELS, 3]);
        return this.model.predict(pixelsCropped);
      });

      const topK =
          await this.model.getTopKClasses(result, 3);
      
      this.validateAndUpdate(topK)

    requestAnimationFrame(() => this.predict());
  }
}
 isIOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}


 isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

 isMobile() {
  return this.isIOS() || this.isAndroid();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
    this.videoElement=<HTMLVideoElement> document.getElementById("videoelement")
    // this.timerbox = <HTMLButtonElement> document.getElementById("timer")
    console.log(this.videoElement)
    let that=this;
    //alert(this.isMobile())
    if(!this.isMobile()){
      this.videoElement.classList.add("camera-front-facing")
    }
    if (navigator.mediaDevices.getUserMedia) {
      if(this.isMobile()){
        navigator.mediaDevices.getUserMedia({video: { facingMode: { exact: "environment" } } })
    .then(function(stream) {
      
      that.stream=stream;
      // console.log(stream)
      // console.log(that.videoElement)
      that.videoElement['srcObject'] = stream;
      Promise.all([
        that.model.load().then(() => that.warmUpModel()),
        that.setupCamera().then((value: CameraDimentions) => {
          that.setupVideoDimensions(value[0], value[1]);
        }),
      ]).then(values => {
        // Both the MobileNet and the camera has been loaded.
        // We can start the game by starting the predict engine and showing the
        // game countdown.
        // NOTE the predict engine will only do calculations if game.isRunning
        // is set to true. We trigger that inside our countdown Promise.
        that.isRunning = true;
        //console.log(that)
        that.current_time=new Date();
        that.timer=setInterval(()=>{that.refreshData()},1000)
        that.predict();
      })
    })
    .catch(function(error) {
      console.log(error)
      console.log("Something went wrong!");
    });
      }     
      else{
    navigator.mediaDevices.getUserMedia({video: true})
    .then(function(stream) {
      that.stream=stream;
      // console.log(that.videoElement)
      that.videoElement['srcObject'] = stream;
      Promise.all([
        that.model.load().then(() => that.warmUpModel()),
        that.setupCamera().then((value: CameraDimentions) => {
          that.setupVideoDimensions(value[0], value[1]);
        }),
      ]).then(values => {
        // Both the MobileNet and the camera has been loaded.
        // We can start the game by starting the predict engine and showing the
        // game countdown.
        // NOTE the predict engine will only do calculations if game.isRunning
        // is set to true. We trigger that inside our countdown Promise.
        that.isRunning = true;
        console.log(that)
        that.current_time=new Date();
        that.timer=setInterval(()=>{that.refreshData()},1000)
        that.predict();
      })
    })
    .catch(function(error) {
      console.log(error)
      console.log("Something went wrong!");
    });
  }
  }
  }

}
