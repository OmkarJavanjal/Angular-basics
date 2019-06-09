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
        this.roomState = "off";
    }
    AppComponent.prototype.toggleLights = function () {
        this.roomState = (this.roomState === "off") ? "on" : "off";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Angular Animation</h1>\n          <button (click)=\"toggleLights()\">ToggleLights</button>\n          <div [@lightsOnOff]=\"roomState\" class=\"room\">Rotate</div>",
            animations: [
                core_1.trigger('lightsOnOff', [core_1.state('off', core_1.style({
                        backgroundColor: 'black'
                    })),
                    core_1.state('on', core_1.style({
                        backgroundColor: 'white'
                    })),
                    core_1.transition('off<=>on', [core_1.animate('2s', core_1.style({ transform: 'rotate(90deg)' }))]),
                ])
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map