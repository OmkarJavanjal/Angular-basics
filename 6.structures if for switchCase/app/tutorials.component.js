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
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.title = "My Tutorials";
        this.showelement = true;
        this.color = 'blue';
        this.colors = ['red', 'blue', 'green'];
    }
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "\n         <h2>{{title}}</h2>\n         <p *ngIf=\"showelement\">ShowElement</p>\n         <div [ngSwitch]=\"color\">\n            <p *ngSwitchCase=\"'red'\">Red Color</p>\n             <p *ngSwitchCase=\"'blue'\">Blue Color</p>      \n            <p *ngSwitchDefault>Invalid Color</p>\n         </div>\n         <ul>\n            <li *ngFor=\"let color of colors\">{{color}}</li>\n         </ul>\n         ",
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//ngSwitchWhen is not working here   so use ngSwitchCase 
//# sourceMappingURL=tutorials.component.js.map