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
var config_welcome_screen_component_1 = require('./configScreen/components/config-welcome-screen.component');
var config_screen_component_1 = require('./configScreen/components/config-screen.component');
var splash_screen_component_1 = require('./splashScreen/components/splash-screen.component');
var preview_screen_component_1 = require('./previewScreen/components/preview-screen.component');
var preview_photo_strip_component_1 = require('./previewScreen/components/preview-photo-strip.component');
var shot_countdown_component_1 = require('./previewScreen/components/shot-countdown.component');
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
                filter_carousel_component_1.filterCarousel
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
