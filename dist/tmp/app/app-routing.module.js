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
var config_welcome_screen_component_1 = require('./configScreen/components/config-welcome-screen.component');
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
