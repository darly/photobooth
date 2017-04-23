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
var photo_booth_status_names_service_1 = require('../../../shared/services/photo-booth-status-names.service');
var web_cam_js_service_1 = require('../../../shared/services/web-cam-js.service');
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
        this._subscription = this._photoBoothStatus.stausChange$.subscribe(function (status) {
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
        this._countdownInterval = setInterval(function () {
            _this.countdown();
        }, 1000);
    };
    ShotCountdownComponent.prototype.countdown = function () {
        if (this.countdownValue === 1) {
            clearInterval(this._countdownInterval);
            this._webcamJs.takePicture();
            this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.EDITMODE.MODENAME);
        }
        else {
            this.countdownValue--;
        }
    };
    ShotCountdownComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    ShotCountdownComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pb-shot-countdown',
            templateUrl: 'shot-countdown.component.html',
            styleUrls: ['shot-countdown.component.css']
        }), 
        __metadata('design:paramtypes', [photo_booth_status_service_1.PhotoBoothStatus, web_cam_js_service_1.WebcamJsService])
    ], ShotCountdownComponent);
    return ShotCountdownComponent;
}());
exports.ShotCountdownComponent = ShotCountdownComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcmV2aWV3U2NyZWVuL2NvbXBvbmVudHMvc2hvdENvdW50ZG93bi9zaG90LWNvdW50ZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtRCxlQUFlLENBQUMsQ0FBQTtBQUNuRSwyQ0FBK0IscURBQXFELENBQUMsQ0FBQTtBQUNyRixpREFBb0IsMkRBQTJELENBQUMsQ0FBQTtBQUNoRixtQ0FBOEIsNkNBQTZDLENBQUMsQ0FBQTtBQVM1RTtJQU1DLGdDQUNTLGlCQUFtQyxFQUNuQyxTQUEwQjtRQUQxQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBRWxDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxpREFBZ0IsR0FBaEI7UUFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELHlDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5BLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQ2pFLFVBQUEsTUFBTTtZQUNMLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztJQUNELG1EQUFrQixHQUFsQjtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQy9CLENBQUM7SUFDRixDQUFDO0lBQ0QsdURBQXNCLEdBQXRCO1FBQUEsaUJBSUM7UUFIQSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFFO1lBQ3RDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDVixDQUFDO0lBQ0QsMENBQVMsR0FBVDtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixhQUFhLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLHdDQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ0YsQ0FBQztJQUNELDRDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUF0REY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUMzQyxDQUFDOzs4QkFBQTtJQWtERiw2QkFBQztBQUFELENBaERBLEFBZ0RDLElBQUE7QUFoRFksOEJBQXNCLHlCQWdEbEMsQ0FBQSIsImZpbGUiOiJhcHAvcHJldmlld1NjcmVlbi9jb21wb25lbnRzL3Nob3RDb3VudGRvd24vc2hvdC1jb3VudGRvd24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1Bob3RvQm9vdGhTdGF0dXN9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9waG90by1ib290aC1zdGF0dXMuc2VydmljZSc7XHJcbmltcG9ydCB7VFlQRVN9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9waG90by1ib290aC1zdGF0dXMtbmFtZXMuc2VydmljZSc7XHJcbmltcG9ydCB7V2ViY2FtSnNTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvd2ViLWNhbS1qcy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdwYi1zaG90LWNvdW50ZG93bicsXHJcblx0dGVtcGxhdGVVcmw6ICdzaG90LWNvdW50ZG93bi5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJ3Nob3QtY291bnRkb3duLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNob3RDb3VudGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0cHVibGljIGlzUGljdHVyZU1vZGU6IGJvb2xlYW47XHJcblx0cHVibGljIGNvdW50ZG93blZhbHVlOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfY291bnRkb3duSW50ZXJ2YWw6IGFueTtcclxuXHRwcml2YXRlIF9zdWJzY3JpcHRpb246IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9waG90b0Jvb3RoU3RhdHVzOiBQaG90b0Jvb3RoU3RhdHVzLFxyXG5cdFx0cHJpdmF0ZSBfd2ViY2FtSnM6IFdlYmNhbUpzU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5pc1BpY3R1cmVNb2RlID0gZmFsc2U7XHJcblx0XHR0aGlzLmNvdW50ZG93blZhbHVlID0gMztcclxuXHR9XHJcblx0c2V0SXNQaWN0dXJlTW9kZSgpIHtcclxuXHRcdHRoaXMuaXNQaWN0dXJlTW9kZSA9IHRoaXMuX3Bob3RvQm9vdGhTdGF0dXMuaXNQaWN0dXJlTW9kZTtcclxuXHRcdHRoaXMuY2hlY2tJZlBpY3R1cmVNb2RlKCk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zZXRJc1BpY3R1cmVNb2RlKCk7XHJcblx0XHR0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9waG90b0Jvb3RoU3RhdHVzLnN0YXVzQ2hhbmdlJC5zdWJzY3JpYmUoXHJcblx0XHRcdHN0YXR1cyA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXRJc1BpY3R1cmVNb2RlKCk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cdGNoZWNrSWZQaWN0dXJlTW9kZSgpe1xyXG5cdFx0aWYgKHRoaXMuaXNQaWN0dXJlTW9kZSkge1xyXG5cdFx0XHR0aGlzLmNvdW50ZG93blZhbHVlID0gMztcclxuXHRcdFx0dGhpcy5zdGFydENvdW50ZG93bkludGVydmFsKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHN0YXJ0Q291bnRkb3duSW50ZXJ2YWwoKXtcclxuXHRcdHRoaXMuX2NvdW50ZG93bkludGVydmFsID0gc2V0SW50ZXJ2YWwoICgpID0+e1xyXG5cdFx0XHR0aGlzLmNvdW50ZG93bigpO1xyXG5cdFx0fSwgMTAwMCk7XHJcblx0fVxyXG5cdGNvdW50ZG93bigpe1xyXG5cdFx0aWYgKHRoaXMuY291bnRkb3duVmFsdWUgPT09IDEpIHtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9jb3VudGRvd25JbnRlcnZhbCk7XHJcblx0XHRcdHRoaXMuX3dlYmNhbUpzLnRha2VQaWN0dXJlKCk7XHJcblx0XHRcdHRoaXMuX3Bob3RvQm9vdGhTdGF0dXMuY2hhbmdlU3RhdHVzKFRZUEVTLkVESVRNT0RFLk1PREVOQU1FKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY291bnRkb3duVmFsdWUtLTtcclxuXHRcdH1cclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcbn1cclxuIl19
