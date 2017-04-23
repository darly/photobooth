"use strict";
var photo_booth_photo_service_1 = require('./photo-booth-photo.service');
var PhotoStrip = (function () {
    function PhotoStrip() {
        var strip = new Array();
        strip[0] = new photo_booth_photo_service_1.Photo();
        strip[1] = new photo_booth_photo_service_1.Photo();
        strip[2] = new photo_booth_photo_service_1.Photo();
        this.strip = strip;
        this._nextEmptyPhoto = 0;
    }
    Object.defineProperty(PhotoStrip.prototype, "strip", {
        get: function () {
            return this._strip;
        },
        set: function (strip) {
            this._strip = strip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhotoStrip.prototype, "selectedPhoto", {
        get: function () {
            return this._selectedPhoto;
        },
        set: function (newSelectedPhoto) {
            this._selectedPhoto = newSelectedPhoto;
        },
        enumerable: true,
        configurable: true
    });
    PhotoStrip.prototype.setNextEmptyPhoto = function (photoSrc) {
        var nextEmpty = this.getNextEmptyPhotoNumber();
        if (nextEmpty !== -1) {
            this.strip[nextEmpty].photoSrc = photoSrc;
            this.strip[nextEmpty].originalPhotoSrc = photoSrc;
        }
        return nextEmpty;
    };
    PhotoStrip.prototype.getNextEmptyPhotoNumber = function () {
        for (var i = 0; this._strip.length > i; i++) {
            if (this.strip[i].photoSrc === '') {
                return i;
            }
        }
        return -1;
    };
    PhotoStrip.prototype.resetStrip = function () {
        for (var i = 0; this._strip.length > i; i++) {
            this.strip[i].resetPhoto();
        }
    };
    return PhotoStrip;
}());
exports.PhotoStrip = PhotoStrip;
;
