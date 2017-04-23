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
var name_list_service_1 = require('../shared/name-list/name-list.service');
var HomeComponent = (function () {
    function HomeComponent(nameListService) {
        this.nameListService = nameListService;
        this.newName = '';
        this.names = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getNames();
    };
    HomeComponent.prototype.getNames = function () {
        var _this = this;
        this.nameListService.get()
            .subscribe(function (names) { return _this.names = names; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.addName = function () {
        this.names.push(this.newName);
        this.newName = '';
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            template: "<p>Howdy! Here's a list of awesome computer scientists. Do you know any others? Add to the list yourself.</p>  <form (submit)=\"addName()\">   <input [(ngModel)]=\"newName\" name=\"newName\" placeholder=\"Awesome Computer Scientist\">   <button type=\"submit\">Add</button> </form>  <ul>   <li *ngFor=\"let name of names\">{{name}}</li> </ul>",
            styles: [":host{display:block;padding:0 16px}input{width:250px}ul{list-style-type:none;padding:0 0 0 8px}"],
        }), 
        __metadata('design:paramtypes', [name_list_service_1.NameListService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
