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
var photo_booth_status_service_1 = require('../../shared/services/photo-booth-status.service');
var photo_booth_status_names_service_1 = require('../../shared/services/photo-booth-status-names.service');
var lang_text_service_1 = require('../../shared/services/lang-text.service');
var ConfigScreenConponent = (function () {
    function ConfigScreenConponent(_router, _photoBoothStatus, _langText) {
        this._router = _router;
        this._photoBoothStatus = _photoBoothStatus;
        this._langText = _langText;
        this.setConfigDefault();
    }
    ConfigScreenConponent.prototype.goToSplash = function () {
        this._router.navigate(['SplashScreen']);
        this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.SPLASHSCREEN.MODENAME);
    };
    ConfigScreenConponent.prototype.goToConfigWelcome = function () {
        this._router.navigate(['']);
        this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.CONFIGMODE.MODENAME);
    };
    ConfigScreenConponent.prototype.saveConfig = function () {
    };
    ConfigScreenConponent.prototype.splashScreenToggle = function (e) {
        if (e.currentTarget.classList.contains('active')) {
            this.splashScreenToggleText = 'Show';
        }
        else {
            this.splashScreenToggleText = 'Hide';
        }
    };
    ConfigScreenConponent.prototype.hideSplashScreenConfig = function () {
        if (this.splashScreenToggleText === 'Hide') {
            return true;
        }
        return false;
    };
    ConfigScreenConponent.prototype.setConfigDefault = function () {
        this.splashScreenToggleText = 'Show';
    };
    Object.defineProperty(ConfigScreenConponent.prototype, "splashScreenToggleText", {
        get: function () {
            return this._splashScreenToggleText;
        },
        set: function (splashScreenToggleText) {
            this._splashScreenToggleText = splashScreenToggleText;
        },
        enumerable: true,
        configurable: true
    });
    ConfigScreenConponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pb-config-screen',
            templateUrl: 'config-screen.component.html',
            styleUrls: ['config-screen.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, photo_booth_status_service_1.PhotoBoothStatus, lang_text_service_1.LangText])
    ], ConfigScreenConponent);
    return ConfigScreenConponent;
}());
exports.ConfigScreenConponent = ConfigScreenConponent;
;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb25maWdTY3JlZW4vY29tcG9uZW50cy9jb25maWctc2NyZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDJDQUErQixrREFBa0QsQ0FBQyxDQUFBO0FBQ2xGLGlEQUFvQix3REFBd0QsQ0FBQyxDQUFBO0FBQzdFLGtDQUF1Qix5Q0FBeUMsQ0FBQyxDQUFBO0FBU2pFO0lBR0MsK0JBQ1MsT0FBZSxFQUNmLGlCQUFtQyxFQUNuQyxTQUFtQjtRQUZuQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBRTNCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwwQ0FBVSxHQUFWO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsd0NBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNELGlEQUFpQixHQUFqQjtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLHdDQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDRCwwQ0FBVSxHQUFWO0lBRUEsQ0FBQztJQUNELGtEQUFrQixHQUFsQixVQUFtQixDQUFNO1FBQ3hCLEVBQUUsQ0FBQSxDQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUUsQ0FBQyxDQUFBLENBQUM7WUFDbEQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQztRQUN0QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLENBQUM7SUFDRixDQUFDO0lBQ0Qsc0RBQXNCLEdBQXRCO1FBQ0MsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLHNCQUFzQixLQUFLLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNiLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUNELGdEQUFnQixHQUFoQjtRQUNDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUM7SUFDdEMsQ0FBQztJQUNELHNCQUFJLHlEQUFzQjthQUExQjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7UUFDckMsQ0FBQzthQUNELFVBQTJCLHNCQUE2QjtZQUN2RCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsc0JBQXNCLENBQUM7UUFDdkQsQ0FBQzs7O09BSEE7SUEvQ0Y7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUMxQyxDQUFDOzs2QkFBQTtJQThDRiw0QkFBQztBQUFELENBNUNBLEFBNENDLElBQUE7QUE1Q1ksNkJBQXFCLHdCQTRDakMsQ0FBQTtBQUFBLENBQUMiLCJmaWxlIjoiYXBwL2NvbmZpZ1NjcmVlbi9jb21wb25lbnRzL2NvbmZpZy1zY3JlZW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtQaG90b0Jvb3RoU3RhdHVzfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvcGhvdG8tYm9vdGgtc3RhdHVzLnNlcnZpY2UnO1xyXG5pbXBvcnQge1RZUEVTfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvcGhvdG8tYm9vdGgtc3RhdHVzLW5hbWVzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0xhbmdUZXh0fSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvbGFuZy10ZXh0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ3BiLWNvbmZpZy1zY3JlZW4nLFxyXG5cdHRlbXBsYXRlVXJsOiAnY29uZmlnLXNjcmVlbi5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJ2NvbmZpZy1zY3JlZW4uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2NyZWVuQ29ucG9uZW50e1xyXG5cdHByaXZhdGUgX3NwbGFzaFNjcmVlblRvZ2dsZVRleHQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgX3Bob3RvQm9vdGhTdGF0dXM6IFBob3RvQm9vdGhTdGF0dXMsXHJcblx0XHRwcml2YXRlIF9sYW5nVGV4dDogTGFuZ1RleHRcclxuXHQpIHtcclxuXHRcdHRoaXMuc2V0Q29uZmlnRGVmYXVsdCgpO1xyXG5cdH1cclxuXHJcblx0Z29Ub1NwbGFzaCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1NwbGFzaFNjcmVlbiddKTtcclxuXHRcdHRoaXMuX3Bob3RvQm9vdGhTdGF0dXMuY2hhbmdlU3RhdHVzKFRZUEVTLlNQTEFTSFNDUkVFTi5NT0RFTkFNRSk7XHJcblx0fVxyXG5cdGdvVG9Db25maWdXZWxjb21lKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnJ10pO1xyXG5cdFx0dGhpcy5fcGhvdG9Cb290aFN0YXR1cy5jaGFuZ2VTdGF0dXMoVFlQRVMuQ09ORklHTU9ERS5NT0RFTkFNRSk7XHJcblx0fVxyXG5cdHNhdmVDb25maWcoKTogdm9pZHtcclxuXHJcblx0fVxyXG5cdHNwbGFzaFNjcmVlblRvZ2dsZShlOiBhbnkpOiB2b2lke1xyXG5cdFx0aWYoIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICl7XHJcblx0XHRcdHRoaXMuc3BsYXNoU2NyZWVuVG9nZ2xlVGV4dCA9ICdTaG93JztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc3BsYXNoU2NyZWVuVG9nZ2xlVGV4dCA9ICdIaWRlJztcclxuXHRcdH1cclxuXHR9XHJcblx0aGlkZVNwbGFzaFNjcmVlbkNvbmZpZygpOiBib29sZWFue1xyXG5cdFx0aWYodGhpcy5zcGxhc2hTY3JlZW5Ub2dnbGVUZXh0ID09PSAnSGlkZScpe1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblx0c2V0Q29uZmlnRGVmYXVsdCgpOiB2b2lke1xyXG5cdFx0dGhpcy5zcGxhc2hTY3JlZW5Ub2dnbGVUZXh0ID0gJ1Nob3cnO1xyXG5cdH1cclxuXHRnZXQgc3BsYXNoU2NyZWVuVG9nZ2xlVGV4dCgpOiBzdHJpbmd7XHJcblx0XHRyZXR1cm4gdGhpcy5fc3BsYXNoU2NyZWVuVG9nZ2xlVGV4dDtcclxuXHR9XHJcblx0c2V0IHNwbGFzaFNjcmVlblRvZ2dsZVRleHQoc3BsYXNoU2NyZWVuVG9nZ2xlVGV4dDpzdHJpbmcpe1xyXG5cdFx0dGhpcy5fc3BsYXNoU2NyZWVuVG9nZ2xlVGV4dCA9IHNwbGFzaFNjcmVlblRvZ2dsZVRleHQ7XHJcblx0fVxyXG59O1xyXG4iXX0=
