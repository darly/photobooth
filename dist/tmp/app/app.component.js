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
var photo_booth_status_service_1 = require('./shared/services/photo-booth-status.service');
var web_cam_js_service_1 = require('./shared/services/web-cam-js.service');
var photo_booth_photo_strip_service_1 = require('./shared/services/photo-booth-photo-strip.service');
var image_filter_service_1 = require('./shared/services/image-filter.service');
var lang_text_service_1 = require('./shared/services/lang-text.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pb-app',
            moduleId: module.id,
            template: "<router-outlet></router-outlet> <pb-image-filter></pb-image-filter> <div class=\"loader\" id=\"loader\"> \t<img src=\"assets/images/spinning-circles.svg\" width=\"50\" alt=\"\"> </div>",
            providers: [photo_booth_status_service_1.PhotoBoothStatus, web_cam_js_service_1.WebcamJsService, photo_booth_photo_strip_service_1.PhotoStrip, lang_text_service_1.LangText, image_filter_service_1.ImageFilter]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
