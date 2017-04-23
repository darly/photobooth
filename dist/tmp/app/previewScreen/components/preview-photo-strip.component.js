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
var router_1 = require('@angular/router');
var PreviewPhotoStripComponent = (function () {
    function PreviewPhotoStripComponent(photoBoothStatus, _photoStrip, _router) {
        this.photoBoothStatus = photoBoothStatus;
        this._photoStrip = _photoStrip;
        this._router = _router;
    }
    PreviewPhotoStripComponent.prototype.setIsPreviewMode = function () {
        this.isPreviewMode = this.photoBoothStatus.isPreviewMode;
    };
    PreviewPhotoStripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setIsPreviewMode();
        this.photoStrip = this._photoStrip.strip;
        this.subscription = this.photoBoothStatus.stausChange$.subscribe(function (status) { return _this.setIsPreviewMode(); });
    };
    PreviewPhotoStripComponent.prototype.editImage = function (selectedPhoto, i) {
        this._router.navigate(['EditScreen', i]);
    };
    PreviewPhotoStripComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PreviewPhotoStripComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pb-preview-photo-strip',
            template: "<div class=\"photo-strip-preview standard-btn\" [hidden]=\"!isPreviewMode\"> \t<div class=\"logo\"> \t\t<!--<img class=\"logo-top\" src=\"assets/images/wedding_logo_names.png\">--> \t\t<img class=\"logo-top\" src=\"assets/images/photo-strip-top-logo.png\"> \t</div> \t<div [class.show-empty-photo]=\"photo.photoSrc === ''\" *ngFor=\"let photo of photoStrip; let i = index\"> \t\t<img class=\"photo-strip-photo\" *ngIf=\"photo.photoSrc !== '' \" src=\"{{photo.photoSrc}}\" (click)=\"editImage(photo,i)\"/> \t</div> \t<div class=\"logo bottom-item-flex\"> \t\t<!--<img class=\"logo-bottom\" src=\"assets/images/wedding_logo_text.png\">--> \t\t<img class=\"logo-bottom\" src=\"assets/images/photo-strip-bottom-logo.png\"> \t</div> </div>",
            styles: [".photo-strip-preview{max-height:481px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);background-color:hsla(0,0%,100%,.85);left:10%;border:none;box-shadow:7px 6px 5px 0 #7d7d7d;position:absolute;width:200px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.photo-strip-preview .photo-strip-photo,.photo-strip-preview .show-empty-photo{width:90%;margin:6px 5%;border-radius:5px}.photo-strip-preview{text-align:center}.photo-strip-preview .logo .logo-top{width:auto;max-height:75px;max-width:65%;margin-top:10px}.photo-strip-preview .logo .logo-bottom{width:75%;margin-top:15px}.photo-strip-preview .bottom-item-flex{margin-top:auto}.photo-strip-preview .show-empty-photo{border:2px dashed #000;min-height:135px}.logo{display:none}"]
        }), 
        __metadata('design:paramtypes', [photo_booth_status_service_1.PhotoBoothStatus, photo_booth_photo_strip_service_1.PhotoStrip, router_1.Router])
    ], PreviewPhotoStripComponent);
    return PreviewPhotoStripComponent;
}());
exports.PreviewPhotoStripComponent = PreviewPhotoStripComponent;
