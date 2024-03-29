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
var core_2 = require('@angular/core');
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.childEvent = new core_2.EventEmitter();
    }
    TutorialsComponent.prototype.onChange = function (value) {
        this.childEvent.emit(value);
    };
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "\n         <h2>Child tutorial component</h2>\n        <label>Enter Child Tutorialcomponent value</label>\n        <input type=\"text\" #childtext (keyup)=\"onChange(childtext.value)\">\n        <p>Value from parent Appcomponent is</p>\n           {{parentData}}\n         ",
            inputs: ["parentData"],
            outputs: ["childEvent"]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//ngSwitchWhen is not working here   so use ngSwitchCase 
//# sourceMappingURL=tutorials.component.js.map