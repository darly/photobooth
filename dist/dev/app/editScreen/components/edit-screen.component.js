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
    function EditScreenComponent(_route, _photoStrip, _router, _photoBoothStatus, _langText, _imageFilter) {
        var _this = this;
        this._route = _route;
        this._photoStrip = _photoStrip;
        this._router = _router;
        this._photoBoothStatus = _photoBoothStatus;
        this._langText = _langText;
        this._imageFilter = _imageFilter;
        this.filterAccept = this._langText.getText(lang_text_values_service_1.LANG.TYPES.keepFilter);
        this.filterCancel = this._langText.getText(lang_text_values_service_1.LANG.TYPES.cancelFilter);
        this.keepImgText = this._langText.getText(lang_text_values_service_1.LANG.TYPES.KeepImg);
        this.retakeText = this._langText.getText(lang_text_values_service_1.LANG.TYPES.retake);
        this.goToFilterText = this._langText.getText(lang_text_values_service_1.LANG.TYPES.goToFilter);
        this._router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.setSelectedPhoto();
            }
        });
    }
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
    Object.defineProperty(EditScreenComponent.prototype, "urlId", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    EditScreenComponent.prototype.ngAfterViewInit = function () {
        this._imageFilter.updateSelectedImage(this.selectedImage.nativeElement, this.selectedPhoto.originalPhotoSrc);
    };
    EditScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sub = this._route.params.subscribe(function (params) {
            _this.urlId = +params['stripIndex'];
            _this.setSelectedPhoto();
        });
        this.setIsFilterMode();
        this._subscription = this._photoBoothStatus.stausChange$.subscribe(function (status) { return _this.setIsFilterMode(); });
    };
    EditScreenComponent.prototype.setSelectedPhoto = function () {
        var id = this.urlId;
        this.selectedPhoto = this._photoStrip.strip[id];
    };
    EditScreenComponent.prototype.stringToArrayOfString = function (str) {
        var arrOfStr = [];
        for (var i = 0; i < str.length; i++) {
            arrOfStr.push(str[i]);
        }
        return arrOfStr;
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
        this._sub.unsubscribe();
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
            templateUrl: 'edit-screen.component.html',
            styleUrls: ['edit-screen.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, photo_booth_photo_strip_service_1.PhotoStrip, router_1.Router, photo_booth_status_service_1.PhotoBoothStatus, lang_text_service_1.LangText, image_filter_service_1.ImageFilter])
    ], EditScreenComponent);
    return EditScreenComponent;
}());
exports.EditScreenComponent = EditScreenComponent;
;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lZGl0U2NyZWVuL2NvbXBvbmVudHMvZWRpdC1zY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUYsZUFBZSxDQUFDLENBQUE7QUFDakcsdUJBQThFLGlCQUFpQixDQUFDLENBQUE7QUFFaEcsZ0RBQXlCLHVEQUF1RCxDQUFDLENBQUE7QUFDakYsMkNBQStCLGtEQUFrRCxDQUFDLENBQUE7QUFDbEYsaURBQW9CLHdEQUF3RCxDQUFDLENBQUE7QUFDN0Usa0NBQXVCLHlDQUF5QyxDQUFDLENBQUE7QUFDakUseUNBQW1CLGdEQUFnRCxDQUFDLENBQUE7QUFDcEUscUNBQTBCLDRDQUE0QyxDQUFDLENBQUE7QUFVdkU7SUFlQyw2QkFDUyxNQUFzQixFQUN0QixXQUF1QixFQUN2QixPQUFlLEVBQ2YsaUJBQW1DLEVBQ25DLFNBQW1CLEVBQ25CLFlBQXlCO1FBckJuQyxpQkFzSUM7UUF0SFMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUVqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLCtCQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsK0JBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFcEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQywrQkFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMs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O0FBQUEsQ0FBQyIsImZpbGUiOiJhcHAvZWRpdFNjcmVlbi9jb21wb25lbnRzL2VkaXQtc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCwgLypPbkFjdGl2YXRlLCovIEFjdGl2YXRlZFJvdXRlLCBFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7UGhvdG99IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9waG90by1ib290aC1waG90by5zZXJ2aWNlJztcclxuaW1wb3J0IHtQaG90b1N0cmlwfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvcGhvdG8tYm9vdGgtcGhvdG8tc3RyaXAuc2VydmljZSc7XHJcbmltcG9ydCB7UGhvdG9Cb290aFN0YXR1c30gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Bob3RvLWJvb3RoLXN0YXR1cy5zZXJ2aWNlJztcclxuaW1wb3J0IHtUWVBFU30gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Bob3RvLWJvb3RoLXN0YXR1cy1uYW1lcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtMYW5nVGV4dH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2xhbmctdGV4dC5zZXJ2aWNlJztcclxuaW1wb3J0IHtMQU5HfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvbGFuZy10ZXh0LXZhbHVlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtJbWFnZUZpbHRlcn0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ltYWdlLWZpbHRlci5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAncGItZWRpdC1zY3JlZW4nLFxyXG5cdHRlbXBsYXRlVXJsOiAnZWRpdC1zY3JlZW4uY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWydlZGl0LXNjcmVlbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0U2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHByaXZhdGUgX3N1YnNjcmlwdGlvbjogYW55O1xyXG5cdHByaXZhdGUgX3N1YjogYW55O1xyXG5cdHByaXZhdGUgX2lkOiBhbnk7XHJcblx0cHJpdmF0ZSBfZmlsdGVyQWNjZXB0OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBfZmlsdGVyQ2FuY2VsOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBfa2VlcEltZ1RleHQ6IHN0cmluZztcclxuXHRwcml2YXRlIF9yZXRha2VUZXh0OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBfZ29Ub0ZpbHRlclRleHQ6IHN0cmluZztcclxuXHRwdWJsaWMgaXNGaWx0ZXJNb2RlOiBib29sZWFuO1xyXG5cdHB1YmxpYyBzZWxlY3RlZFBob3RvOiBQaG90bztcclxuXHJcblx0QFZpZXdDaGlsZCgnc2VsZWN0ZWRJbWFnZScpIHNlbGVjdGVkSW1hZ2U6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZCgndGVzdHMnKSB0ZXN0OiBFbGVtZW50UmVmO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHByaXZhdGUgX3Bob3RvU3RyaXA6IFBob3RvU3RyaXAsXHJcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgX3Bob3RvQm9vdGhTdGF0dXM6IFBob3RvQm9vdGhTdGF0dXMsXHJcblx0XHRwcml2YXRlIF9sYW5nVGV4dDogTGFuZ1RleHQsXHJcblx0XHRwcml2YXRlIF9pbWFnZUZpbHRlcjogSW1hZ2VGaWx0ZXJcclxuXHQpIHtcclxuXHRcdHRoaXMuZmlsdGVyQWNjZXB0ID0gdGhpcy5fbGFuZ1RleHQuZ2V0VGV4dChMQU5HLlRZUEVTLmtlZXBGaWx0ZXIpO1xyXG5cdFx0dGhpcy5maWx0ZXJDYW5jZWwgPSB0aGlzLl9sYW5nVGV4dC5nZXRUZXh0KExBTkcuVFlQRVMuY2FuY2VsRmlsdGVyKTtcclxuXHJcblx0XHR0aGlzLmtlZXBJbWdUZXh0ID0gdGhpcy5fbGFuZ1RleHQuZ2V0VGV4dChMQU5HLlRZUEVTLktlZXBJbWcpO1xyXG5cdFx0dGhpcy5yZXRha2VUZXh0ID0gdGhpcy5fbGFuZ1RleHQuZ2V0VGV4dChMQU5HLlRZUEVTLnJldGFrZSk7XHJcblx0XHR0aGlzLmdvVG9GaWx0ZXJUZXh0ID0gdGhpcy5fbGFuZ1RleHQuZ2V0VGV4dChMQU5HLlRZUEVTLmdvVG9GaWx0ZXIpO1xyXG5cclxuXHRcdHRoaXMuX3JvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG5cdCAgICBpZihldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xyXG5cdFx0XHRcdHRoaXMuc2V0U2VsZWN0ZWRQaG90bygpO1xyXG5cdCAgICB9XHJcblx0ICB9KTtcclxuXHR9XHJcblx0c2V0IGtlZXBJbWdUZXh0KGtlZXBJbWdUZXh0OnN0cmluZyl7XHJcblx0XHR0aGlzLl9rZWVwSW1nVGV4dCA9IGtlZXBJbWdUZXh0O1xyXG5cdH1cclxuXHRnZXQga2VlcEltZ1RleHQoKTpzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2tlZXBJbWdUZXh0O1xyXG5cdH1cclxuXHJcblx0c2V0IHJldGFrZVRleHQocmV0YWtlVGV4dDpzdHJpbmcpIHtcclxuXHRcdHRoaXMuX3JldGFrZVRleHQgPSByZXRha2VUZXh0O1xyXG5cdH1cclxuXHRnZXQgcmV0YWtlVGV4dCgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JldGFrZVRleHQ7XHJcblx0fVxyXG5cclxuXHRzZXQgZ29Ub0ZpbHRlclRleHQoZ29Ub0ZpbHRlclRleHQ6c3RyaW5nKSB7XHJcblx0XHR0aGlzLl9nb1RvRmlsdGVyVGV4dCA9IGdvVG9GaWx0ZXJUZXh0O1xyXG5cdH1cclxuXHRnZXQgZ29Ub0ZpbHRlclRleHQoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9nb1RvRmlsdGVyVGV4dDtcclxuXHR9XHJcblxyXG5cdHNldCBmaWx0ZXJBY2NlcHQoZmlsdGVyQWNjZXB0OiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuX2ZpbHRlckFjY2VwdCA9IGZpbHRlckFjY2VwdDtcclxuXHR9XHJcblx0Z2V0IGZpbHRlckFjY2VwdCgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ZpbHRlckFjY2VwdDtcclxuXHR9XHJcblx0c2V0IGZpbHRlckNhbmNlbChmaWx0ZXJDYW5jZWw6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fZmlsdGVyQ2FuY2VsID0gZmlsdGVyQ2FuY2VsO1xyXG5cdH1cclxuXHRnZXQgZmlsdGVyQ2FuY2VsKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmlsdGVyQ2FuY2VsO1xyXG5cdH1cclxuXHRzZXQgdXJsSWQoIGlkOiBhbnkgKXtcclxuXHRcdHRoaXMuX2lkID0gaWQ7XHJcblx0fVxyXG5cdGdldCB1cmxJZCgpOiBhbnkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2lkO1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCl7XHJcblx0XHR0aGlzLl9pbWFnZUZpbHRlci51cGRhdGVTZWxlY3RlZEltYWdlKHRoaXMuc2VsZWN0ZWRJbWFnZS5uYXRpdmVFbGVtZW50LCB0aGlzLnNlbGVjdGVkUGhvdG8ub3JpZ2luYWxQaG90b1NyYyk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fc3ViID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgdGhpcy51cmxJZCA9ICtwYXJhbXNbJ3N0cmlwSW5kZXgnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcblx0XHRcdCB0aGlzLnNldFNlbGVjdGVkUGhvdG8oKTtcclxuICAgIH0pO1xyXG5cdFx0dGhpcy5zZXRJc0ZpbHRlck1vZGUoKTtcclxuXHRcdHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX3Bob3RvQm9vdGhTdGF0dXMuc3RhdXNDaGFuZ2UkLnN1YnNjcmliZShcclxuXHRcdFx0c3RhdHVzID0+IHRoaXMuc2V0SXNGaWx0ZXJNb2RlKClcclxuXHRcdCk7XHJcblx0fVxyXG5cdHNldFNlbGVjdGVkUGhvdG8gKCl7XHJcblx0XHR2YXIgaWQ6IG51bWJlciA9IHRoaXMudXJsSWQ7XHJcblx0XHR0aGlzLnNlbGVjdGVkUGhvdG8gPSB0aGlzLl9waG90b1N0cmlwLnN0cmlwW2lkXTtcclxuXHR9XHJcblx0c3RyaW5nVG9BcnJheU9mU3RyaW5nKHN0cjogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XHJcblx0XHR2YXIgYXJyT2ZTdHI6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrICl7XHJcblx0XHRcdGFyck9mU3RyLnB1c2goc3RyW2ldKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBhcnJPZlN0cjtcclxuXHR9XHJcblx0cmV0YWtlUGljdHVyZSgpIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWRQaG90by5yZXNldFBob3RvKCk7XHJcblx0XHR0aGlzLl9waG90b0Jvb3RoU3RhdHVzLmNoYW5nZVN0YXR1cyhUWVBFUy5QSUNUVVJFTU9ERS5NT0RFTkFNRSk7XHJcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydQcmV2aWV3U2NyZWVuJ10pO1xyXG5cdH1cclxuXHRrZWVwUGljdHVyZSgpIHtcclxuXHRcdHRoaXMuX3Bob3RvQm9vdGhTdGF0dXMuY2hhbmdlU3RhdHVzKFRZUEVTLlBSRVZJRVdNT0RFLk1PREVOQU1FKTtcclxuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1ByZXZpZXdTY3JlZW4nXSk7XHJcblx0fVxyXG5cdHNhdmVTZWxlY3RlZEZpbHRlcigpe1xyXG5cdFx0dGhpcy5fcGhvdG9TdHJpcC5zdHJpcFt0aGlzLnVybElkXSA9IHRoaXMuX2ltYWdlRmlsdGVyLnNlbGVjdGVkUGhvdG87XHJcblx0XHR0aGlzLmdvVG9FZGl0TW9kZSgpO1xyXG5cdH1cclxuXHRyZW1vdmVTZWxlY3RlZEZpbHRlcigpe1xyXG5cdFx0dGhpcy5zZWxlY3RlZFBob3RvLmZpbHRlciA9ICcnO1xyXG5cdFx0dGhpcy5faW1hZ2VGaWx0ZXIucmVtb3ZlRmlsdGVyRnJvbVNlbGVjdGVkSW1hZ2UoKTtcclxuXHJcblx0XHR0aGlzLmdvVG9FZGl0TW9kZSgpO1xyXG5cdH1cclxuXHRnb1RvRmlsdGVyTW9kZSgpe1xyXG5cdFx0dGhpcy5faW1hZ2VGaWx0ZXIudXBkYXRlU2VsZWN0ZWRJbWFnZSh0aGlzLnNlbGVjdGVkSW1hZ2UubmF0aXZlRWxlbWVudCwgdGhpcy5zZWxlY3RlZFBob3RvLm9yaWdpbmFsUGhvdG9TcmMpO1xyXG5cdFx0dGhpcy5faW1hZ2VGaWx0ZXIuc2VsZWN0ZWRQaG90byA9IHRoaXMuc2VsZWN0ZWRQaG90bztcclxuXHRcdHRoaXMuX3Bob3RvQm9vdGhTdGF0dXMuY2hhbmdlU3RhdHVzKFRZUEVTLkZJTFRFUk1PREUuTU9ERU5BTUUpO1xyXG5cdH1cclxuXHRnb1RvRWRpdE1vZGUoKSB7XHJcblx0XHR0aGlzLl9waG90b0Jvb3RoU3RhdHVzLmNoYW5nZVN0YXR1cyhUWVBFUy5FRElUTU9ERS5NT0RFTkFNRSk7XHJcblx0fVxyXG5cdHNldElzRmlsdGVyTW9kZSgpe1xyXG5cdFx0dGhpcy5pc0ZpbHRlck1vZGUgPSB0aGlzLl9waG90b0Jvb3RoU3RhdHVzLmlzRmlsdGVyTW9kZTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdHRoaXMuX3N1Yi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxufTtcclxuIl19
