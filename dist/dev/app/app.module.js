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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var config_welcome_screen_component_1 = require('./configScreen/components/configWelcomeScreen/config-welcome-screen.component');
var config_screen_component_1 = require('./configScreen/components/config-screen.component');
var splash_screen_component_1 = require('./splashScreen/components/splash-screen.component');
var preview_screen_component_1 = require('./previewScreen/components/preview-screen.component');
var preview_photo_strip_component_1 = require('./previewScreen/components/PreviewPhotoStrip/preview-photo-strip.component');
var shot_countdown_component_1 = require('./previewScreen/components/ShotCountdown/shot-countdown.component');
var edit_screen_component_1 = require('./editScreen/components/edit-screen.component');
var filter_carousel_component_1 = require('./imageFilter/components/filter-carousel.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule],
            declarations: [
                app_component_1.AppComponent,
                config_welcome_screen_component_1.ConfigWelcomeScreenConponent,
                config_screen_component_1.ConfigScreenConponent,
                splash_screen_component_1.SplashScreenComponent,
                preview_screen_component_1.PreviewScreenComponent,
                edit_screen_component_1.EditScreenComponent,
                preview_photo_strip_component_1.PreviewPhotoStripComponent,
                shot_countdown_component_1.ShotCountdownComponent,
                filter_carousel_component_1.FilterCarousel
            ],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsaUNBQTRCLDJCQUEyQixDQUFDLENBQUE7QUFDeEQsdUJBQTRCLGlCQUFpQixDQUFDLENBQUE7QUFDOUMsOEJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsbUNBQStCLHNCQUFzQixDQUFDLENBQUE7QUFDdEQsZ0RBQTJDLCtFQUErRSxDQUFDLENBQUE7QUFDM0gsd0NBQW9DLG1EQUFtRCxDQUFDLENBQUE7QUFDeEYsd0NBQXFDLG1EQUFtRCxDQUFDLENBQUE7QUFDekYseUNBQXFDLHFEQUFxRCxDQUFDLENBQUE7QUFDM0YsOENBQXlDLDRFQUE0RSxDQUFDLENBQUE7QUFDdEgseUNBQXFDLG1FQUFtRSxDQUFDLENBQUE7QUFDekcsc0NBQWtDLCtDQUErQyxDQUFDLENBQUE7QUFDbEYsMENBQTZCLG9EQUFvRCxDQUFDLENBQUE7QUFzQmxGO0lBQUE7SUFBeUIsQ0FBQztJQXBCMUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLHFDQUFnQixDQUFDO1lBQzFDLFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWiw4REFBNEI7Z0JBQzVCLCtDQUFxQjtnQkFDckIsK0NBQXFCO2dCQUNyQixpREFBc0I7Z0JBQ3RCLDJDQUFtQjtnQkFDbkIsMERBQTBCO2dCQUMxQixpREFBc0I7Z0JBQ3RCLDBDQUFjO2FBQ2Y7WUFDRCxTQUFTLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsc0JBQWE7b0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCLENBQUM7WUFDRixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBRTFCLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQge0FQUF9CQVNFX0hSRUZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtBcHBSb3V0aW5nTW9kdWxlfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7Q29uZmlnV2VsY29tZVNjcmVlbkNvbnBvbmVudH0gZnJvbSAnLi9jb25maWdTY3JlZW4vY29tcG9uZW50cy9jb25maWdXZWxjb21lU2NyZWVuL2NvbmZpZy13ZWxjb21lLXNjcmVlbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbmZpZ1NjcmVlbkNvbnBvbmVudH0gZnJvbSAnLi9jb25maWdTY3JlZW4vY29tcG9uZW50cy9jb25maWctc2NyZWVuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U3BsYXNoU2NyZWVuQ29tcG9uZW50fSBmcm9tICAnLi9zcGxhc2hTY3JlZW4vY29tcG9uZW50cy9zcGxhc2gtc2NyZWVuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UHJldmlld1NjcmVlbkNvbXBvbmVudH0gZnJvbSAnLi9wcmV2aWV3U2NyZWVuL2NvbXBvbmVudHMvcHJldmlldy1zY3JlZW4uY29tcG9uZW50JztcclxuaW1wb3J0IHtQcmV2aWV3UGhvdG9TdHJpcENvbXBvbmVudH0gZnJvbSAnLi9wcmV2aWV3U2NyZWVuL2NvbXBvbmVudHMvUHJldmlld1Bob3RvU3RyaXAvcHJldmlldy1waG90by1zdHJpcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Nob3RDb3VudGRvd25Db21wb25lbnR9IGZyb20gJy4vcHJldmlld1NjcmVlbi9jb21wb25lbnRzL1Nob3RDb3VudGRvd24vc2hvdC1jb3VudGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHtFZGl0U2NyZWVuQ29tcG9uZW50fSBmcm9tICcuL2VkaXRTY3JlZW4vY29tcG9uZW50cy9lZGl0LXNjcmVlbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0ZpbHRlckNhcm91c2VsfSBmcm9tICcuL2ltYWdlRmlsdGVyL2NvbXBvbmVudHMvZmlsdGVyLWNhcm91c2VsLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBBcHBSb3V0aW5nTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgQ29uZmlnV2VsY29tZVNjcmVlbkNvbnBvbmVudCxcclxuICAgIENvbmZpZ1NjcmVlbkNvbnBvbmVudCxcclxuICAgIFNwbGFzaFNjcmVlbkNvbXBvbmVudCxcclxuICAgIFByZXZpZXdTY3JlZW5Db21wb25lbnQsXHJcbiAgICBFZGl0U2NyZWVuQ29tcG9uZW50LFxuICAgIFByZXZpZXdQaG90b1N0cmlwQ29tcG9uZW50LFxuICAgIFNob3RDb3VudGRvd25Db21wb25lbnQsXG4gICAgRmlsdGVyQ2Fyb3VzZWxcbiAgXSxcclxuICBwcm92aWRlcnM6IFt7XHJcbiAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxyXG4gICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXHJcbiAgfV0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
