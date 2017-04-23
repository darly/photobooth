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
var ConfigWelcomeScreenConponent = (function () {
    function ConfigWelcomeScreenConponent(_router, _photoBoothStatus, _langText) {
        this._router = _router;
        this._photoBoothStatus = _photoBoothStatus;
        this._langText = _langText;
    }
    ConfigWelcomeScreenConponent.prototype.goToSplash = function () {
        this._router.navigate(['SplashScreen']);
        this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.SPLASHSCREEN.MODENAME);
    };
    ConfigWelcomeScreenConponent.prototype.goToConfig = function () {
        this._router.navigate(['ConfigScreen']);
        this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.CONFIGMODE.MODENAME);
    };
    ConfigWelcomeScreenConponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pb-config-screen',
            template: "<div class=\"config-welcome-screen config-background full-page\"> \t<div class=\"config-welcome-content-holder\"> \t\t<div class=\"text-align-center\"> \t\t\t<span class=\"logo-holder\"> \t\t\t\t<img src=\"assets/images/logo.png\"> \t\t\t</span> \t\t\t<br/> \t\t\t<span class=\"title\"> \t\t\t\tWelcome \t\t\t</span> \t\t</div> \t\t<button class=\"standard-btn no-float-btn previ-config\" (click)=\"goToSplash()\">Use previous configuration</button> \t\t<button class=\"standard-btn no-float-btn new-config\" (click)=\"goToConfig()\">New configaration</button> \t</div> </div>",
            styles: [".config-welcome-screen{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.config-welcome-screen .standard-btn{background-color:#02bcd5;width:50%;border-radius:35px;padding:15px 0;margin:initial}.config-welcome-screen .config-welcome-content-holder{height:300px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%}.config-welcome-screen .logo-holder{background-color:#fff;padding:5px;border-radius:100%;display:inline-block}.config-welcome-screen .logo-holder img{width:42px}"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, photo_booth_status_service_1.PhotoBoothStatus, lang_text_service_1.LangText])
    ], ConfigWelcomeScreenConponent);
    return ConfigWelcomeScreenConponent;
}());
exports.ConfigWelcomeScreenConponent = ConfigWelcomeScreenConponent;
;
