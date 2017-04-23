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
var router_1 = require('@angular/router');
var photo_booth_status_service_1 = require('../../../shared/services/photo-booth-status.service');
var photo_booth_status_names_service_1 = require('../../../shared/services/photo-booth-status-names.service');
var lang_text_service_1 = require('../../../shared/services/lang-text.service');
var ConfigWelcomeScreenConponent = (function () {
    function ConfigWelcomeScreenConponent(_router, _photoBoothStatus, _langText) {
        this._router = _router;
        this._photoBoothStatus = _photoBoothStatus;
        this._langText = _langText;
    }
    ConfigWelcomeScreenConponent.prototype.goToSplash = function () {
        this._router.navigate(['SplashScreen']);
        this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.SPLASHSCREEN.MODENAME);
    };
    ConfigWelcomeScreenConponent.prototype.goToConfig = function () {
        this._router.navigate(['ConfigScreen']);
        this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.CONFIGMODE.MODENAME);
    };
    ConfigWelcomeScreenConponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pb-config-screen',
            templateUrl: 'config-welcome-screen.component.html',
            styleUrls: ['config-welcome-screen.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, photo_booth_status_service_1.PhotoBoothStatus, lang_text_service_1.LangText])
    ], ConfigWelcomeScreenConponent);
    return ConfigWelcomeScreenConponent;
}());
exports.ConfigWelcomeScreenConponent = ConfigWelcomeScreenConponent;
;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb25maWdTY3JlZW4vY29tcG9uZW50cy9jb25maWdXZWxjb21lU2NyZWVuL2NvbmZpZy13ZWxjb21lLXNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QywyQ0FBK0IscURBQXFELENBQUMsQ0FBQTtBQUNyRixpREFBb0IsMkRBQTJELENBQUMsQ0FBQTtBQUNoRixrQ0FBdUIsNENBQTRDLENBQUMsQ0FBQTtBQVNwRTtJQUNDLHNDQUNTLE9BQWUsRUFDZixpQkFBbUMsRUFDbkMsU0FBbUI7UUFGbkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBVTtJQUN6QixDQUFDO0lBRUosaURBQVUsR0FBVjtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLHdDQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFDRCxpREFBVSxHQUFWO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsd0NBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQXJCRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO1NBQ2xELENBQUM7O29DQUFBO0lBaUJGLG1DQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxvQ0FBNEIsK0JBZXhDLENBQUE7QUFBQSxDQUFDIiwiZmlsZSI6ImFwcC9jb25maWdTY3JlZW4vY29tcG9uZW50cy9jb25maWdXZWxjb21lU2NyZWVuL2NvbmZpZy13ZWxjb21lLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1Bob3RvQm9vdGhTdGF0dXN9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9waG90by1ib290aC1zdGF0dXMuc2VydmljZSc7XHJcbmltcG9ydCB7VFlQRVN9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9waG90by1ib290aC1zdGF0dXMtbmFtZXMuc2VydmljZSc7XHJcbmltcG9ydCB7TGFuZ1RleHR9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9sYW5nLXRleHQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAncGItY29uZmlnLXNjcmVlbicsXHJcblx0dGVtcGxhdGVVcmw6ICdjb25maWctd2VsY29tZS1zY3JlZW4uY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWydjb25maWctd2VsY29tZS1zY3JlZW4uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnV2VsY29tZVNjcmVlbkNvbnBvbmVudHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBfcGhvdG9Cb290aFN0YXR1czogUGhvdG9Cb290aFN0YXR1cyxcclxuXHRcdHByaXZhdGUgX2xhbmdUZXh0OiBMYW5nVGV4dFxyXG5cdCkge31cclxuXHJcblx0Z29Ub1NwbGFzaCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1NwbGFzaFNjcmVlbiddKTtcclxuXHRcdHRoaXMuX3Bob3RvQm9vdGhTdGF0dXMuY2hhbmdlU3RhdHVzKFRZUEVTLlNQTEFTSFNDUkVFTi5NT0RFTkFNRSk7XHJcblx0fVxyXG5cdGdvVG9Db25maWcoKTogdm9pZCB7XHJcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydDb25maWdTY3JlZW4nXSk7XHJcblx0XHR0aGlzLl9waG90b0Jvb3RoU3RhdHVzLmNoYW5nZVN0YXR1cyhUWVBFUy5DT05GSUdNT0RFLk1PREVOQU1FKTtcclxuXHR9XHJcbn07XHJcbiJdfQ==
