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
var photo_booth_photo_strip_service_1 = require('../../shared/services/photo-booth-photo-strip.service');
var photo_booth_status_service_1 = require('../../shared/services/photo-booth-status.service');
var photo_booth_status_names_service_1 = require('../../shared/services/photo-booth-status-names.service');
var lang_text_service_1 = require('../../shared/services/lang-text.service');
var lang_text_values_service_1 = require('../../shared/services/lang-text-values.service');
var image_filter_service_1 = require('../../shared/services/image-filter.service');
var EditScreenComponent = (function () {
    function EditScreenComponent(route, _photoStrip, _router, _photoBoothStatus, _langText, _imageFilter, router) {
        var _this = this;
        this.route = route;
        this._photoStrip = _photoStrip;
        this._router = _router;
        this._photoBoothStatus = _photoBoothStatus;
        this._langText = _langText;
        this._imageFilter = _imageFilter;
        this.router = router;
        this.filterAccept = this._langText.getText(lang_text_values_service_1.LANG.TYPES.keepFilter);
        this.filterCancel = this._langText.getText(lang_text_values_service_1.LANG.TYPES.cancelFilter);
        this.keepImgText = this._langText.getText(lang_text_values_service_1.LANG.TYPES.KeepImg);
        this.retakeText = this._langText.getText(lang_text_values_service_1.LANG.TYPES.retake);
        this.goToFilterText = this._langText.getText(lang_text_values_service_1.LANG.TYPES.goToFilter);
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.setSelectedPhoto();
            }
        });
    }
    EditScreenComponent.prototype.setSelectedPhoto = function () {
        var id = this.urlId;
        this.selectedPhoto = this._photoStrip.strip[id];
    };
    Object.defineProperty(EditScreenComponent.prototype, "keepImgText", {
        get: function () {
            return this._keepImgText;
        },
        set: function (keepImgText) {
            this._keepImgText = keepImgText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditScreenComponent.prototype, "retakeText", {
        get: function () {
            return this._retakeText;
        },
        set: function (retakeText) {
            this._retakeText = retakeText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditScreenComponent.prototype, "goToFilterText", {
        get: function () {
            return this._goToFilterText;
        },
        set: function (goToFilterText) {
            this._goToFilterText = goToFilterText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditScreenComponent.prototype, "filterAccept", {
        get: function () {
            return this._filterAccept;
        },
        set: function (filterAccept) {
            this._filterAccept = filterAccept;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditScreenComponent.prototype, "filterCancel", {
        get: function () {
            return this._filterCancel;
        },
        set: function (filterCancel) {
            this._filterCancel = filterCancel;
        },
        enumerable: true,
        configurable: true
    });
    EditScreenComponent.prototype.stringToArrayOfString = function (str) {
        var arrOfStr = [];
        for (var i = 0; i < str.length; i++) {
            arrOfStr.push(str[i]);
        }
        return arrOfStr;
    };
    Object.defineProperty(EditScreenComponent.prototype, "urlId", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            this.id = id;
        },
        enumerable: true,
        configurable: true
    });
    EditScreenComponent.prototype.ngAfterViewInit = function () {
        this._imageFilter.updateSelectedImage(this.selectedImage.nativeElement, this.selectedPhoto.originalPhotoSrc);
    };
    EditScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.urlId = +params['stripIndex'];
            _this.setSelectedPhoto();
        });
        this.setIsFilterMode();
        this._subscription = this._photoBoothStatus.stausChange$.subscribe(function (status) { return _this.setIsFilterMode(); });
    };
    EditScreenComponent.prototype.retakePicture = function () {
        this.selectedPhoto.resetPhoto();
        this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.PICTUREMODE.MODENAME);
        this._router.navigate(['PreviewScreen']);
    };
    EditScreenComponent.prototype.keepPicture = function () {
        this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.PREVIEWMODE.MODENAME);
        this._router.navigate(['PreviewScreen']);
    };
    EditScreenComponent.prototype.saveSelectedFilter = function () {
        this._photoStrip.strip[this.urlId] = this._imageFilter.selectedPhoto;
        this.goToEditMode();
    };
    EditScreenComponent.prototype.removeSelectedFilter = function () {
        this.selectedPhoto.filter = '';
        this._imageFilter.removeFilterFromSelectedImage();
        this.goToEditMode();
    };
    EditScreenComponent.prototype.goToFilterMode = function () {
        this._imageFilter.updateSelectedImage(this.selectedImage.nativeElement, this.selectedPhoto.originalPhotoSrc);
        this._imageFilter.selectedPhoto = this.selectedPhoto;
        this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.FILTERMODE.MODENAME);
    };
    EditScreenComponent.prototype.goToEditMode = function () {
        this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.EDITMODE.MODENAME);
    };
    EditScreenComponent.prototype.setIsFilterMode = function () {
        this.isFilterMode = this._photoBoothStatus.isFilterMode;
    };
    EditScreenComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
        this.sub.unsubscribe();
    };
    __decorate([
        core_1.ViewChild('selectedImage'), 
        __metadata('design:type', core_1.ElementRef)
    ], EditScreenComponent.prototype, "selectedImage", void 0);
    __decorate([
        core_1.ViewChild('tests'), 
        __metadata('design:type', core_1.ElementRef)
    ], EditScreenComponent.prototype, "test", void 0);
    EditScreenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pb-edit-screen',
            template: "<div class=\"editMode full-page show-overflow\" #tests> \t<div class=\"photoHolder\"> \t\t<div class=\"logo-holder\" [hidden]=\"isFilterMode\"> \t\t\t<img class=\"edit-screen-logo\" src=\"assets/images/edit-screen-left-side-img.png\"> \t\t</div> \t\t<div class=\"filter-side-btn\" [hidden]=\"!isFilterMode\" (click)=\"saveSelectedFilter()\"> \t\t\t{{filterAccept}} \t\t</div>  \t\t<canvas #selectedImage class=\"editing-img\"> \t\t\t<span>NO</span> \t\t</canvas>  \t\t<div class=\"logo-holder\" [hidden]=\"isFilterMode\"> \t\t\t<img class=\"edit-screen-logo\" src=\"assets/images/edit-screen-right-side-img.png\"> \t\t</div> \t\t<div class=\"filter-side-btn right-btn\" [hidden]=\"!isFilterMode\" (click)=\"removeSelectedFilter()\"> \t\t\t{{filterCancel}} \t\t</div> \t</div> \t<div class=\"optionHolder\" [hidden]=\"isFilterMode\"> \t\t<div class=\"editOption separator\" (click)=\"keepPicture()\"> \t\t\t{{keepImgText}} \t\t</div> \t\t<div class=\"editOption separator\" (click)=\"goToFilterMode()\"> \t\t\t{{goToFilterText}} \t\t</div> \t\t<div class=\"editOption separator\" (click)=\"retakePicture()\"> \t\t\t{{retakeText}} \t\t</div> \t</div> </div> <!--<pb-loading-overlay></pb-loading-overlay>-->",
            styles: [".editMode .photoHolder{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.editMode .optionHolder,.editMode .photoHolder{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.editMode .optionHolder{height:72px;background-color:hsla(29,29%,57%,.5);border-radius:5px;font-weight:bolder;font-size:24px;margin-top:10px}.optionHolder .editOption{-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;height:100%}.optionHolder .editOption.separator:not(:last-child){border-right:5px solid #fff}.optionHolder .editOption:before{content:\"\";height:100%;display:inline-block;vertical-align:middle}.editMode img.editing-img{width:640px;height:640px;border-right:5px solid #000;border-radius:5px 5px 0 0;margin:0 20px}.filter-side-btn{background-color:hsla(29,29%,57%,.5);padding:20px;border-radius:10px 0 0 10px;-webkit-flex:1;-ms-flex:1;flex:1;font-size:25px;text-align:center}.filter-side-btn.right-btn{border-radius:0 10px 10px 0}.editing-img{max-width:50%;margin:0 5px;height:auto!important;border-radius:15px}.edit-screen-logo{width:100%}"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, photo_booth_photo_strip_service_1.PhotoStrip, router_1.Router, photo_booth_status_service_1.PhotoBoothStatus, lang_text_service_1.LangText, image_filter_service_1.ImageFilter, router_1.Router])
    ], EditScreenComponent);
    return EditScreenComponent;
}());
exports.EditScreenComponent = EditScreenComponent;
;
