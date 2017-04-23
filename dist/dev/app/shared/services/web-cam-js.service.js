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
var photo_booth_photo_strip_service_1 = require('./photo-booth-photo-strip.service');
var router_1 = require('@angular/router');
var WebcamJsService = (function () {
    function WebcamJsService(_photoStrip, _router) {
        this._photoStrip = _photoStrip;
        this._router = _router;
    }
    WebcamJsService.prototype.startStreaming = function () {
        Webcam.set({
            width: window.innerWidth - 40,
            height: window.innerHeight - 40,
            dest_width: 800,
            dest_height: 600,
            image_format: 'jpeg',
            jpeg_quality: 100,
            force_flash: false,
            flip_horiz: true,
            fps: 30
        });
        Webcam.attach('#livePreview');
    };
    WebcamJsService.prototype.stopStreaming = function () {
        Webcam.reset();
    };
    WebcamJsService.prototype.takePicture = function () {
        var _this = this;
        Webcam.snap(function (dataUrl) {
            var index = _this._photoStrip.setNextEmptyPhoto(dataUrl);
            _this._router.navigate(['EditScreen', index]);
        });
    };
    WebcamJsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [photo_booth_photo_strip_service_1.PhotoStrip, router_1.Router])
    ], WebcamJsService);
    return WebcamJsService;
}());
exports.WebcamJsService = WebcamJsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvd2ViLWNhbS1qcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsZ0RBQXlCLG1DQUFtQyxDQUFDLENBQUE7QUFDN0QsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFLdkM7SUFDQyx5QkFBcUIsV0FBdUIsRUFBVSxPQUFlO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFLLENBQUM7SUFFM0Usd0NBQWMsR0FBZDtRQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDVixLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFO1lBQzdCLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUU7WUFDL0IsVUFBVSxFQUFFLEdBQUc7WUFDZixXQUFXLEVBQUUsR0FBRztZQUNoQixZQUFZLEVBQUUsTUFBTTtZQUNwQixZQUFZLEVBQUUsR0FBRztZQUNqQixXQUFXLEVBQUUsS0FBSztZQUNsQixVQUFVLEVBQUUsSUFBSTtZQUNoQixHQUFHLEVBQUUsRUFBRTtTQUNQLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHVDQUFhLEdBQWI7UUFDQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFBQSxpQkFLQztRQUpBLE1BQU0sQ0FBQyxJQUFJLENBQUUsVUFBQyxPQUFjO1lBQzNCLElBQUksS0FBSyxHQUFVLEtBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFFLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUE3QkY7UUFBQyxpQkFBVSxFQUFFOzt1QkFBQTtJQThCYixzQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlksdUJBQWUsa0JBNEIzQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvd2ViLWNhbS1qcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1Bob3RvU3RyaXB9IGZyb20gJy4vcGhvdG8tYm9vdGgtcGhvdG8tc3RyaXAuc2VydmljZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5kZWNsYXJlIHZhciBXZWJjYW06IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJjYW1Kc1NlcnZpY2V7XHJcblx0Y29uc3RydWN0b3IoIHByaXZhdGUgX3Bob3RvU3RyaXA6IFBob3RvU3RyaXAsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyICkgeyB9XHJcblxyXG5cdHN0YXJ0U3RyZWFtaW5nKCkge1xyXG5cdFx0V2ViY2FtLnNldCh7XHJcblx0XHRcdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAtIDQwLFxyXG5cdFx0XHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDQwLFxyXG5cdFx0XHRkZXN0X3dpZHRoOiA4MDAsXHJcblx0XHRcdGRlc3RfaGVpZ2h0OiA2MDAsXHJcblx0XHRcdGltYWdlX2Zvcm1hdDogJ2pwZWcnLFxyXG5cdFx0XHRqcGVnX3F1YWxpdHk6IDEwMCxcclxuXHRcdFx0Zm9yY2VfZmxhc2g6IGZhbHNlLFxyXG5cdFx0XHRmbGlwX2hvcml6OiB0cnVlLFxyXG5cdFx0XHRmcHM6IDMwXHJcblx0XHR9KTtcclxuXHRcdFdlYmNhbS5hdHRhY2goJyNsaXZlUHJldmlldycpO1xyXG5cdH1cclxuXHJcblx0c3RvcFN0cmVhbWluZygpIHtcclxuXHRcdFdlYmNhbS5yZXNldCgpO1xyXG5cdH1cclxuXHJcblx0dGFrZVBpY3R1cmUoKXtcclxuXHRcdFdlYmNhbS5zbmFwKCAoZGF0YVVybDpzdHJpbmcpID0+IHtcclxuXHRcdFx0dmFyIGluZGV4Om51bWJlciA9IHRoaXMuX3Bob3RvU3RyaXAuc2V0TmV4dEVtcHR5UGhvdG8oZGF0YVVybCk7XHJcblx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0VkaXRTY3JlZW4nLCBpbmRleCBdKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
