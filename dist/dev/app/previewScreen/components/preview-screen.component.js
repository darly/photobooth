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
    PreviewScreenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pb-preview-screen',
            templateUrl: 'preview-screen.component.html',
            styleUrls: ['preview-screen.component.css'],
        }), 
        __metadata('design:paramtypes', [photo_booth_status_service_1.PhotoBoothStatus, web_cam_js_service_1.WebcamJsService, lang_text_service_1.LangText, photo_booth_photo_strip_service_1.PhotoStrip, router_1.Router])
    ], PreviewScreenComponent);
    return PreviewScreenComponent;
}());
exports.PreviewScreenComponent = PreviewScreenComponent;
;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcmV2aWV3U2NyZWVuL2NvbXBvbmVudHMvcHJldmlldy1zY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEQsZUFBZSxDQUFDLENBQUE7QUFHMUUsMkNBQStCLGtEQUFrRCxDQUFDLENBQUE7QUFDbEYsZ0RBQXlCLHVEQUF1RCxDQUFDLENBQUE7QUFDakYsaURBQW9CLHdEQUF3RCxDQUFDLENBQUE7QUFDN0UsbUNBQThCLDBDQUEwQyxDQUFDLENBQUE7QUFDekUsa0NBQXVCLHlDQUF5QyxDQUFDLENBQUE7QUFDakUsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMseUNBQW1CLGdEQUFnRCxDQUFDLENBQUE7QUFVcEU7SUFNQyxnQ0FDUyxpQkFBbUMsRUFDbkMsZ0JBQWlDLEVBQ2pDLFNBQW1CLEVBQ25CLFdBQXVCLEVBQ3ZCLE9BQWU7UUFKZixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRXZCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQywrQkFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLCtCQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLCtCQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDRCxzQkFBSSxrREFBYzthQUFsQjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksK0NBQVc7YUFBZixVQUFnQixjQUFzQjtZQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlEQUFhO2FBQWpCO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDNUIsQ0FBQzthQUNELFVBQWtCLGFBQXFCO1lBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ3JDLENBQUM7OztPQUhBO0lBSUQseUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkEsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDakUsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBdkIsQ0FBdUIsQ0FDakMsQ0FBQztJQUNILENBQUM7SUFDRCxnREFBZSxHQUFmO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxpREFBZ0IsR0FBaEI7UUFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7SUFDM0QsQ0FBQztJQUNELDZDQUFZLEdBQVo7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkIsQ0FBQztJQUNGLENBQUM7SUFDRCw0Q0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyx3Q0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsMkNBQVUsR0FBVjtRQUNDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBQ0QsMENBQVMsR0FBVDtRQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyx3Q0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELDRDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUExRUY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUUzQyxDQUFDOzs4QkFBQTtJQXFFRiw2QkFBQztBQUFELENBbkVBLEFBbUVDLElBQUE7QUFuRVksOEJBQXNCLHlCQW1FbEMsQ0FBQTtBQUFBLENBQUMiLCJmaWxlIjoiYXBwL3ByZXZpZXdTY3JlZW4vY29tcG9uZW50cy9wcmV2aWV3LXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1Nob3RDb3VudGRvd25Db21wb25lbnR9IGZyb20gJy4vU2hvdENvdW50ZG93bi9zaG90LWNvdW50ZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1ByZXZpZXdQaG90b1N0cmlwQ29tcG9uZW50fSBmcm9tICcuL1ByZXZpZXdQaG90b1N0cmlwL3ByZXZpZXctcGhvdG8tc3RyaXAuY29tcG9uZW50JztcclxuaW1wb3J0IHtQaG90b0Jvb3RoU3RhdHVzfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvcGhvdG8tYm9vdGgtc3RhdHVzLnNlcnZpY2UnO1xyXG5pbXBvcnQge1Bob3RvU3RyaXB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9waG90by1ib290aC1waG90by1zdHJpcC5zZXJ2aWNlJztcclxuaW1wb3J0IHtUWVBFU30gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Bob3RvLWJvb3RoLXN0YXR1cy1uYW1lcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtXZWJjYW1Kc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy93ZWItY2FtLWpzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0xhbmdUZXh0fSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvbGFuZy10ZXh0LnNlcnZpY2UnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtMQU5HfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvbGFuZy10ZXh0LXZhbHVlcy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdwYi1wcmV2aWV3LXNjcmVlbicsXHJcblx0dGVtcGxhdGVVcmw6ICdwcmV2aWV3LXNjcmVlbi5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJ3ByZXZpZXctc2NyZWVuLmNvbXBvbmVudC5jc3MnXSxcclxuXHQvLy8qZGlyZWN0aXZlczoqLyBwcm92aWRlcnM6IFtTaG90Q291bnRkb3duQ29tcG9uZW50LCBQcmV2aWV3UGhvdG9TdHJpcENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmV2aWV3U2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHByaXZhdGUgX3N1YnNjcmlwdGlvbjogYW55O1xyXG5cdHByaXZhdGUgX3ByZXZpZXdCdG5UZXh0OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBfc3RhcnRPdmVyVGV4dDogc3RyaW5nO1xyXG5cdHB1YmxpYyBpc1ByZXZpZXdNb2RlOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX3Bob3RvQm9vdGhTdGF0dXM6IFBob3RvQm9vdGhTdGF0dXMsXHJcblx0XHRwcml2YXRlIF93ZWJjYW1Kc1NlcnZpY2U6IFdlYmNhbUpzU2VydmljZSxcclxuXHRcdHByaXZhdGUgX2xhbmdUZXh0OiBMYW5nVGV4dCxcclxuXHRcdHByaXZhdGUgX3Bob3RvU3RyaXA6IFBob3RvU3RyaXAsXHJcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxyXG5cdCkge1xyXG5cdFx0aWYodGhpcy5fcGhvdG9TdHJpcC5nZXROZXh0RW1wdHlQaG90b051bWJlcigpICE9PSAtMSl7XHJcblx0XHRcdHRoaXMudGFrZVBpY1RleHQgPSB0aGlzLl9sYW5nVGV4dC5nZXRUZXh0KExBTkcuVFlQRVMucHJldmlld0J0bik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnRha2VQaWNUZXh0ID0gdGhpcy5fbGFuZ1RleHQuZ2V0VGV4dChMQU5HLlRZUEVTLnByaW50QnRuKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuc3RhcnRPdmVyVGV4dCA9IHRoaXMuX2xhbmdUZXh0LmdldFRleHQoTEFORy5UWVBFUy5zdGFydE92ZXJCdG4pO1xyXG5cdH1cclxuXHRnZXQgcHJldmlld0J0blRleHQoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9wcmV2aWV3QnRuVGV4dDtcclxuXHR9XHJcblx0c2V0IHRha2VQaWNUZXh0KHByZXZpZXdCdG5UZXh0OiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuX3ByZXZpZXdCdG5UZXh0ID0gcHJldmlld0J0blRleHQ7XHJcblx0fVxyXG5cclxuXHRnZXQgc3RhcnRPdmVyVGV4dCgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3N0YXJ0T3ZlclRleHQ7XHJcblx0fVxyXG5cdHNldCBzdGFydE92ZXJUZXh0KHN0YXJ0T3ZlclRleHQ6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fc3RhcnRPdmVyVGV4dCA9IHN0YXJ0T3ZlclRleHQ7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zZXRJc1ByZXZpZXdNb2RlKCk7XHJcblx0XHR0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9waG90b0Jvb3RoU3RhdHVzLnN0YXVzQ2hhbmdlJC5zdWJzY3JpYmUoXHJcblx0XHRcdHN0YXR1cyA9PiB0aGlzLnNldElzUHJldmlld01vZGUoKVxyXG5cdFx0KTtcclxuXHR9XHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0dGhpcy5fd2ViY2FtSnNTZXJ2aWNlLnN0YXJ0U3RyZWFtaW5nKCk7XHJcblx0fVxyXG5cdC8vZ2V0cyB0aGUgbmV3IHZhbHVlIGZyb20gdGhlIHNlcnZpY2VzIGFuZCBmb3JjZXNcclxuXHRzZXRJc1ByZXZpZXdNb2RlKCkge1xyXG5cdFx0dGhpcy5pc1ByZXZpZXdNb2RlID0gdGhpcy5fcGhvdG9Cb290aFN0YXR1cy5pc1ByZXZpZXdNb2RlO1xyXG5cdH1cclxuXHRwcmV2aWV3QnRuQ0IoKXtcclxuXHRcdGlmICh0aGlzLl9waG90b1N0cmlwLmdldE5leHRFbXB0eVBob3RvTnVtYmVyKCkgIT09IC0xKSB7XHJcblx0XHRcdHRoaXMudGFrZVBpY3R1cmUoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucHJpbnRTdHJpcCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHR0YWtlUGljdHVyZSgpIHtcclxuXHRcdHRoaXMuX3Bob3RvQm9vdGhTdGF0dXMuY2hhbmdlU3RhdHVzKFRZUEVTLlBJQ1RVUkVNT0RFLk1PREVOQU1FKTtcclxuXHR9XHJcblx0cHJpbnRTdHJpcCgpe1xyXG5cdFx0d2luZG93LnByaW50KCk7XHJcblx0fVxyXG5cdHN0YXJ0T3Zlcigpe1xyXG5cdFx0dGhpcy5fcGhvdG9TdHJpcC5yZXNldFN0cmlwKCk7XHJcblx0XHR0aGlzLl9waG90b0Jvb3RoU3RhdHVzLmNoYW5nZVN0YXR1cyhUWVBFUy5TUExBU0hTQ1JFRU4uTU9ERU5BTUUpO1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnU3BsYXNoU2NyZWVuJ10pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxufTtcclxuIl19
