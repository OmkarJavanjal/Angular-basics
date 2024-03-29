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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var DepartmentListComponent = (function () {
    function DepartmentListComponent(router) {
        this.router = router;
        this.departments = [
            { "id": 1, "name": "Omkar" },
            { "id": 2, "name": "Omkar1" },
            { "id": 3, "name": "Omkar2" },
            { "id": 4, "name": "Omkar3" },
            { "id": 5, "name": "Omkar4" }
        ];
    }
    DepartmentListComponent.prototype.onSelect = function (department) {
        this.router.navigate(['/departments', department.id]);
    };
    DepartmentListComponent = __decorate([
        core_1.Component({
            selector: 'department-list',
            template: "<h3>Department List</h3>\n            <ul>\n                <li (click)=\"onSelect(department)\" *ngFor=\"let department of departments\">\n                    {{ department.id }} {{ department.name }}\n                </li>\n            </ul>\n\n    "
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], DepartmentListComponent);
    return DepartmentListComponent;
}());
exports.DepartmentListComponent = DepartmentListComponent;
//# sourceMappingURL=department-list.component.js.map