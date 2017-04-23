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
var photo_booth_photo_strip_service_1 = require('../../shared/services/photo-booth-photo-strip.service');
var photo_booth_status_names_service_1 = require('../../shared/services/photo-booth-status-names.service');
var web_cam_js_service_1 = require('../../shared/services/web-cam-js.service');
var lang_text_service_1 = require('../../shared/services/lang-text.service');
var router_1 = require('@angular/router');
var lang_text_values_service_1 = require('../../shared/services/lang-text-values.service');
var PreviewScreenComponent = (function () {
    function PreviewScreenComponent(_photoBoothStatus, _webcamJsService, _langText, _photoStrip, _router) {
        this._photoBoothStatus = _photoBoothStatus;
        this._webcamJsService = _webcamJsService;
        this._langText = _langText;
        this._photoStrip = _photoStrip;
        this._router = _router;
        if (this._photoStrip.getNextEmptyPhotoNumber() !== -1) {
            this.takePicText = this._langText.getText(lang_text_values_service_1.LANG.TYPES.previewBtn);
        }
        else {
            this.takePicText = this._langText.getText(lang_text_values_service_1.LANG.TYPES.printBtn);
        }
        this.startOverText = this._langText.getText(lang_text_values_service_1.LANG.TYPES.startOverBtn);
    }
    PreviewScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setIsPreviewMode();
        this._subscription = this._photoBoothStatus.stausChange$.subscribe(function (status) { return _this.setIsPreviewMode(); });
    };
    PreviewScreenComponent.prototype.ngAfterViewInit = function () {
        this._webcamJsService.startStreaming();
    };
    PreviewScreenComponent.prototype.setIsPreviewMode = function () {
        this.isPreviewMode = this._photoBoothStatus.isPreviewMode;
    };
    PreviewScreenComponent.prototype.previewBtnCB = function () {
        if (this._photoStrip.getNextEmptyPhotoNumber() !== -1) {
            this.takePicture();
        }
        else {
            this.printStrip();
        }
    };
    PreviewScreenComponent.prototype.takePicture = function () {
        this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.PICTUREMODE.MODENAME);
    };
    PreviewScreenComponent.prototype.printStrip = function () {
        window.print();
    };
    PreviewScreenComponent.prototype.startOver = function () {
        this._photoStrip.resetStrip();
        this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.SPLASHSCREEN.MODENAME);
        this._router.navigate(['SplashScreen']);
    };
    PreviewScreenComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    Object.defineProperty(PreviewScreenComponent.prototype, "previewBtnText", {
        get: function () {
            return this._previewBtnText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreviewScreenComponent.prototype, "takePicText", {
        set: function (previewBtnText) {
            this._previewBtnText = previewBtnText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreviewScreenComponent.prototype, "startOverText", {
        get: function () {
            return this._startOverText;
        },
        set: function (startOverText) {
            this._startOverText = startOverText;
        },
        enumerable: true,
        configurable: true
    });
    PreviewScreenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pb-preview-screen',
            template: "<div class=\"camera-stream-container\"> \t<div id=\"livePreview\" class=\"standard-border-radius\"></div> </div> <button type=\"button\" class=\"btn btn-default standard-btn take-picture-btn\"  \t(click)=\"previewBtnCB()\" [hidden]=\"!isPreviewMode\"> \t{{previewBtnText}} </button> <button type=\"button\" class=\"btn btn-default standard-btn start-over-btn\"  \t(click)=\"startOver()\" [hidden]=\"!isPreviewMode\"> \t{{startOverText}} </button> <div class=\"strip-container\"> \t<pb-preview-photo-strip></pb-preview-photo-strip> \t<div class=\"strip-divider\"></div> \t<pb-preview-photo-strip></pb-preview-photo-strip> </div> <pb-shot-countdown></pb-shot-countdown>",
            styles: [".camera-stream-container{margin:20px;display:block}.take-picture-btn{top:50%;right:10%}.start-over-btn{top:10%;right:10%}.strip-divider{position:absolute;top:0;bottom:0;left:50%;height:100%;width:2px;border:1px dashed #000;-webkit-transform:translate(-50%);transform:translate(-50%);display:none}"],
        }), 
        __metadata('design:paramtypes', [photo_booth_status_service_1.PhotoBoothStatus, web_cam_js_service_1.WebcamJsService, lang_text_service_1.LangText, photo_booth_photo_strip_service_1.PhotoStrip, router_1.Router])
    ], PreviewScreenComponent);
    return PreviewScreenComponent;
}());
exports.PreviewScreenComponent = PreviewScreenComponent;
;
