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
var lang_text_values_service_1 = require('../../shared/services/lang-text-values.service');
var LangText = (function () {
    function LangText() {
        this.selectedLang = 'ES';
    }
    Object.defineProperty(LangText.prototype, "selectedLang", {
        get: function () {
            return this._selectedLang;
        },
        set: function (selectedLang) {
            this._selectedLang = selectedLang;
        },
        enumerable: true,
        configurable: true
    });
    LangText.prototype.getText = function (type) {
        return lang_text_values_service_1.LANG[this._selectedLang][type];
    };
    LangText = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LangText);
    return LangText;
}());
exports.LangText = LangText;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvbGFuZy10ZXh0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyx5Q0FBcUIsZ0RBQWdELENBQUMsQ0FBQTtBQUd0RTtJQUVDO1FBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUNELHNCQUFJLGtDQUFZO2FBR2hCO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDM0IsQ0FBQzthQUxELFVBQWtCLFlBQW9CO1lBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBSUQsMEJBQU8sR0FBUCxVQUFTLElBQVk7UUFDcEIsTUFBTSxDQUFDLCtCQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFkRjtRQUFDLGlCQUFVLEVBQUU7O2dCQUFBO0lBZWIsZUFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksZ0JBQVEsV0FjcEIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL2xhbmctdGV4dC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMQU5HIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2xhbmctdGV4dC12YWx1ZXMuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMYW5nVGV4dCB7XHJcblx0cHJpdmF0ZSBfc2VsZWN0ZWRMYW5nOiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHRoaXMuc2VsZWN0ZWRMYW5nID0gJ0VTJztcclxuXHR9XHJcblx0c2V0IHNlbGVjdGVkTGFuZyggc2VsZWN0ZWRMYW5nOiBzdHJpbmcgKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RlZExhbmcgPSBzZWxlY3RlZExhbmc7XHJcblx0fVxyXG5cdGdldCBzZWxlY3RlZExhbmcoKSA6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0ZWRMYW5nO1xyXG5cdH1cclxuXHRnZXRUZXh0KCB0eXBlOiBzdHJpbmcgKSA6c3RyaW5nIHtcclxuXHRcdHJldHVybiBMQU5HW3RoaXMuX3NlbGVjdGVkTGFuZ11bdHlwZV07XHJcblx0fVxyXG59XHJcbiJdfQ==
