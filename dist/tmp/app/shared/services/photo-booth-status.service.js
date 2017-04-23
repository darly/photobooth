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
