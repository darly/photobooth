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
var ConfigScreenConponent = (function () {
    function ConfigScreenConponent(_router, _photoBoothStatus, _langText) {
        this._router = _router;
        this._photoBoothStatus = _photoBoothStatus;
        this._langText = _langText;
        this.setConfigDefault();
    }
    ConfigScreenConponent.prototype.goToSplash = function () {
        this._router.navigate(['SplashScreen']);
        this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.SPLASHSCREEN.MODENAME);
    };
    ConfigScreenConponent.prototype.goToConfigWelcome = function () {
    };
    ConfigScreenConponent.prototype.saveConfig = function () {
    };
    ConfigScreenConponent.prototype.splashScreenToggle = function (e) {
        if (e.currentTarget.classList.contains('active')) {
            this.splashScreenToggleText = 'Show';
        }
        else {
            this.splashScreenToggleText = 'Hide';
        }
    };
    ConfigScreenConponent.prototype.hideSplashScreenConfig = function () {
        if (this.splashScreenToggleText === 'Hide') {
            return true;
        }
        return false;
    };
    ConfigScreenConponent.prototype.setConfigDefault = function () {
        this.splashScreenToggleText = 'Show';
    };
    Object.defineProperty(ConfigScreenConponent.prototype, "splashScreenToggleText", {
        get: function () {
            return this._splashScreenToggleText;
        },
        set: function (splashScreenToggleText) {
            this._splashScreenToggleText = splashScreenToggleText;
        },
        enumerable: true,
        configurable: true
    });
    ConfigScreenConponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pb-config-screen',
            template: "<div class=\"config-screen config-background full-page\"> \t<div class=\"config-content\"> \t\t<div class=\"title\"> \t\t\tConfiguration \t\t</div> \t\t<div class=\"single-config-holder \"> \t\t\t<span class=\"config-title config-screen-title\"> \t\t\t\tSplash Screen \t\t\t</span> \t\t\t<span class=\"config-value-holder\"> \t\t\t\t<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"button\" (click)=\"splashScreenToggle($event)\"> \t\t\t\t\t{{splashScreenToggleText}} \t\t\t\t</button> \t\t\t</span> \t\t</div> \t\t<div [class.hide-splash-screen-config]=\"hideSplashScreenConfig()\"> \t\t\t<div class=\"single-config-holder\"> \t\t\t\t<span class=\"config-title\"> \t\t\t\t\tTitle \t\t\t\t</span> \t\t\t\t<span class=\"config-value-holder\"> \t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"\"/> \t\t\t\t</span> \t\t\t</div> \t\t\t<div class=\"single-config-holder\"> \t\t\t\t<span class=\"config-title\"> \t\t\t\t\tLangugues \t\t\t\t</span> \t\t\t\t<span class=\"config-value-holder\"> \t\t\t\t\t<div class=\"btn-group\" data-toggle=\"buttons\"> \t\t\t\t\t\t<label class=\"btn btn-primary active\"> \t\t\t\t\t\t\t<input type=\"checkbox\" autocomplete=\"off\" checked> English \t\t\t\t\t\t</label> \t\t\t\t\t\t<label class=\"btn btn-primary\"> \t\t\t\t\t\t\t<input type=\"checkbox\" autocomplete=\"off\" checked> Spanish \t\t\t\t\t\t</label> \t\t\t\t\t</div> \t\t\t\t</span> \t\t\t</div> \t\t\t<div class=\"single-config-holder\"> \t\t\t\t<span class=\"config-title\"> \t\t\t\t\tSub-text \t\t\t\t</span> \t\t\t\t<span class=\"config-value-holder\"> \t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"\"/> \t\t\t\t</span> \t\t\t</div> \t\t\t<div class=\"single-config-holder\"> \t\t\t\t<span class=\"config-title\"> \t\t\t\t\tBackground \t\t\t\t</span> \t\t\t\t<span class=\"config-value-holder\"> \t\t\t\t\t<input class=\"btn btn-primary\" type=\"file\"> \t\t\t\t</span> \t\t\t</div> \t\t</div> \t\t<div> \t\t\t<div class=\"single-config-holder add-divider-top\"> \t\t\t\t<span class=\"config-title config-screen-title\"> \t\t\t\t\tPreview Screen \t\t\t\t</span> \t\t\t</div> \t\t</div> \t\t<div> \t\t\t<div class=\"single-config-holder add-divider-top\"> \t\t\t\t<span class=\"config-title config-screen-title\"> \t\t\t\t\tEdit Screen \t\t\t\t</span> \t\t\t</div> \t\t\t<div class=\"single-config-holder\"> \t\t\t\t<span class=\"config-title\"> \t\t\t\t\tLeft side logo \t\t\t\t</span> \t\t\t\t<span class=\"config-value-holder\"> \t\t\t\t\t<span class=\"config-value-holder\"> \t\t\t\t\t\t<input class=\"btn btn-primary\" type=\"file\"> \t\t\t\t\t</span> \t\t\t\t</span> \t\t\t</div> \t\t\t<div class=\"single-config-holder\"> \t\t\t\t<span class=\"config-title\"> \t\t\t\t\tRight side logo \t\t\t\t</span> \t\t\t\t<span class=\"config-value-holder\"> \t\t\t\t\t<span class=\"config-value-holder\"> \t\t\t\t\t\t<input class=\"btn btn-primary\" type=\"file\"> \t\t\t\t\t</span> \t\t\t\t</span> \t\t\t</div> \t\t\t<div class=\"add-divider-top config-btn-holder\"> \t\t\t\t<button class=\"btn btn-cancel\" (click)=\"goToConfigWelcome()\">Cancel</button> \t\t\t\t<button class=\"btn btn-primary\" (click)=\"saveConfig()\">Save</button> \t\t\t</div> \t\t</div> \t</div> </div>",
            styles: [".single-config-holder{display:-webkit-flex;display:-ms-flexbox;display:flex;margin:3px 5%;padding-bottom:5px}.config-title{padding-left:5%;font-size:24px}.config-title.config-screen-title{font-size:30px}.config-value-holder{padding-top:5px}.config-title,.config-value-holder{display:inline-block;width:49%}.textbox{width:90%}.config-content{max-height:100%;overflow-y:auto}.hide-splash-screen-config{display:none}.config-btn-holder{margin:3px 5%;text-align:right;padding-top:6px}"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, photo_booth_status_service_1.PhotoBoothStatus, lang_text_service_1.LangText])
    ], ConfigScreenConponent);
    return ConfigScreenConponent;
}());
exports.ConfigScreenConponent = ConfigScreenConponent;
;
