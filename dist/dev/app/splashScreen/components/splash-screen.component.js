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
var SplashScreenComponent = (function () {
    function SplashScreenComponent(_router, _photoBoothStatus, _langText) {
        this._router = _router;
        this._photoBoothStatus = _photoBoothStatus;
        this._langText = _langText;
    }
    SplashScreenComponent.prototype.goToPreview = function (lang) {
        this._langText.selectedLang = lang;
        this._router.navigate(['PreviewScreen']);
        this._photoBoothStatus.changeStatus(photo_booth_status_names_service_1.TYPES.PREVIEWMODE.MODENAME);
    };
    SplashScreenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pb-splash-screen',
            templateUrl: 'splash-screen.component.html',
            styleUrls: ['splash-screen.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, photo_booth_status_service_1.PhotoBoothStatus, lang_text_service_1.LangText])
    ], SplashScreenComponent);
    return SplashScreenComponent;
}());
exports.SplashScreenComponent = SplashScreenComponent;
;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zcGxhc2hTY3JlZW4vY29tcG9uZW50cy9zcGxhc2gtc2NyZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDJDQUErQixrREFBa0QsQ0FBQyxDQUFBO0FBQ2xGLGlEQUFvQix3REFBd0QsQ0FBQyxDQUFBO0FBQzdFLGtDQUF1Qix5Q0FBeUMsQ0FBQyxDQUFBO0FBU2pFO0lBR0MsK0JBQ1MsT0FBZSxFQUNmLGlCQUFtQyxFQUNuQyxTQUFtQjtRQUZuQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyxjQUFTLEdBQVQsU0FBUyxDQUFVO0lBQ3pCLENBQUM7SUFFSiwyQ0FBVyxHQUFYLFVBQWEsSUFBWTtRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsd0NBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQXBCRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzFDLENBQUM7OzZCQUFBO0lBZ0JGLDRCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSw2QkFBcUIsd0JBY2pDLENBQUE7QUFBQSxDQUFDIiwiZmlsZSI6ImFwcC9zcGxhc2hTY3JlZW4vY29tcG9uZW50cy9zcGxhc2gtc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7UGhvdG9Cb290aFN0YXR1c30gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Bob3RvLWJvb3RoLXN0YXR1cy5zZXJ2aWNlJztcclxuaW1wb3J0IHtUWVBFU30gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Bob3RvLWJvb3RoLXN0YXR1cy1uYW1lcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtMYW5nVGV4dH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2xhbmctdGV4dC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdwYi1zcGxhc2gtc2NyZWVuJyxcclxuXHR0ZW1wbGF0ZVVybDogJ3NwbGFzaC1zY3JlZW4uY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWydzcGxhc2gtc2NyZWVuLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwbGFzaFNjcmVlbkNvbXBvbmVudCB7XHJcblx0cHJpdmF0ZSBfdGFrZVBpY1RleHQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgX3Bob3RvQm9vdGhTdGF0dXM6IFBob3RvQm9vdGhTdGF0dXMsXHJcblx0XHRwcml2YXRlIF9sYW5nVGV4dDogTGFuZ1RleHRcclxuXHQpIHt9XHJcblxyXG5cdGdvVG9QcmV2aWV3KCBsYW5nOiBzdHJpbmcgKTogdm9pZCB7XHJcblx0XHR0aGlzLl9sYW5nVGV4dC5zZWxlY3RlZExhbmcgPSBsYW5nO1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUHJldmlld1NjcmVlbiddKTtcclxuXHRcdHRoaXMuX3Bob3RvQm9vdGhTdGF0dXMuY2hhbmdlU3RhdHVzKFRZUEVTLlBSRVZJRVdNT0RFLk1PREVOQU1FKTtcclxuXHR9XHJcbn07XHJcbiJdfQ==
