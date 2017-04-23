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
var caman_filter_names_service_1 = require('../../shared/services/caman-filter-names.service');
var ImageFilter = (function () {
    function ImageFilter() {
        this.selectedFilter = '';
    }
    ImageFilter.prototype.addFilter = function (elem, imageUrl, filter) {
        Caman(elem, imageUrl, function () {
            if (typeof filter === 'string') {
                this[filter]();
            }
            this.render();
        });
    };
    ImageFilter.prototype.applyFilter = function (newFilter) {
        var that = this;
        if (caman_filter_names_service_1.FILTER.indexOf(newFilter) !== -1) {
            document.getElementById('loader').style.display = 'flex';
            this.selectedImage.revert();
            this.selectedImage[newFilter]();
            this.selectedImage.render(function () {
                that.selectedPhoto.filter = newFilter;
                that.selectedPhoto.photoSrc = this.toBase64();
                document.getElementById('loader').style.display = 'none';
            });
        }
    };
    ImageFilter.prototype.updateSelectedImage = function (elem, imageUrl) {
        this.selectedImage = Caman(elem, imageUrl);
    };
    ImageFilter.prototype.removeFilterFromSelectedImage = function () {
        this.selectedImage.revert();
        this.selectedImage.render();
        this.selectedPhoto.filter = '';
    };
    Object.defineProperty(ImageFilter.prototype, "selectedPhoto", {
        get: function () {
            return this._selectedPhoto;
        },
        set: function (selectedPhoto) {
            this._selectedPhoto = selectedPhoto;
        },
        enumerable: true,
        configurable: true
    });
    ImageFilter = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ImageFilter);
    return ImageFilter;
}());
exports.ImageFilter = ImageFilter;
;
