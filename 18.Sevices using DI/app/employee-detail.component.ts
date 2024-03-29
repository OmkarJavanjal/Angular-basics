import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'employee-detail',
  template: `<h1>Employee Details</h1>
            <ul *ngFor="let employee of employees">
                <li>{{employee.id}}. {{employee.name}} - {{employee.gender}}</li>
            </ul>`
})
export class EmployeeDetailComponent implements OnInit  { 
    employees = [];
    constructor(private _employeeService: EmployeeService){}
        ngOnInit(){
            this.employees = this._employeeService.getEmployees();
            }
}
