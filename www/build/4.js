webpackJsonp([4],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraPageModule", function() { return ExtraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extra__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExtraPageModule = (function () {
    function ExtraPageModule() {
    }
    return ExtraPageModule;
}());
ExtraPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__extra__["a" /* ExtraPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__extra__["a" /* ExtraPage */]),
        ],
    })
], ExtraPageModule);

//# sourceMappingURL=extra.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
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
 * Generated class for the ExtraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExtraPage = (function () {
    function ExtraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExtraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExtraPage');
    };
    return ExtraPage;
}());
ExtraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-extra',template:/*ion-inline-start:"C:\Users\Valentin\Desktop\Ionic 3 App\CVApp\src\pages\extra\extra.html"*/'<!--\n  Generated template for the ExtraPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Activities</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header color=\'light\'>\n      <ion-icon name= \'bicycle\'></ion-icon>\n      Sports\n    </ion-list-header>\n    <ion-item>\n      Snow Board\n    </ion-item>\n    <ion-item>\n      Badminton\n    </ion-item>\n    <ion-item>\n      Running\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header color=\'light\'>\n      <ion-icon name= \'paper-plane\'></ion-icon>\n      Hobbies\n    </ion-list-header>\n    <ion-item>\n      Video Games\n    </ion-item>\n    <ion-item>\n      Programming\n    </ion-item>\n    <ion-item>\n      Movies/ TV shows\n    </ion-item>\n    <ion-item>\n      Music\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<!--\n  Developed by Valentin Buisson (1106329)\n-->\n'/*ion-inline-end:"C:\Users\Valentin\Desktop\Ionic 3 App\CVApp\src\pages\extra\extra.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ExtraPage);

//# sourceMappingURL=extra.js.map

/***/ })

});
//# sourceMappingURL=4.js.map