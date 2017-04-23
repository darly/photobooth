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
    ImageFilter = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ImageFilter);
    return ImageFilter;
}());
exports.ImageFilter = ImageFilter;
;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvaW1hZ2UtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQywyQ0FBcUIsa0RBQWtELENBQUMsQ0FBQTtBQUt4RTtJQUFBO1FBR1EsbUJBQWMsR0FBVyxFQUFFLENBQUM7SUF5Q3BDLENBQUM7SUF4Q0Esc0JBQUksc0NBQWE7YUFHakI7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM1QixDQUFDO2FBTEQsVUFBa0IsYUFBb0I7WUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFLRCwrQkFBUyxHQUFULFVBQVcsSUFBUyxFQUFFLFFBQWUsRUFBRSxNQUFlO1FBQ3JELEtBQUssQ0FBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ3RCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFBLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ2hCLENBQUM7WUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQWEsU0FBaUI7UUFDN0IsSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQSxDQUFFLG1DQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDLENBQUEsQ0FBQztZQUN0QyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3pELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDOUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUM7SUFDRixDQUFDO0lBRUQseUNBQW1CLEdBQW5CLFVBQW9CLElBQVMsRUFBRSxRQUFnQjtRQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBRSxJQUFJLEVBQUUsUUFBUSxDQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVELG1EQUE2QixHQUE3QjtRQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUU1QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQTVDRjtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBNkNiLGtCQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtBQTVDWSxtQkFBVyxjQTRDdkIsQ0FBQTtBQUFBLENBQUMiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9pbWFnZS1maWx0ZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtQaG90b30gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Bob3RvLWJvb3RoLXBob3RvLnNlcnZpY2UnO1xyXG5pbXBvcnQge0ZJTFRFUn0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2NhbWFuLWZpbHRlci1uYW1lcy5zZXJ2aWNlJztcclxuZGVjbGFyZSB2YXIgQ2FtYW46IGFueTtcclxuZGVjbGFyZSB2YXIgZG9jdW1lbnQ6IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEltYWdlRmlsdGVyIHtcclxuXHRwcml2YXRlIF9zZWxlY3RlZFBob3RvOiBQaG90bztcclxuXHRwdWJsaWMgc2VsZWN0ZWRJbWFnZTogYW55O1xyXG5cdHB1YmxpYyBzZWxlY3RlZEZpbHRlcjogc3RyaW5nID0gJyc7XHJcblx0c2V0IHNlbGVjdGVkUGhvdG8oc2VsZWN0ZWRQaG90bzogUGhvdG8pe1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWRQaG90byA9IHNlbGVjdGVkUGhvdG87XHJcblx0fVxyXG5cdGdldCBzZWxlY3RlZFBob3RvKCk6IFBob3Rve1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NlbGVjdGVkUGhvdG87XHJcblx0fVxyXG5cdC8vYWRkcyBmaWx0ZXIgdG8gdGhlIGNhcm91c2VsIGltYWdlc1xyXG5cdGFkZEZpbHRlciggZWxlbTogYW55LCBpbWFnZVVybDpzdHJpbmcsIGZpbHRlcj86IHN0cmluZyApIHtcclxuXHRcdENhbWFuKCBlbGVtLCBpbWFnZVVybCwgZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYodHlwZW9mIGZpbHRlciA9PT0gJ3N0cmluZycpe1xyXG5cdFx0XHRcdHRoaXNbZmlsdGVyXSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMucmVuZGVyKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Ly9hcHBsaWVzIGZpbHRlciB0byB0aGUgc2VsZWN0ZWQgaW1hZ2Ugb24gdGhlIGVkaXQgc2NyZWVuXHJcblx0YXBwbHlGaWx0ZXIoIG5ld0ZpbHRlcjogc3RyaW5nICkge1xyXG5cdFx0dmFyIHRoYXQ6IGFueSA9IHRoaXM7XHJcblx0XHRpZiggRklMVEVSLmluZGV4T2YobmV3RmlsdGVyKSAhPT0gLTEgKXtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRJbWFnZS5yZXZlcnQoKTtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZEltYWdlW25ld0ZpbHRlcl0oKTtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZEltYWdlLnJlbmRlcihmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHRoYXQuc2VsZWN0ZWRQaG90by5maWx0ZXIgPSBuZXdGaWx0ZXI7XHJcblx0XHRcdFx0dGhhdC5zZWxlY3RlZFBob3RvLnBob3RvU3JjID0gdGhpcy50b0Jhc2U2NCgpO1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0Ly91cGRhdGVzIHRoZSBzZWxlY3RlZCBpbWFnZVxyXG5cdHVwZGF0ZVNlbGVjdGVkSW1hZ2UoZWxlbTogYW55LCBpbWFnZVVybDogc3RyaW5nICkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZEltYWdlID0gQ2FtYW4oIGVsZW0sIGltYWdlVXJsICk7XHJcblx0fVxyXG5cdC8vcmVtb3ZlIHRoZSBmaWx0ZXIgZnJvbSB0aGUgc2VsZWN0ZWQgaW1hZ2VcclxuXHRyZW1vdmVGaWx0ZXJGcm9tU2VsZWN0ZWRJbWFnZSgpe1xyXG5cdFx0dGhpcy5zZWxlY3RlZEltYWdlLnJldmVydCgpO1xyXG5cdFx0dGhpcy5zZWxlY3RlZEltYWdlLnJlbmRlcigpO1xyXG5cclxuXHRcdHRoaXMuc2VsZWN0ZWRQaG90by5maWx0ZXIgPSAnJztcclxuXHR9XHJcbn07XHJcbiJdfQ==
