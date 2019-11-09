import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee-list',
  template: `<h1>Employee List</h1>
            <h3>{{errorMsg}}</h3>
            <ul *ngFor="let employee of employees">
                <li>{{employee.name}}</li>
            </ul>`
})
export class EmployeeListComponent implements OnInit { 
    employees = [];
    errorMsg:string;
   constructor(private _employeeService: EmployeeService){}
        ngOnInit(){
            this._employeeService.getEmployees()
            .subscribe(resEmployeeData => this.employees = resEmployeeData, 
            resEmployeeError => this.errorMsg = resEmployeeError);
            
        }   
}
