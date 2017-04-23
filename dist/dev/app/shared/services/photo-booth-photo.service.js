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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvcGhvdG8tYm9vdGgtcGhvdG8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFJQztRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxzQkFBSSx5QkFBTTthQUdWO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckIsQ0FBQzthQUxELFVBQVksTUFBYztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUlELHNCQUFJLDJCQUFRO2FBR1o7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN2QixDQUFDO2FBTEQsVUFBYyxRQUFnQjtZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUlELHNCQUFJLG1DQUFnQjthQUdwQjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDL0IsQ0FBQzthQUxELFVBQXFCLGdCQUF3QjtZQUM1QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFJRCwwQkFBVSxHQUFWO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0YsWUFBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUEvQlksYUFBSyxRQStCakIsQ0FBQTtBQUFBLENBQUMiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9waG90by1ib290aC1waG90by5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBob3RvIHtcclxuXHRwcml2YXRlIF9maWx0ZXI6IHN0cmluZztcclxuXHRwcml2YXRlIF9waG90b1NyYzogc3RyaW5nO1xyXG5cdHByaXZhdGUgX29yaWdpbmFsUGhvdG9TcmM6IHN0cmluZztcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuZmlsdGVyID0gJyc7XHJcblx0XHR0aGlzLnBob3RvU3JjID0gJyc7XHJcblx0fVxyXG5cdHNldCBmaWx0ZXIoIGZpbHRlcjogc3RyaW5nICkge1xyXG5cdFx0dGhpcy5fZmlsdGVyID0gZmlsdGVyO1xyXG5cdH1cclxuXHRnZXQgZmlsdGVyKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZmlsdGVyO1xyXG5cdH1cclxuXHRzZXQgcGhvdG9TcmMoIHBob3RvU3JjOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuX3Bob3RvU3JjID0gcGhvdG9TcmM7XHJcblx0fVxyXG5cdGdldCBwaG90b1NyYygpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Bob3RvU3JjO1xyXG5cdH1cclxuXHRzZXQgb3JpZ2luYWxQaG90b1NyYyhvcmlnaW5hbFBob3RvU3JjOiBzdHJpbmcpe1xyXG5cdFx0dGhpcy5fb3JpZ2luYWxQaG90b1NyYyA9IG9yaWdpbmFsUGhvdG9TcmM7XHJcblx0fVxyXG5cdGdldCBvcmlnaW5hbFBob3RvU3JjKCk6IHN0cmluZ3tcclxuXHRcdHJldHVybiB0aGlzLl9vcmlnaW5hbFBob3RvU3JjO1xyXG5cdH1cclxuXHRyZXNldFBob3RvKCkge1xyXG5cdFx0dGhpcy5maWx0ZXIgPSAnJztcclxuXHRcdHRoaXMucGhvdG9TcmMgPSAnJztcclxuXHRcdHRoaXMub3JpZ2luYWxQaG90b1NyYyA9ICcnO1xyXG5cdH1cclxufTtcclxuIl19
