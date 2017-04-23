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
var config_welcome_screen_component_1 = require('./configScreen/components/configWelcomeScreen/config-welcome-screen.component');
var config_screen_component_1 = require('./configScreen/components/config-screen.component');
var splash_screen_component_1 = require('./splashScreen/components/splash-screen.component');
var preview_screen_component_1 = require('./previewScreen/components/preview-screen.component');
var edit_screen_component_1 = require('./editScreen/components/edit-screen.component');
var routes = [
    { path: '', component: config_welcome_screen_component_1.ConfigWelcomeScreenConponent },
    { path: 'ConfigScreen', component: config_screen_component_1.ConfigScreenConponent },
    { path: 'SplashScreen', component: splash_screen_component_1.SplashScreenComponent },
    { path: 'PreviewScreen', component: preview_screen_component_1.PreviewScreenComponent },
    { path: 'EditScreen/:stripIndex', component: edit_screen_component_1.EditScreenComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN2RCxnREFBMkMsK0VBQStFLENBQUMsQ0FBQTtBQUMzSCx3Q0FBb0MsbURBQW1ELENBQUMsQ0FBQTtBQUN4Rix3Q0FBcUMsbURBQW1ELENBQUMsQ0FBQTtBQUN6Rix5Q0FBcUMscURBQXFELENBQUMsQ0FBQTtBQUMzRixzQ0FBa0MsK0NBQStDLENBQUMsQ0FBQTtBQUVsRixJQUFNLE1BQU0sR0FBVztJQUV0QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhEQUE0QixFQUF1RDtJQUMxRyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUEyQjtJQUNuRixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUEyQjtJQUNuRixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUE0QjtJQUN0RixFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQTBCO0NBQzFGLENBQUM7QUFLRjtJQUFBO0lBQWdDLENBQUM7SUFKakM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBRSxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBRTtZQUN6QyxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQ3hCLENBQUM7O3dCQUFBO0lBQzhCLHVCQUFDO0FBQUQsQ0FBaEMsQUFBaUMsSUFBQTtBQUFwQix3QkFBZ0IsbUJBQUksQ0FBQSIsImZpbGUiOiJhcHAvYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0NvbmZpZ1dlbGNvbWVTY3JlZW5Db25wb25lbnR9IGZyb20gJy4vY29uZmlnU2NyZWVuL2NvbXBvbmVudHMvY29uZmlnV2VsY29tZVNjcmVlbi9jb25maWctd2VsY29tZS1zY3JlZW4uY29tcG9uZW50JztcclxuaW1wb3J0IHtDb25maWdTY3JlZW5Db25wb25lbnR9IGZyb20gJy4vY29uZmlnU2NyZWVuL2NvbXBvbmVudHMvY29uZmlnLXNjcmVlbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NwbGFzaFNjcmVlbkNvbXBvbmVudH0gZnJvbSAgJy4vc3BsYXNoU2NyZWVuL2NvbXBvbmVudHMvc3BsYXNoLXNjcmVlbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1ByZXZpZXdTY3JlZW5Db21wb25lbnR9IGZyb20gJy4vcHJldmlld1NjcmVlbi9jb21wb25lbnRzL3ByZXZpZXctc2NyZWVuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RWRpdFNjcmVlbkNvbXBvbmVudH0gZnJvbSAnLi9lZGl0U2NyZWVuL2NvbXBvbmVudHMvZWRpdC1zY3JlZW4uY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIC8veyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy8nLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG5cdHsgcGF0aDogJycsIGNvbXBvbmVudDogQ29uZmlnV2VsY29tZVNjcmVlbkNvbnBvbmVudC8qLCBuYW1lOiAnQ29uZmlnV2VsY29tZVNjcmVlbicsIHVzZUFzRGVmYXVsdDogdHJ1ZSovIH0sXHJcblx0eyBwYXRoOiAnQ29uZmlnU2NyZWVuJywgY29tcG9uZW50OiBDb25maWdTY3JlZW5Db25wb25lbnQvKiwgbmFtZTogJ0NvbmZpZ1NjcmVlbicqL30sXHJcblx0eyBwYXRoOiAnU3BsYXNoU2NyZWVuJywgY29tcG9uZW50OiBTcGxhc2hTY3JlZW5Db21wb25lbnQvKiwgbmFtZTogJ1NwbGFzaFNjcmVlbicqL30sXHJcblx0eyBwYXRoOiAnUHJldmlld1NjcmVlbicsIGNvbXBvbmVudDogUHJldmlld1NjcmVlbkNvbXBvbmVudC8qLCBuYW1lOiAnUHJldmlld1NjcmVlbicqL30sXHJcblx0eyBwYXRoOiAnRWRpdFNjcmVlbi86c3RyaXBJbmRleCcsIGNvbXBvbmVudDogRWRpdFNjcmVlbkNvbXBvbmVudC8qLCBuYW1lOiAnRWRpdFNjcmVlbicqLyB9XHJcbl07XHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogWyBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpIF0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==
