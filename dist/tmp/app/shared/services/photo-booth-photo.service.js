"use strict";
var Photo = (function () {
    function Photo() {
        this.filter = '';
        this.photoSrc = '';
    }
    Object.defineProperty(Photo.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        set: function (filter) {
            this._filter = filter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "photoSrc", {
        get: function () {
            return this._photoSrc;
        },
        set: function (photoSrc) {
            this._photoSrc = photoSrc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "originalPhotoSrc", {
        get: function () {
            return this._originalPhotoSrc;
        },
        set: function (originalPhotoSrc) {
            this._originalPhotoSrc = originalPhotoSrc;
        },
        enumerable: true,
        configurable: true
    });
    Photo.prototype.resetPhoto = function () {
        this.filter = '';
        this.photoSrc = '';
        this.originalPhotoSrc = '';
    };
    return Photo;
}());
exports.Photo = Photo;
;
