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
var photo_booth_photo_strip_service_1 = require('./photo-booth-photo-strip.service');
var router_1 = require('@angular/router');
var WebcamJsService = (function () {
    function WebcamJsService(_photoStrip, _router) {
        this._photoStrip = _photoStrip;
        this._router = _router;
    }
    WebcamJsService.prototype.startStreaming = function () {
        Webcam.set({
            width: window.innerWidth - 40,
            height: window.innerHeight - 40,
            dest_width: 800,
            dest_height: 600,
            image_format: 'jpeg',
            jpeg_quality: 100,
            force_flash: false,
            flip_horiz: true,
            fps: 30
        });
        Webcam.attach('#livePreview');
    };
    WebcamJsService.prototype.stopStreaming = function () {
        Webcam.reset();
    };
    WebcamJsService.prototype.takePicture = function () {
        var _this = this;
        Webcam.snap(function (dataUrl) {
            var index = _this._photoStrip.setNextEmptyPhoto(dataUrl);
            _this._router.navigate(['EditScreen', index]);
        });
    };
    WebcamJsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [photo_booth_photo_strip_service_1.PhotoStrip, router_1.Router])
    ], WebcamJsService);
    return WebcamJsService;
}());
exports.WebcamJsService = WebcamJsService;
