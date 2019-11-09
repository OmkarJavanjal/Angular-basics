"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.title = "My Tutorials";
        this.cone = true;
        this.ctwo = true;
        this.style = 'italic';
        this.size = '30px';
    }
    TutorialsComponent.prototype.toggle = function () {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    };
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "\n         <h2>{{title}}</h2>\n         <p [ngClass]=\"{classOne:cone,classTwo:ctwo}\">ngClass Paragraph</p>\n         <button (click)=\"toggle()\">Toggle</button>\n         <p [ngStyle]=\"{'font-style':style,'font-size':size}\">ngStyle Paragraph</p>\n        ",
            styles: [".classOne{color:white}\n            .classTwo{background-color:black}\n            "]
        })
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map