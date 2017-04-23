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
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-about',
            template: "<p>Angular 2 Seed is a starter project that implements best practices in coding, building and testing Angular 2 apps.</p>  <h2>Features</h2> <ul>   <li>Ready to go, statically typed build system using Gulp for working with TypeScript.</li>   <li>Production and development builds.</li>   <li>Sample unit tests with Jasmine and Karma including code coverage via Istanbul.</li>   <li>End-to-end tests with Protractor.</li>   <li>Development server with live reload.</li>   <li>TypeScript definition management using Types.</li>   <li>Basic Service Worker, which implements \"Cache then network strategy\".</li> </ul>",
            styles: [":host{display:block;padding:0 16px}h2{font-size:20px;font-weight:500;letter-spacing:.005em;margin-bottom:0;margin-top:.83em}"]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
