webpackJsonp([6],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostLivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_service_game_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__leader_board_leader_board__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HostLivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HostLivePage = /** @class */ (function () {
    function HostLivePage(navCtrl, navParams, gameService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameService = gameService;
        this.countdown = -1;
        this.players = [];
        this.gameInfo = this.navParams.get("data");
        this.start_time = new Date(this.gameInfo["game_time"]);
        this.duration = parseInt(this.gameInfo["duration"]);
        this.current_time = new Date();
    }
    HostLivePage.prototype.stopGame = function () {
        console.log("Stopping game");
        this.gameService.stopGame(this.gameInfo['game_code']).subscribe(function (resp) {
            console.log(resp);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__leader_board_leader_board__["a" /* LeaderBoardPage */], { "data": this.players });
    };
    HostLivePage.prototype.refreshData = function () {
        this.current_time = new Date();
        var difference = (this.current_time.getTime() - this.start_time.getTime()) / 1000;
        this.countdown = parseInt("" + (parseInt("" + this.duration) * 60 - difference));
        document.getElementById("timer").innerHTML = "" + this.countdown;
        console.log(difference);
        if (this.countdown == 0) {
            this.stopGame();
            clearInterval(this.timer);
            this.timer = null;
        }
    };
    HostLivePage.prototype.refreshPlayers = function () {
        var _this = this;
        this.gameService.getPlayers(this.gameInfo['game_code']).subscribe(function (resp) {
            _this.players = resp['data'];
            console.log(_this.players);
        });
        if (this.countdown == 0) {
            console.log("refreshing players");
            clearInterval(this.playertimer);
        }
    };
    HostLivePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad HostLivePage');
        document.getElementById("game_code").innerHTML = "" + this.gameInfo["game_code"];
        this.timer = setInterval(function () { _this.refreshData(); }, 1000);
        this.gameService.getPlayers(this.gameInfo['game_code']).subscribe(function (resp) {
            if (resp["status"]) {
                console.log(resp);
                _this.players = resp["data"];
                console.log(resp["data"]);
                _this.playertimer = setInterval(function () { _this.refreshPlayers(); }, 1000);
            }
            else {
                alert("Cannot fetch players");
            }
        });
    };
    HostLivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-host-live',template:/*ion-inline-start:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\pages\host-live\host-live.html"*/'<!--\n  Generated template for the HostLivePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><h1 id="game_code"></h1></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h1 id="timer"></h1>\n<ion-list>\n     <ion-item *ngFor="let player of players" >{{player.nick_name}} <button ion-button outline item-end>{{player.score}}</button></ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\pages\host-live\host-live.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_game_service_game_service__["a" /* GameServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_game_service_game_service__["a" /* GameServiceProvider */]])
    ], HostLivePage);
    return HostLivePage;
}());

//# sourceMappingURL=host-live.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_service_login_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__host_host__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HostLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HostLoginPage = /** @class */ (function () {
    function HostLoginPage(navCtrl, loginServiceProvider, navParams) {
        this.navCtrl = navCtrl;
        this.loginServiceProvider = loginServiceProvider;
        this.navParams = navParams;
        this.registerCredentials = { 'userid': '', 'password': '' };
    }
    HostLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HostLoginPage');
    };
    HostLoginPage.prototype.login_or_register = function () {
        var _this = this;
        console.log(this.registerCredentials);
        // let formData=new FormData()
        // formData.append("userid",this.registerCredentials.userid)
        // formData.append("password",this.registerCredentials.password)
        this.loginServiceProvider.login(this.registerCredentials).subscribe(function (resp) {
            console.log(resp);
            if (resp["status"]) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__host_host__["a" /* HostPage */], {
                    data: resp
                });
            }
        });
    };
    HostLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-host-login',template:/*ion-inline-start:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\pages\host-login\host-login.html"*/'<!--\n  Generated template for the HostLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login/Sign up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="login_or_register()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="userid" name="userid" [(ngModel)]="registerCredentials.userid" required pattern=".{6,10}" title="6 to 10 characters"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required pattern=".{6,10}" title="6 to 10 characters"></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login/Register</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n</ion-content>\n'/*ion-inline-end:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\pages\host-login\host-login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_login_service_login_service__["a" /* LoginServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_login_service_login_service__["a" /* LoginServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HostLoginPage);
    return HostLoginPage;
}());

//# sourceMappingURL=host-login.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_service_game_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__host_live_host_live__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HostPage = /** @class */ (function () {
    function HostPage(navCtrl, navParams, gameService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameService = gameService;
        this.alertCtrl = alertCtrl;
        this.gameObj = { 'game_code': null, 'duration': "5", 'objects': [], 'hosted_by': null };
        this.user = null;
        this.allObjects = [];
        this.gameObj.hosted_by = this.navParams.get("data")["userid"];
        this.allObjects = this.gameService.getAllObjects();
    }
    HostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HostPage');
    };
    HostPage.prototype.host_game = function () {
        var _this = this;
        if (this.gameObj.objects.length < 3) {
            var alert_1 = this.alertCtrl.create({
                title: 'Aiyoh !! ',
                subTitle: 'Too Few Objects for the game! ',
                buttons: ['Add More']
            });
            alert_1.present();
        }
        else {
            this.gameService.startGame(this.gameObj).subscribe(function (resp) {
                console.log(resp);
                if (resp["status"]) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__host_live_host_live__["a" /* HostLivePage */], {
                        'data': resp
                    });
                }
                else {
                    console.log(resp["message"]);
                }
            });
        }
    };
    HostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-host',template:/*ion-inline-start:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\pages\host\host.html"*/'<!--\n  Generated template for the HostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Welcome <span id="userid"></span></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="host_game()" #gameForm="ngForm">\n      <ion-row>\n        <ion-col>\n      <ion-list radio-group [(ngModel)]="gameObj.duration" name="duration" class="item">\n            <ion-list-header>\n                Duration ?\n            </ion-list-header>\n            <ion-item>\n                    <ion-radio value="5" checked></ion-radio>\n                    <ion-label>5 Mins</ion-label>\n            </ion-item>\n            <ion-item>\n                    <ion-radio value="10"></ion-radio>\n                    <ion-label>10 Mins</ion-label>\n            </ion-item>\n            <ion-item>\n                    <ion-radio value="20"></ion-radio>\n                    <ion-label>20 Mins</ion-label>\n            </ion-item>\n      </ion-list>\n      </ion-col>\n      </ion-row>\n      <ion-row>\n      <ion-col>\n      <ion-item>\n       <ion-label>Select Objects</ion-label>\n      <ion-select [(ngModel)]="gameObj.objects" name="objects" okText="Okay" cancelText="Dismiss" multiple="true">\n      <ion-option *ngFor="let member of allObjects" [value]="member">{{member}}</ion-option>\n      </ion-select>\n    </ion-item>\n    </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" >Start !</button>\n        </ion-col>\n    \n      </ion-row>\n      \n    </form>\n</ion-content>\n'/*ion-inline-end:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\pages\host\host.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_game_service_game_service__["a" /* GameServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_game_service_game_service__["a" /* GameServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HostPage);
    return HostPage;
}());

//# sourceMappingURL=host.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game_service_game_service__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the JoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JoinPage = /** @class */ (function () {
    function JoinPage(navCtrl, navParams, gameService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameService = gameService;
        this.game_code = null;
        this.nick_name = null;
    }
    JoinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JoinPage');
    };
    JoinPage.prototype.startGame = function () {
        var _this = this;
        console.log("starting game");
        this.gameService.getActiveGame({ "nick_name": this.nick_name, "game_code": this.game_code }).subscribe(function (resp) {
            console.log(resp);
            if (resp.status) {
                var _data = resp['data'];
                _data['nick_name'] = _this.nick_name;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__game_game__["a" /* GamePage */], { data: _data }, { animate: true, direction: 'forward' });
            }
            else {
                alert(resp.message);
            }
        });
        // if(this.gameid==12345){
        //   this.navCtrl.setRoot(GamePage, {}, {animate: true, direction: 'forward'});
        // }
    };
    JoinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-join',template:/*ion-inline-start:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\pages\join\join.html"*/'<!--\n  Generated template for the JoinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Brace Yourself !! </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="startGame()" #startForm="ngForm">\n<ion-list>\n  <ion-item>\n    <ion-label fixed>Nick Name </ion-label>\n    <ion-input type="text" value="" id="nick_name" name="nick_name" [(ngModel)]="nick_name" pattern="[A-Za-z0-9]{4,6}" required ></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label fixed>Game ID</ion-label>\n    <ion-input type="text" value="" id="game_code" name="game_code" [(ngModel)]="game_code" pattern="[0-9]{6}" required ></ion-input>\n  </ion-item>\n  <ion-item>\n  <button ion-button class="submit-btn" full type="submit"  [disabled]="!startForm.form.valid" > Let\'s Play</button>\n  </ion-item>\n  </ion-list>\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\pages\join\join.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_game_service_game_service__["a" /* GameServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_game_service_game_service__["a" /* GameServiceProvider */]])
    ], JoinPage);
    return JoinPage;
}());

//# sourceMappingURL=join.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tf_utils_mobilenet__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tensorflow_tfjs_core__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_game_service_game_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__leader_board_leader_board__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var GamePage = /** @class */ (function () {
    function GamePage(navCtrl, navParams, gameService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameService = gameService;
        this.videoElement = null;
        this.isRunning = false;
        this.VIDEO_PIXELS = 224;
        this.cameraPaused = false;
        this.objectslist = [];
        this.objectsnamelist = [];
        this.gameInfo = {};
        this.timer = null;
        this.objects_found = 0;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__tf_utils_mobilenet__["a" /* MobileNet */]();
        console.log(this.model);
        console.log(this.gameInfo);
        this.gameInfo = this.navParams.get("data");
        console.log("this");
        this.objectsnamelist = this.gameInfo['objects'];
        for (var i = 0; i < this.objectsnamelist.length; i++) {
            this.objectslist.push({ "label": this.objectsnamelist[i], "found": false });
        }
        this.start_time = new Date(this.gameInfo['game_time']);
        this.duration = parseInt(this.gameInfo['duration']);
        console.log(this.start_time);
        console.log(this.objectslist);
        this.current_time = new Date();
        this.objects_found = 0;
    }
    GamePage.prototype.updateScore = function () {
        document.getElementById("scorer").innerHTML = this.objects_found + "/" + this.objectslist.length + " found";
        console.log("updating score");
        console.log("Calling db");
        this.gameService.putScore({ "game_code": this.gameInfo['game_code'], "nick_name": this.gameInfo["nick_name"], "score": this.objects_found }).subscribe(function (resp) {
            if (resp.status) {
                console.log("updated score");
            }
            else {
                console.log(resp.message);
            }
        });
    };
    GamePage.prototype.stopGame = function () {
        var _this = this;
        alert("Well played ! Game Over !! ");
        this.gameService.getPlayers(this.gameInfo['game_code']).subscribe(function (resp) {
            if (resp["status"]) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__leader_board_leader_board__["a" /* LeaderBoardPage */], { data: resp["data"] }, { animate: true, direction: 'forward' });
            }
            else {
                alert("Some error occured");
            }
        });
    };
    GamePage.prototype.refreshData = function () {
        this.current_time = new Date();
        console.log(this.current_time);
        var difference = (this.current_time.getTime() - this.start_time.getTime()) / 1000;
        var countdown = parseInt("" + (parseInt("" + this.duration) * 60 - difference));
        this.timerbox.innerHTML = "" + countdown;
        console.log(difference);
        if (countdown == 0) {
            this.updateScore();
            clearInterval(this.timer);
            this.stopGame();
        }
    };
    GamePage.prototype.getColor = function (bool) {
        if (bool) {
            return "found";
        }
        else {
            return "notfound";
        }
    };
    GamePage.prototype.setupCamera = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var stream;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({
                                'audio': false,
                                'video': { facingMode: 'environment' }
                            })];
                    case 1:
                        stream = _a.sent();
                        window.stream = stream;
                        this.videoElement.srcObject = stream;
                        return [2 /*return*/, new Promise(function (resolve) {
                                _this.videoElement.onloadedmetadata = function () {
                                    resolve([_this.videoElement.videoWidth,
                                        _this.videoElement.videoHeight]);
                                };
                            })];
                    case 2: return [2 /*return*/, null];
                }
            });
        });
    };
    /**
     * Adjusts the video element width and height to align with the native
     * screen aspect ratio while also constraining it to the amount of pixel
     * we use for our training data.
     *
     * @param width The video element native width.
     * @param height The video element native height.
     */
    GamePage.prototype.setupVideoDimensions = function (width, height) {
        this.aspectRatio = width / height;
        if (width >= height) {
            this.videoElement.height = this.VIDEO_PIXELS;
            this.videoElement.width = this.aspectRatio * this.VIDEO_PIXELS;
        }
        else {
            this.videoElement.width = this.VIDEO_PIXELS;
            this.videoElement.height = this.VIDEO_PIXELS / this.aspectRatio;
        }
    };
    GamePage.prototype.warmUpModel = function () {
        console.log("Warming up model");
        this.model.predict(__WEBPACK_IMPORTED_MODULE_3__tensorflow_tfjs_core__["_68" /* zeros */]([this.VIDEO_PIXELS, this.VIDEO_PIXELS, 3]));
    };
    GamePage.prototype.pauseCamera = function () {
        if (!this.cameraPaused) {
            this.videoElement.pause();
            this.cameraPaused = true;
        }
    };
    GamePage.prototype.unPauseCamera = function () {
        if (this.cameraPaused) {
            this.videoElement.play();
            this.cameraPaused = false;
        }
    };
    GamePage.prototype.validateAndUpdate = function (topK) {
        for (var i = 0; i < topK.length; i++) {
            var index = this.objectsnamelist.indexOf(topK[i].label.toLowerCase());
            console.log(topK[i].label);
            if (index >= 0) {
                this.objectsnamelist.splice(index, 1);
                this.objects_found += 1;
                this.objectslist[index].found = true;
                this.updateScore();
            }
        }
    };
    GamePage.prototype.predict = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, topK;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isRunning) return [3 /*break*/, 2];
                        result = __WEBPACK_IMPORTED_MODULE_3__tensorflow_tfjs_core__["_59" /* tidy */](function () {
                            // For UX reasons we spread the video element to 100% of the screen
                            // but our traning data is trained against 244px images. Before we
                            // send image data from the camera to the predict engine we slice a
                            // 244 pixel area out of the center of the camera screen to ensure
                            // better matching against our model.
                            var pixels = __WEBPACK_IMPORTED_MODULE_3__tensorflow_tfjs_core__["O" /* fromPixels */](_this.videoElement);
                            var centerHeight = pixels.shape[0] / 2;
                            var beginHeight = centerHeight - (_this.VIDEO_PIXELS / 2);
                            var centerWidth = pixels.shape[1] / 2;
                            var beginWidth = centerWidth - (_this.VIDEO_PIXELS / 2);
                            var pixelsCropped = pixels.slice([beginHeight, beginWidth, 0], [_this.VIDEO_PIXELS, _this.VIDEO_PIXELS, 3]);
                            return _this.model.predict(pixelsCropped);
                        });
                        return [4 /*yield*/, this.model.getTopKClasses(result, 3)];
                    case 1:
                        topK = _a.sent();
                        this.validateAndUpdate(topK);
                        requestAnimationFrame(function () { return _this.predict(); });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    GamePage.prototype.isIOS = function () {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    };
    GamePage.prototype.isAndroid = function () {
        return /Android/i.test(navigator.userAgent);
    };
    GamePage.prototype.isMobile = function () {
        return this.isIOS() || this.isAndroid();
    };
    GamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GamePage');
        this.videoElement = document.getElementById("videoelement");
        this.timerbox = document.getElementById("timer");
        console.log(this.videoElement);
        var that = this;
        alert(this.isMobile());
        if (!this.isMobile()) {
            this.videoElement.classList.add("camera-front-facing");
        }
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                console.log(stream);
                console.log(that.videoElement);
                that.videoElement['srcObject'] = stream;
                Promise.all([
                    that.model.load().then(function () { return that.warmUpModel(); }),
                    that.setupCamera().then(function (value) {
                        that.setupVideoDimensions(value[0], value[1]);
                    }),
                ]).then(function (values) {
                    // Both the MobileNet and the camera has been loaded.
                    // We can start the game by starting the predict engine and showing the
                    // game countdown.
                    // NOTE the predict engine will only do calculations if game.isRunning
                    // is set to true. We trigger that inside our countdown Promise.
                    that.isRunning = true;
                    console.log(that);
                    that.current_time = new Date();
                    that.timer = setInterval(function () { that.refreshData(); }, 1000);
                    that.predict();
                });
            })
                .catch(function (error) {
                console.log(error);
                console.log("Something went wrong!");
            });
        }
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\pages\game\game.html"*/'<!--\n  Generated template for the GamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><ion-buttons><button ion-button outline id="timer"></button><button ion-button outline item-end id="scorer">0 found</button></ion-buttons></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n<video autoplay="true" class="camera__element" id="videoelement">\n</video>\n\n<ion-row >\n<button ion-button class="button" [ngClass]="getColor(element.found)" *ngFor="let element of objectslist" >      \n  {{element.label}}</button>\n</ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\pages\game\game.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_game_service_game_service__["a" /* GameServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_game_service_game_service__["a" /* GameServiceProvider */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/game/game.module": [
		449,
		5
	],
	"../pages/host-live/host-live.module": [
		444,
		4
	],
	"../pages/host-login/host-login.module": [
		445,
		3
	],
	"../pages/host/host.module": [
		446,
		2
	],
	"../pages/join/join.module": [
		447,
		1
	],
	"../pages/leader-board/leader-board.module": [
		448,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 197;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginServiceProvider = /** @class */ (function () {
    function LoginServiceProvider(http) {
        this.http = http;
        console.log('Hello LoginServiceProvider Provider');
    }
    LoginServiceProvider.prototype.login = function (formData) {
        return this.http.post('http://192.168.50.34:3000/user/', formData);
    };
    LoginServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LoginServiceProvider);
    return LoginServiceProvider;
}());

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__host_login_host_login__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__join_join__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.navigateToPage = function (page) {
        console.log(page);
        if (page == "host") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__host_login_host_login__["a" /* HostLoginPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__join_join__["a" /* JoinPage */]);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Some App title\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button block (click)="navigateToPage(\'host\')">Host</button>\n  <button ion-button block (click)="navigateToPage(\'join\')">Join</button>\n</ion-content>\n'/*ion-inline-end:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(300);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_host_host__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_host_login_host_login__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_host_live_host_live__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_join_join__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_game_game__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_leader_board_leader_board__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_login_service_login_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_game_service_game_service__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_host_host__["a" /* HostPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_join_join__["a" /* JoinPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_host_login_host_login__["a" /* HostLoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_host_live_host_live__["a" /* HostLivePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_leader_board_leader_board__["a" /* LeaderBoardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/host-live/host-live.module#HostLivePageModule', name: 'HostLivePage', segment: 'host-live', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/host-login/host-login.module#HostLoginPageModule', name: 'HostLoginPage', segment: 'host-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/host/host.module#HostPageModule', name: 'HostPage', segment: 'host', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/join/join.module#JoinPageModule', name: 'JoinPage', segment: 'join', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leader-board/leader-board.module#LeaderBoardPageModule', name: 'LeaderBoardPage', segment: 'leader-board', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_host_host__["a" /* HostPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_join_join__["a" /* JoinPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_host_login_host_login__["a" /* HostLoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_host_live_host_live__["a" /* HostLivePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_leader_board_leader_board__["a" /* LeaderBoardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_game_service_game_service__["a" /* GameServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_login_service_login_service__["a" /* LoginServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileNet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tensorflow_tfjs_core__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tensorflow_tfjs_converter__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scavenger_classes__ = __webpack_require__(418);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var MODEL_FILE_URL = 'assets/model/tensorflowjs_model.pb';
var WEIGHT_MANIFEST_FILE_URL = 'assets/model/weights_manifest.json';
var PREPROCESS_DIVISOR = __WEBPACK_IMPORTED_MODULE_0__tensorflow_tfjs_core__["_33" /* scalar */](255 / 2);
var INPUT_NODE_NAME = 'input';
var OUTPUT_NODE_NAME = 'final_result';
var MobileNet = /** @class */ (function () {
    function MobileNet() {
    }
    MobileNet.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1__tensorflow_tfjs_converter__["a" /* loadFrozenModel */])(MODEL_FILE_URL, WEIGHT_MANIFEST_FILE_URL)];
                    case 1:
                        _a.model = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MobileNet.prototype.dispose = function () {
        if (this.model) {
            this.model.dispose();
        }
    };
    /**
     * Infer through MobileNet, assumes variables have been loaded. This does
     * standard ImageNet pre-processing before inferring through the model. This
     * method returns named activations as well as softmax logits.
     *
     * @param input un-preprocessed input Array.
     * @return The softmax logits.
     */
    MobileNet.prototype.predict = function (input) {
        var preprocessedInput = __WEBPACK_IMPORTED_MODULE_0__tensorflow_tfjs_core__["D" /* div */](__WEBPACK_IMPORTED_MODULE_0__tensorflow_tfjs_core__["_53" /* sub */](input.asType('float32'), PREPROCESS_DIVISOR), PREPROCESS_DIVISOR);
        var reshapedInput = preprocessedInput.reshape([1].concat(preprocessedInput.shape));
        var dict = {};
        dict[INPUT_NODE_NAME] = reshapedInput;
        return this.model.execute(dict, OUTPUT_NODE_NAME);
    };
    MobileNet.prototype.getTopKClasses = function (predictions, topK) {
        var values = predictions.dataSync();
        predictions.dispose();
        var predictionList = [];
        for (var i = 0; i < values.length; i++) {
            predictionList.push({ value: values[i], index: i });
        }
        predictionList = predictionList.sort(function (a, b) {
            return b.value - a.value;
        }).slice(0, topK);
        return predictionList.map(function (x) {
            return { label: __WEBPACK_IMPORTED_MODULE_2__scavenger_classes__["a" /* SCAVENGER_CLASSES */][x.index], value: x.value };
        });
    };
    return MobileNet;
}());

//# sourceMappingURL=mobilenet.js.map

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SCAVENGER_CLASSES; });
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var SCAVENGER_CLASSES = {
    0: 'kimono',
    1: 'truck',
    2: 'plunger',
    3: 'desk',
    4: 'school bus',
    5: 'toaster',
    6: 'shovel',
    7: 'football helmet',
    8: 'building',
    9: 'fire engine',
    10: 'cowboy boot',
    11: 'sleeping bag',
    12: 'airship',
    13: 'spoon',
    14: 'plane',
    15: 'sliding door',
    16: 'china cabinet',
    17: 'vault',
    18: 'bullet train',
    19: 'microwave',
    20: 'theater curtain',
    21: 'barn',
    22: 'oscilloscope',
    23: 'pedestal',
    24: 'lampshade',
    25: 'gondola',
    26: 'valley',
    27: 'zucchini',
    28: 'knot',
    29: 'hot pot',
    30: 'clock',
    31: 'envelope',
    32: 'tray',
    33: 'bassinet',
    34: 'cannon',
    35: 'menu',
    36: 'mouse',
    37: 'stove',
    38: 'barbell',
    39: 'bath towel',
    40: 'handkerchief',
    41: 'pool table',
    42: 'motor scooter',
    43: 'goblet',
    44: 'stone wall',
    45: 'microphone',
    46: 'washer',
    47: 'hand',
    48: 'gown',
    49: 'tennis ball',
    50: 'wig',
    51: 'bathtub',
    52: 'totem pole',
    53: 'shower curtain',
    54: 'broom',
    55: 'measuring cup',
    56: 'mountain tent',
    57: 'table lamp',
    58: 'barrow',
    59: 'golf ball',
    60: 'broccoli',
    61: 'bed',
    62: 'electric fan',
    63: 'flute',
    64: 'tobacco shop',
    65: 'crock pot',
    66: 'harmonica',
    67: 'shoe shop',
    68: 'water jug',
    69: 'ping pong ball',
    70: 'lipstick',
    71: 'dining table',
    72: 'banjo',
    73: 'confectionery',
    74: 'watch',
    75: 'crossword puzzle',
    76: 'modem',
    77: 'saltshaker',
    78: 'tile roof',
    79: 'refrigerator',
    80: 'mailbox',
    81: 'pole',
    82: 'cello',
    83: 'flagpole',
    84: 'water tower',
    85: 'barber chair',
    86: 'yawl',
    87: 'soap dispenser',
    88: 'stretcher',
    89: 'steel drum',
    90: 'bottlecap',
    91: 'bathing cap',
    92: 'comic book',
    93: 'go kart',
    94: 'dam',
    95: 'parallel bars',
    96: 'hand blower',
    97: 'scoreboard',
    98: 'space shuttle',
    99: 'lakeside',
    100: 'ocarina',
    101: 'crutch',
    102: 'cardigan',
    103: 'milk can',
    104: 'pencil box',
    105: 'home theater',
    106: 'feather boa',
    107: 'solar dish',
    108: 'dial telephone',
    109: 'lighter',
    110: 'light bulb',
    111: 'sewing machine',
    112: 'tv',
    113: 'toilet tissue',
    114: 'combination lock',
    115: 'cloak',
    116: 'bowl',
    117: 'croquet ball',
    118: 'container ship',
    119: 'dogsled',
    120: 'lock',
    121: 'potters wheel',
    122: 'plug',
    123: 'horizontal bar',
    124: 'castle',
    125: 'rocking chair',
    126: 'balloon',
    127: 'ramen',
    128: 'crayfish',
    129: 'mixing bowl',
    130: 'oboe',
    131: 'nail',
    132: 'hamburger',
    133: 'patio',
    134: 'spindle',
    135: 'cucumber',
    136: 'window shade',
    137: 'street sign',
    138: 'carousel',
    139: 'rain barrel',
    140: 'barrel',
    141: 'carton',
    142: 'baby bottle',
    143: 'screw',
    144: 'lion',
    145: 'crate',
    146: 'volleyball',
    147: 'flower',
    148: 'shirt',
    149: 'koala',
    150: 'necklace',
    151: 'book',
    152: 'sunglasses',
    153: 'hair spray',
    154: 'bicycle',
    155: 'buckle',
    156: 'shopping basket',
    157: 'dog',
    158: 'cellphone',
    159: 'rubber eraser',
    160: 'golfcart',
    161: 'christmas stocking',
    162: 'hourglass',
    163: 'hammer',
    164: 'pop bottle',
    165: 'candle',
    166: 'spotlight',
    167: 'pickup',
    168: 'pill bottle',
    169: 'can opener',
    170: 'freight car',
    171: 'wardrobe',
    172: 'maraca',
    173: 'matchstick',
    174: 'ant',
    175: 'park bench',
    176: 'teapot',
    177: 'camera',
    178: 'reel',
    179: 'space heater',
    180: 'bow',
    181: 'racket',
    182: 'perfume',
    183: 'scale',
    184: 'hotdog',
    185: 'basketball',
    186: 'sea urchin',
    187: 'umbrella',
    188: 'coral reef',
    189: 'tripod',
    190: 'strawberry',
    191: 'sushi',
    192: 'chime',
    193: 'bus',
    194: 'snowplow',
    195: 'icecream',
    196: 'soccer ball',
    197: 'canoe',
    198: 'velvet',
    199: 'police van',
    200: 'vending machine',
    201: 'fireboat',
    202: 'mailbag',
    203: 'electric locomotive',
    204: 'seashore',
    205: 'glove',
    206: 'cup',
    207: 'plate rack',
    208: 'car wheel',
    209: 'cuirass',
    210: 'projector',
    211: 'mashed potato',
    212: 'espresso maker',
    213: 'pizza',
    214: 'tricycle',
    215: 'steam locomotive',
    216: 'miniskirt',
    217: 'hoopskirt',
    218: 'baseball',
    219: 'volcano',
    220: 'dishwasher',
    221: 'piggy bank',
    222: 'orange',
    223: 'garbage truck',
    224: 'espresso',
    225: 'corn',
    226: 'iron',
    227: 'honeycomb',
    228: 'trombone',
    229: 'apron',
    230: 'ski mask',
    231: 'tree',
    232: 'joystick',
    233: 'flashlight',
    234: 'punching bag',
    235: 'mask',
    236: 'ladybug',
    237: 'burrito',
    238: 'chain',
    239: 'dumbbell',
    240: 'lotion',
    241: 'wallet',
    242: 'lens cap',
    243: 'medicine chest',
    244: 'planetarium',
    245: 'artichoke',
    246: 'snowmobile',
    247: 'guacamole',
    248: 'odometer',
    249: 'screwdriver',
    250: 'mortarboard',
    251: 'cassette player',
    252: 'paintbrush',
    253: 'birdhouse',
    254: 'car',
    255: 'radio',
    256: 'hat',
    257: 'safety pin',
    258: 'fountain',
    259: 'tiger',
    260: 'pinwheel',
    261: 'restaurant',
    262: 'bib',
    263: 'display',
    264: 'cabinet',
    265: 'sundial',
    266: 'tow truck',
    267: 'stage',
    268: 'whistle',
    269: 'mobile home',
    270: 'scorpion',
    271: 'fish',
    272: 'barometer',
    273: 'bucket',
    274: 'jigsaw puzzle',
    275: 'key',
    276: 'pick',
    277: 'band aid',
    278: 'power drill',
    279: 'speedboat',
    280: 'scissors',
    281: 'lemon',
    282: 'mushroom',
    283: 'french horn',
    284: 'bubble',
    285: 'pineapple',
    286: 'wool',
    287: 'shopping cart',
    288: 'gong',
    289: 'tractor',
    290: 'pajama',
    291: 'scarf',
    292: 'cd player',
    293: 'marimba',
    294: 'crib',
    295: 'airliner',
    296: 'cat',
    297: 'ski',
    298: 'laptop',
    299: 'jack o lantern',
    300: 'bread',
    301: 'frying pan',
    302: 'abacus',
    303: 'butcher shop',
    304: 'fries',
    305: 'streetcar',
    306: 'parking meter',
    307: 'shower cap',
    308: 'paper towel',
    309: 'oil filter',
    310: 'pot',
    311: 'beer',
    312: 'greenhouse',
    313: 'strainer',
    314: 'bee',
    315: 'vase',
    316: 'forklift',
    317: 'guitar',
    318: 'pomegranate',
    319: 'backpack',
    320: 'donut',
    321: 'crane',
    322: 'prayer rug',
    323: 'dungeness crab',
    324: 'corkscrew',
    325: 'snorkel',
    326: 'cauliflower',
    327: 'sarong',
    328: 'pencil sharpener',
    329: 'sax',
    330: 'ladle',
    331: 'pants',
    332: 'slot',
    333: 'house',
    334: 'parachute',
    335: 'doormat',
    336: 'window screen',
    337: 'bird',
    338: 'balance beam',
    339: 'coil',
    340: 'giant panda',
    341: 'pillow',
    342: 'disk brake',
    343: 'pirate',
    344: 'aircraft carrier',
    345: 'knee pad',
    346: 'car mirror',
    347: 'trash can',
    348: 'hair slide',
    349: 'pen',
    350: 'door',
    351: 'safe',
    352: 'cassette',
    353: 'swing',
    354: 'plate',
    355: 'banana',
    356: 'crash helmet',
    357: 'drum',
    358: 'face powder',
    359: 'diaper',
    360: 'poncho',
    361: 'quilt',
    362: 'pitcher',
    363: 'toyshop',
    364: 'coat',
    365: 'binoculars',
    366: 'acorn',
    367: 'swimming trunks',
    368: 'rotisserie',
    369: 'abaya',
    370: 'ballplayer',
    371: 'folding chair',
    372: 'water bottle',
    373: 'taco',
    374: 'starfish',
    375: 'spider web',
    376: 'cash machine',
    377: 'hard disc',
    378: 'manhole cover',
    379: 'hamper',
    380: 'letter opener',
    381: 'oxygen mask',
    382: 'cradle',
    383: 'newspaper',
    384: 'groom',
    385: 'radiator',
    386: 'plastic bag',
    387: 'traffic light',
    388: 'bell pepper',
    389: 'cliff',
    390: 'piano',
    391: 'gas pump',
    392: 'sock',
    393: 'swab',
    394: 'magnetic compass',
    395: 'headphones',
    396: 'worm fence',
    397: 'organ',
    398: 'cocktail shaker',
    399: 'snail',
    400: 'slug',
    401: 'hook',
    402: 'shoe',
    403: 'mosque',
    404: 'toilet',
    405: 'vacuum',
    406: 'harp',
    407: 'scuba diver',
    408: 'wine',
    409: 'puck',
    410: 'chiffonier',
    411: 'accordion',
    412: 'remote control',
    413: 'printer',
    414: 'violin',
    415: 'magnifying glass',
    416: 'sofa',
    417: 'sunscreen',
    418: 'sandbar',
    419: 'steel arch bridge',
    420: 'spatula',
    421: 'keyboard',
    422: 'switch',
    423: 'rugby ball',
};
//# sourceMappingURL=scavenger_classes.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GameServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GameServiceProvider = /** @class */ (function () {
    function GameServiceProvider(http) {
        this.http = http;
        this.allObjects = ['mobile', 'cup', 'bottle', 'pen', 'cellphone', 'pencil', 'laptop', 'mouse', 'keyboard', 'sunglasses'];
        console.log('Hello GameServiceProvider Provider');
    }
    GameServiceProvider.prototype.getAllObjects = function () {
        return this.allObjects;
    };
    GameServiceProvider.prototype.startGame = function (gameInfo) {
        console.log(gameInfo);
        return this.http.post('http://192.168.50.34:3000/game/', gameInfo);
    };
    GameServiceProvider.prototype.stopGame = function (game_code) {
        console.log(game_code);
        return this.http.post("http://192.168.50.34:3000/stop_game/", { "game_code": game_code });
    };
    GameServiceProvider.prototype.getActiveGame = function (playerGameInfo) {
        return this.http.post("http://192.168.50.34:3000/get_game/", playerGameInfo);
    };
    GameServiceProvider.prototype.getPlayers = function (gameCode) {
        return this.http.get('http://192.168.50.34:3000/players/' + gameCode);
    };
    GameServiceProvider.prototype.putScore = function (playerInfo) {
        return this.http.post("http://192.168.50.34:3000/score", playerInfo);
    };
    GameServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GameServiceProvider);
    return GameServiceProvider;
}());

//# sourceMappingURL=game-service.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderBoardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LeaderBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeaderBoardPage = /** @class */ (function () {
    function LeaderBoardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.players = [];
        this.players = this.navParams.get("data");
    }
    LeaderBoardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeaderBoardPage');
    };
    LeaderBoardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leader-board',template:/*ion-inline-start:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\pages\leader-board\leader-board.html"*/'<!--\n  Generated template for the LeaderBoardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Winners</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n     <ion-item *ngFor="let player of players" >{{player.nick_name}} <button ion-button outline item-end>{{player.score}}</button></ion-item>\n</ion-list>\n<button ion-button color="primary">Home </button>\n</ion-content>\n'/*ion-inline-end:"E:\STUDIES\AdvRes\ionic_apps\CatchIt\src\pages\leader-board\leader-board.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LeaderBoardPage);
    return LeaderBoardPage;
}());

//# sourceMappingURL=leader-board.js.map

/***/ })

},[279]);
//# sourceMappingURL=main.js.map