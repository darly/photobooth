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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/share');
var photo_booth_status_names_service_1 = require('../../shared/services/photo-booth-status-names.service');
var PhotoBoothStatus = (function () {
    function PhotoBoothStatus() {
        var _this = this;
        this.stausChange$ = new Observable_1.Observable(function (observer) { return _this._observer = observer; }).share();
        this.status = photo_booth_status_names_service_1.TYPES.SPLASHSCREEN.MODENAME;
    }
    Object.defineProperty(PhotoBoothStatus.prototype, "isPictureMode", {
        get: function () {
            return this.getStatus() === photo_booth_status_names_service_1.TYPES.PICTUREMODE.MODENAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhotoBoothStatus.prototype, "isEditMode", {
        get: function () {
            return this.getStatus() === photo_booth_status_names_service_1.TYPES.EDITMODE.MODENAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhotoBoothStatus.prototype, "isPreviewMode", {
        get: function () {
            return this.getStatus() === photo_booth_status_names_service_1.TYPES.PREVIEWMODE.MODENAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhotoBoothStatus.prototype, "isFilterMode", {
        get: function () {
            return this.getStatus() === photo_booth_status_names_service_1.TYPES.FILTERMODE.MODENAME;
        },
        enumerable: true,
        configurable: true
    });
    PhotoBoothStatus.prototype.changeStatus = function (newStatus) {
        this.status = newStatus;
        if (this._observer && this._observer.next) {
            this._observer.next(newStatus);
        }
    };
    PhotoBoothStatus.prototype.getStatus = function () {
        return this.status;
    };
    PhotoBoothStatus = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PhotoBoothStatus);
    return PhotoBoothStatus;
}());
exports.PhotoBoothStatus = PhotoBoothStatus;
;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvcGhvdG8tYm9vdGgtc3RhdHVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUU3QyxRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFDakMsaURBQW9CLHdEQUF3RCxDQUFDLENBQUE7QUFHN0U7SUFLQztRQUxELGlCQWdDQztRQTFCQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksdUJBQVUsQ0FDakMsVUFBQyxRQUFZLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXRELElBQUksQ0FBQyxNQUFNLEdBQUcsd0NBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUM7SUFDRCxzQkFBSSwyQ0FBYTthQUFqQjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssd0NBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3hELENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksd0NBQVU7YUFBZDtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssd0NBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3JELENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksMkNBQWE7YUFBakI7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLHdDQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUN4RCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDBDQUFZO2FBQWhCO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyx3Q0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7SUFDRCx1Q0FBWSxHQUFaLFVBQWUsU0FBaUI7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDeEIsRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUssQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsU0FBUyxDQUFFLENBQUM7UUFDbEMsQ0FBQztJQUNGLENBQUM7SUFDRCxvQ0FBUyxHQUFUO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQWhDRjtRQUFDLGlCQUFVLEVBQUU7O3dCQUFBO0lBaUNiLHVCQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtBQWhDWSx3QkFBZ0IsbUJBZ0M1QixDQUFBO0FBQUEsQ0FBQyIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL3Bob3RvLWJvb3RoLXN0YXR1cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzL09ic2VydmVyJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zaGFyZSc7XHJcbmltcG9ydCB7VFlQRVN9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9waG90by1ib290aC1zdGF0dXMtbmFtZXMuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQaG90b0Jvb3RoU3RhdHVzIHtcclxuXHRwdWJsaWMgc3RhdXNDaGFuZ2UkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0cHJpdmF0ZSBzdGF0dXM6IHN0cmluZztcclxuXHRwcml2YXRlIF9vYnNlcnZlcjogT2JzZXJ2ZXI8c3RyaW5nPjtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnN0YXVzQ2hhbmdlJCA9IG5ldyBPYnNlcnZhYmxlKFxyXG5cdFx0XHQob2JzZXJ2ZXI6YW55KSA9PiB0aGlzLl9vYnNlcnZlciA9IG9ic2VydmVyKS5zaGFyZSgpO1xyXG5cdFx0Ly8gc2hhcmUoKSBhbGxvd3MgbXVsdGlwbGUgc3Vic2NyaWJlcnNcclxuXHRcdHRoaXMuc3RhdHVzID0gVFlQRVMuU1BMQVNIU0NSRUVOLk1PREVOQU1FO1xyXG5cdH1cclxuXHRnZXQgaXNQaWN0dXJlTW9kZSgpOiBib29sZWFue1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0U3RhdHVzKCkgPT09IFRZUEVTLlBJQ1RVUkVNT0RFLk1PREVOQU1FO1xyXG5cdH1cclxuXHRnZXQgaXNFZGl0TW9kZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLmdldFN0YXR1cygpID09PSBUWVBFUy5FRElUTU9ERS5NT0RFTkFNRTtcclxuXHR9XHJcblx0Z2V0IGlzUHJldmlld01vZGUoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRTdGF0dXMoKSA9PT0gVFlQRVMuUFJFVklFV01PREUuTU9ERU5BTUU7XHJcblx0fVxyXG5cdGdldCBpc0ZpbHRlck1vZGUoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRTdGF0dXMoKSA9PT0gVFlQRVMuRklMVEVSTU9ERS5NT0RFTkFNRTtcclxuXHR9XHJcblx0Y2hhbmdlU3RhdHVzICggbmV3U3RhdHVzOiBzdHJpbmcgKSB7XHJcblx0XHR0aGlzLnN0YXR1cyA9IG5ld1N0YXR1cztcclxuXHRcdGlmICggdGhpcy5fb2JzZXJ2ZXIgJiYgdGhpcy5fb2JzZXJ2ZXIubmV4dCApIHtcclxuXHRcdFx0dGhpcy5fb2JzZXJ2ZXIubmV4dCggbmV3U3RhdHVzICk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGdldFN0YXR1cygpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzO1xyXG5cdH1cclxufTtcclxuIl19
