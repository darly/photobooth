"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var photo_booth_status_service_1 = require('../../shared/services/photo-booth-status.service');
var photo_booth_status_names_service_1 = require('../../shared/services/photo-booth-status-names.service');
var lang_text_service_1 = require('../../shared/services/lang-text.service');
var SplashScreenComponent = (function () {
    function SplashScreenComponent(_router, _photoBoothStatus, _langText) {
        this._router = _router;
        this._photoBoothStatus = _photoBoothStatus;
        this._langText = _langText;
    }
    SplashScreenComponent.prototype.goToPreview = function (lang) {
        this._langText.selectedLang = lang;
        this._router.navigate(['PreviewScreen']);
        this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.PREVIEWMODE.MODENAME);
    };
    SplashScreenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pb-splash-screen',
            template: "<div class=\"splash-screen full-page standard-border-radius\"> \t<h1 class=\"header-text alex-brush\"> \t\tLeah Bella \t\t<br> \t\t1st \t</h1> \t<button type=\"button\" class=\"btn btn-default standard-btn left-start-btn\" (click)=\"goToPreview('EN')\"> \t\tEnglish \t</button> \t<button type=\"button\" class=\"btn btn-default standard-btn right-start-btn\" (click)=\"goToPreview('ES')\"> \t\tEspañol \t</button>  \t<h2 class=\"footer-text\">#LeahBellas1st</h2> </div>",
            styles: [".splash-screen{background:url(assets/images/splash_screen_bg.JPG) no-repeat 50% fixed;background-size:cover}.splash-screen .left-start-btn{top:50%;left:15%}.splash-screen .right-start-btn{top:50%;right:15%}.splash-screen .footer-text,.splash-screen .header-text{position:absolute;text-align:center;width:100%}.splash-screen .header-text{top:10%;font-size:48px;text-shadow:1px 1px 2px #000}.splash-screen .footer-text{bottom:10%;text-shadow:1px 1px 2px #000}"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, photo_booth_status_service_1.PhotoBoothStatus, lang_text_service_1.LangText])
    ], SplashScreenComponent);
    return SplashScreenComponent;
}());
exports.SplashScreenComponent = SplashScreenComponent;
;
