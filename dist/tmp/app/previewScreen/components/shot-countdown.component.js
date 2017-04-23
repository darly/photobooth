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
var photo_booth_status_service_1 = require('../../shared/services/photo-booth-status.service');
var photo_booth_status_names_service_1 = require('../../shared/services/photo-booth-status-names.service');
var web_cam_js_service_1 = require('../../shared/services/web-cam-js.service');
var ShotCountdownComponent = (function () {
    function ShotCountdownComponent(_photoBoothStatus, _webcamJs) {
        this._photoBoothStatus = _photoBoothStatus;
        this._webcamJs = _webcamJs;
        this.isPictureMode = false;
        this.countdownValue = 3;
    }
    ShotCountdownComponent.prototype.setIsPictureMode = function () {
        this.isPictureMode = this._photoBoothStatus.isPictureMode;
        this.checkIfPictureMode();
    };
    ShotCountdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setIsPictureMode();
        this.subscription = this._photoBoothStatus.stausChange$.subscribe(function (status) {
            _this.setIsPictureMode();
        });
    };
    ShotCountdownComponent.prototype.checkIfPictureMode = function () {
        if (this.isPictureMode) {
            this.countdownValue = 3;
            this.startCountdownInterval();
        }
    };
    ShotCountdownComponent.prototype.startCountdownInterval = function () {
        var _this = this;
        this.countdownInterval = setInterval(function () {
            _this.countdown();
        }, 1000);
    };
    ShotCountdownComponent.prototype.countdown = function () {
        if (this.countdownValue === 1) {
            clearInterval(this.countdownInterval);
            this._webcamJs.takePicture();
            this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.EDITMODE.MODENAME);
        }
        else {
            this.countdownValue--;
        }
    };
    ShotCountdownComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShotCountdownComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pb-shot-countdown',
            template: "<span class=\"shot-countdown\" [hidden]=\"!isPictureMode\"> \t{{ countdownValue }} </span>",
            styles: [".shot-countdown{position:absolute;top:27%;left:47%;font-size:200px;font-weight:bolder;color:#fff}"]
        }), 
        __metadata('design:paramtypes', [photo_booth_status_service_1.PhotoBoothStatus, web_cam_js_service_1.WebcamJsService])
    ], ShotCountdownComponent);
    return ShotCountdownComponent;
}());
exports.ShotCountdownComponent = ShotCountdownComponent;
