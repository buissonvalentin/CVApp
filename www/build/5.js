webpackJsonp([5],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvPageModule", function() { return CvPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cv__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CvPageModule = (function () {
    function CvPageModule() {
    }
    return CvPageModule;
}());
CvPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cv__["a" /* CvPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cv__["a" /* CvPage */]),
        ],
    })
], CvPageModule);

//# sourceMappingURL=cv.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CvPage; });
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
 * Generated class for the CvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CvPage = (function () {
    function CvPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CvPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CvPage');
    };
    return CvPage;
}());
CvPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cv',template:/*ion-inline-start:"C:\Users\Valentin\Desktop\Ionic 3 App\CVApp\src\pages\cv\cv.html"*/'<!--\n  Generated template for the CvPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>CV</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name=\'school\' color=\'primary\'></ion-icon>\n      Education\n    </ion-list-header>\n    <ion-item class=\'small\' >\n      2015-2017 Engineering School (ESILV)\n    </ion-item>\n    <ion-item class=\'small\'>\n      2014-2015 Medical school (Paris Sud)\n    </ion-item>\n    <ion-item class="small">\n      2013-2014 Graduate with honours\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n      <ion-list-header>\n          <ion-icon name = \'construct\'></ion-icon>\n          Skills\n        </ion-list-header>\n\n        <ion-item-divider>\n          Language\n        </ion-item-divider>\n        <ion-item class="small">\n            French : mother tongue\n        </ion-item>\n        <ion-item class="small">\n            English : fluent (TOEFL : 637)\n        </ion-item>\n        <ion-item-divider>\n            Computer Science\n        </ion-item-divider>\n        <ion-item class="small">\n            C#, C++, Arduino\n        </ion-item>\n        <ion-item class="small">\n            HTML, CSS, Javascript\n        </ion-item>\n        <ion-item class="small">\n            Ionic 3, Java, Android\n        </ion-item>\n  </ion-list>\n</ion-content>\n\n<!--\n  Developed by Valentin Buisson (1106329)\n-->'/*ion-inline-end:"C:\Users\Valentin\Desktop\Ionic 3 App\CVApp\src\pages\cv\cv.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CvPage);

//# sourceMappingURL=cv.js.map

/***/ })

});
//# sourceMappingURL=5.js.map