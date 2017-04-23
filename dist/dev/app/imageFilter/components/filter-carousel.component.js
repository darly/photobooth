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
var FilterCarousel = (function () {
    function FilterCarousel(_photoBoothStatus, _imageFilter) {
        this._photoBoothStatus = _photoBoothStatus;
        this._imageFilter = _imageFilter;
        this.filters = caman_filter_names_service_1.FILTER;
    }
    FilterCarousel.prototype.applyFilter = function (filter) {
        this._imageFilter.applyFilter(filter);
    };
    FilterCarousel.prototype.ngOnInit = function () {
        var _this = this;
        this.setIsFilterMode();
        this._subscription = this._photoBoothStatus.stausChange$.subscribe(function (status) {
            _this.setIsFilterMode();
        });
    };
    FilterCarousel.prototype.ngAfterViewInit = function () {
        var filterImages = this.filterHolder.nativeElement.querySelectorAll('.filter-holder canvas');
        for (var i = 0; i < filterImages.length; i++) {
            this._imageFilter.addFilter(filterImages[i], 'assets/images/filter_image.jpg', filterImages[i].getAttribute('data-filter_name'));
        }
    };
    FilterCarousel.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    FilterCarousel.prototype.setIsFilterMode = function () {
        this.isFilterMode = this._photoBoothStatus.isFilterMode;
    };
    __decorate([
        core_1.ViewChild('filtersHolder'), 
        __metadata('design:type', core_1.ElementRef)
    ], FilterCarousel.prototype, "filterHolder", void 0);
    FilterCarousel = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pb-image-filter',
            templateUrl: 'filter-carousel.component.html',
            styleUrls: ['filter-carousel.component.css']
        }), 
        __metadata('design:paramtypes', [photo_booth_status_service_1.PhotoBoothStatus, image_filter_service_1.ImageFilter])
    ], FilterCarousel);
    return FilterCarousel;
}());
exports.FilterCarousel = FilterCarousel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9pbWFnZUZpbHRlci9jb21wb25lbnRzL2ZpbHRlci1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyRixlQUFlLENBQUMsQ0FBQTtBQUMzRywyQ0FBcUIsa0RBQWtELENBQUMsQ0FBQTtBQUN4RSxxQ0FBMEIsNENBQTRDLENBQUMsQ0FBQTtBQUN2RSwyQ0FBK0Isa0RBQWtELENBQUMsQ0FBQTtBQVFsRjtJQU9DLHdCQUNTLGlCQUFtQyxFQUNuQyxZQUF5QjtRQUR6QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBUDNCLFlBQU8sR0FBa0IsbUNBQU0sQ0FBQztJQVFwQyxDQUFDO0lBQ0osb0NBQVcsR0FBWCxVQUFZLE1BQWM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELGlDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5BLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUNqRSxVQUFBLE1BQU07WUFDTCxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBQ0Qsd0NBQWUsR0FBZjtRQUNDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFN0YsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQzFCLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFDZixnQ0FBZ0MsRUFDaEMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUNoRCxDQUFDO1FBQ0gsQ0FBQztJQUNGLENBQUM7SUFDRCxvQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsd0NBQWUsR0FBZjtRQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQztJQUN6RCxDQUFDO0lBakNEO1FBQUMsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7O3dEQUFBO0lBWDVCO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDNUMsQ0FBQzs7c0JBQUE7SUF3Q0YscUJBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBO0FBdkNZLHNCQUFjLGlCQXVDMUIsQ0FBQSIsImZpbGUiOiJhcHAvaW1hZ2VGaWx0ZXIvY29tcG9uZW50cy9maWx0ZXItY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGSUxURVJ9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jYW1hbi1maWx0ZXItbmFtZXMuc2VydmljZSc7XHJcbmltcG9ydCB7SW1hZ2VGaWx0ZXJ9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS1maWx0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7UGhvdG9Cb290aFN0YXR1c30gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Bob3RvLWJvb3RoLXN0YXR1cy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdwYi1pbWFnZS1maWx0ZXInLFxyXG5cdHRlbXBsYXRlVXJsOiAnZmlsdGVyLWNhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnZmlsdGVyLWNhcm91c2VsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQ2Fyb3VzZWwgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcblx0cHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBhbnk7XHJcblx0cHVibGljIGZpbHRlcnM6IEFycmF5PHN0cmluZz4gPSBGSUxURVI7XHJcblx0cHVibGljIGlzRmlsdGVyTW9kZTogYm9vbGVhblxyXG5cclxuXHRAVmlld0NoaWxkKCdmaWx0ZXJzSG9sZGVyJykgZmlsdGVySG9sZGVyOiBFbGVtZW50UmVmO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX3Bob3RvQm9vdGhTdGF0dXM6IFBob3RvQm9vdGhTdGF0dXMsXHJcblx0XHRwcml2YXRlIF9pbWFnZUZpbHRlcjogSW1hZ2VGaWx0ZXJcclxuXHQpIHt9XHJcblx0YXBwbHlGaWx0ZXIoZmlsdGVyOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuX2ltYWdlRmlsdGVyLmFwcGx5RmlsdGVyKGZpbHRlcik7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zZXRJc0ZpbHRlck1vZGUoKTtcclxuXHRcdHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX3Bob3RvQm9vdGhTdGF0dXMuc3RhdXNDaGFuZ2UkLnN1YnNjcmliZShcclxuXHRcdFx0c3RhdHVzID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldElzRmlsdGVyTW9kZSgpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHRuZ0FmdGVyVmlld0luaXQoKXtcclxuXHRcdHZhciBmaWx0ZXJJbWFnZXMgPSB0aGlzLmZpbHRlckhvbGRlci5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXItaG9sZGVyIGNhbnZhcycpO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZmlsdGVySW1hZ2VzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0dGhpcy5faW1hZ2VGaWx0ZXIuYWRkRmlsdGVyKFxyXG5cdFx0XHRcdGZpbHRlckltYWdlc1tpXSxcclxuXHRcdFx0XHQnYXNzZXRzL2ltYWdlcy9maWx0ZXJfaW1hZ2UuanBnJyxcclxuXHRcdFx0XHRmaWx0ZXJJbWFnZXNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcl9uYW1lJylcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblx0c2V0SXNGaWx0ZXJNb2RlKCl7XHJcblx0XHR0aGlzLmlzRmlsdGVyTW9kZSA9IHRoaXMuX3Bob3RvQm9vdGhTdGF0dXMuaXNGaWx0ZXJNb2RlO1xyXG5cdH1cclxufVxyXG4iXX0=
