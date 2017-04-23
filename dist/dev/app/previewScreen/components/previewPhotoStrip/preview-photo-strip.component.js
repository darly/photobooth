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
var photo_booth_status_service_1 = require('../../../shared/services/photo-booth-status.service');
var photo_booth_photo_strip_service_1 = require('../../../shared/services/photo-booth-photo-strip.service');
var router_1 = require('@angular/router');
var PreviewPhotoStripComponent = (function () {
    function PreviewPhotoStripComponent(_photoBoothStatus, _photoStrip, _router) {
        this._photoBoothStatus = _photoBoothStatus;
        this._photoStrip = _photoStrip;
        this._router = _router;
    }
    PreviewPhotoStripComponent.prototype.setIsPreviewMode = function () {
        this.isPreviewMode = this._photoBoothStatus.isPreviewMode;
    };
    PreviewPhotoStripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setIsPreviewMode();
        this.photoStrip = this._photoStrip.strip;
        this._subscription = this._photoBoothStatus.stausChange$.subscribe(function (status) { return _this.setIsPreviewMode(); });
    };
    PreviewPhotoStripComponent.prototype.editImage = function (selectedPhoto, i) {
        this._router.navigate(['EditScreen', i]);
    };
    PreviewPhotoStripComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    PreviewPhotoStripComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pb-preview-photo-strip',
            templateUrl: 'preview-photo-strip.component.html',
            styleUrls: ['preview-photo-strip.component.css']
        }), 
        __metadata('design:paramtypes', [photo_booth_status_service_1.PhotoBoothStatus, photo_booth_photo_strip_service_1.PhotoStrip, router_1.Router])
    ], PreviewPhotoStripComponent);
    return PreviewPhotoStripComponent;
}());
exports.PreviewPhotoStripComponent = PreviewPhotoStripComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcmV2aWV3U2NyZWVuL2NvbXBvbmVudHMvcHJldmlld1Bob3RvU3RyaXAvcHJldmlldy1waG90by1zdHJpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCwyQ0FBK0IscURBQXFELENBQUMsQ0FBQTtBQUNyRixnREFBeUIsMERBQTBELENBQUMsQ0FBQTtBQUVwRix1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQVN2QztJQUtDLG9DQUNTLGlCQUFtQyxFQUNuQyxXQUF1QixFQUN2QixPQUFlO1FBRmYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQ3JCLENBQUM7SUFDSixxREFBZ0IsR0FBaEI7UUFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7SUFDM0QsQ0FBQztJQUNELDZDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxBLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDakUsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBdkIsQ0FBdUIsQ0FDakMsQ0FBQztJQUNILENBQUM7SUFDRCw4Q0FBUyxHQUFULFVBQVcsYUFBb0IsRUFBRSxDQUFTO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELGdEQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFoQ0Y7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUNoRCxDQUFDOztrQ0FBQTtJQTRCRixpQ0FBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksa0NBQTBCLDZCQTBCdEMsQ0FBQSIsImZpbGUiOiJhcHAvcHJldmlld1NjcmVlbi9jb21wb25lbnRzL3ByZXZpZXdQaG90b1N0cmlwL3ByZXZpZXctcGhvdG8tc3RyaXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtQaG90b0Jvb3RoU3RhdHVzfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcGhvdG8tYm9vdGgtc3RhdHVzLnNlcnZpY2UnO1xyXG5pbXBvcnQge1Bob3RvU3RyaXB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9waG90by1ib290aC1waG90by1zdHJpcC5zZXJ2aWNlJztcclxuaW1wb3J0IHtQaG90b30gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Bob3RvLWJvb3RoLXBob3RvLnNlcnZpY2UnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdwYi1wcmV2aWV3LXBob3RvLXN0cmlwJyxcclxuXHR0ZW1wbGF0ZVVybDogJ3ByZXZpZXctcGhvdG8tc3RyaXAuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWydwcmV2aWV3LXBob3RvLXN0cmlwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByZXZpZXdQaG90b1N0cmlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHB1YmxpYyBpc1ByZXZpZXdNb2RlOiBib29sZWFuO1xyXG5cdHB1YmxpYyBwaG90b1N0cmlwOiBBcnJheTxQaG90bz47XHJcblx0cHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBhbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfcGhvdG9Cb290aFN0YXR1czogUGhvdG9Cb290aFN0YXR1cyxcclxuXHRcdHByaXZhdGUgX3Bob3RvU3RyaXA6IFBob3RvU3RyaXAsXHJcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxyXG5cdCkge31cclxuXHRzZXRJc1ByZXZpZXdNb2RlKCkge1xyXG5cdFx0dGhpcy5pc1ByZXZpZXdNb2RlID0gdGhpcy5fcGhvdG9Cb290aFN0YXR1cy5pc1ByZXZpZXdNb2RlO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc2V0SXNQcmV2aWV3TW9kZSgpO1xyXG5cdFx0dGhpcy5waG90b1N0cmlwID0gdGhpcy5fcGhvdG9TdHJpcC5zdHJpcDtcclxuXHRcdHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX3Bob3RvQm9vdGhTdGF0dXMuc3RhdXNDaGFuZ2UkLnN1YnNjcmliZShcclxuXHRcdFx0c3RhdHVzID0+IHRoaXMuc2V0SXNQcmV2aWV3TW9kZSgpXHJcblx0XHQpO1xyXG5cdH1cclxuXHRlZGl0SW1hZ2UoIHNlbGVjdGVkUGhvdG86IFBob3RvLCBpOiBudW1iZXIgKSB7XHJcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydFZGl0U2NyZWVuJywgaV0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxufVxyXG4iXX0=
