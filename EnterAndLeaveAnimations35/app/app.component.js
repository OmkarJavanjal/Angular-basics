"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.showDiv = true;
    }
    AppComponent.prototype.toggleDiv = function () {
        this.showDiv = this.showDiv ? false : true;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Angular Animation</h1>\n        <button (click)=\"toggleDiv()\">ToggleDiv</button>\n          <div *ngIf=\"showDiv\" [@flyInOut]>\n              FlyInOut\n          </div>\n          ",
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateX(-100%)' }),
                        core_1.animate('1s')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('1s', core_1.style({ transform: 'translateX(100%)' }))
                    ])
                ])
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map