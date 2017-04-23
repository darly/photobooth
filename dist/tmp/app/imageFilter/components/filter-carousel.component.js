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
var image_filter_service_1 = require('../../shared/services/image-filter.service');
var photo_booth_status_service_1 = require('../../shared/services/photo-booth-status.service');
var filterCarousel = (function () {
    function filterCarousel(_photoBoothStatus, _imageFilter) {
        this._photoBoothStatus = _photoBoothStatus;
        this._imageFilter = _imageFilter;
        this.filters = caman_filter_names_service_1.FILTER;
    }
    filterCarousel.prototype.applyFilter = function (filter) {
        this._imageFilter.applyFilter(filter);
    };
    filterCarousel.prototype.ngOnInit = function () {
        var _this = this;
        this.setIsFilterMode();
        this._subscription = this._photoBoothStatus.stausChange$.subscribe(function (status) {
            _this.setIsFilterMode();
        });
    };
    filterCarousel.prototype.ngAfterViewInit = function () {
        var filterImages = this.filterHolder.nativeElement.querySelectorAll('.filter-holder canvas');
        for (var i = 0; i < filterImages.length; i++) {
            this._imageFilter.addFilter(filterImages[i], 'assets/images/filter_image.jpg', filterImages[i].getAttribute('data-filter_name'));
        }
    };
    filterCarousel.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    filterCarousel.prototype.setIsFilterMode = function () {
        this.isFilterMode = this._photoBoothStatus.isFilterMode;
    };
    __decorate([
        core_1.ViewChild('filtersHolder'), 
        __metadata('design:type', core_1.ElementRef)
    ], filterCarousel.prototype, "filterHolder", void 0);
    filterCarousel = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pb-image-filter',
            template: "<div id=\"filterCarousel\" [hidden]=\"!isFilterMode\" #filtersHolder> \t<span class=\"filter-holder\" *ngFor=\"let filter of filters;  let i = index\"> \t\t<canvas class=\"carousel-filter-img\" attr.data-filter_name=\"{{filter}}\"></canvas> \t\t<span class=\"filter-name\" (click)=\"applyFilter(filter)\">{{filter}}</span> \t</span> </div>",
            styles: ["#filterCarousel{white-space:nowrap;overflow-x:auto;position:absolute;bottom:0;text-align:center;left:0;width:100%}#filterCarousel .carousel-filter-img{height:135px;width:auto;margin:5px}#filterCarousel .filter-holder{display:inline-block;vertical-align:top;position:relative}#filterCarousel .filter-name{position:absolute;top:0;left:0;text-align:center;padding-top:23%;font-weight:700;font-size:25px;height:100%;width:100%}"]
        }), 
        __metadata('design:paramtypes', [photo_booth_status_service_1.PhotoBoothStatus, image_filter_service_1.ImageFilter])
    ], filterCarousel);
    return filterCarousel;
}());
exports.filterCarousel = filterCarousel;
