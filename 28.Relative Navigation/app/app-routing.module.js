"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var department_list_component_1 = require("./department-list.component");
var employee_list_component_1 = require("./employee-list.component");
var department_detail_component_1 = require("./department-detail.component");
var home_component_1 = require("./home.component");
var page_not_found_component_1 = require("./page-not-found.component");
var routes = [
    //{path:'', component: HomeComponent},        //empty path is default path
    //{path:'', redirectTo: '/departments', pathMatch: 'prefix'},   //prefix redirects to department always as each line has empty address
    //{path:'', redirectTo: '/departments', pathMatch: 'full'},    //full redirects to department and use this only (strictly matches use  this only)
    { path: 'departmentsList', component: department_list_component_1.DepartmentListComponent },
    { path: 'employees', component: employee_list_component_1.EmployeeListComponent },
    { path: 'departmentsList/:id', component: department_detail_component_1.DepartmentDetailComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent } //if no url matches it say  page not found so it should be kept at last
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [department_list_component_1.DepartmentListComponent,
    employee_list_component_1.EmployeeListComponent, department_detail_component_1.DepartmentDetailComponent,
    home_component_1.HomeComponent, page_not_found_component_1.PageNotFoundComponent];
//# sourceMappingURL=app-routing.module.js.map