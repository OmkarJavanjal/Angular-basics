import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'department-list',
    template: `<h3>Department List</h3>
            <ul>
                <li (click)="onSelect(department)" *ngFor="let department of departments">
                    {{ department.id }} {{ department.name }}
                </li>
            </ul>

    `

})
export class DepartmentListComponent{
    constructor(private router: Router){}
    departments =[
        {"id": 1, "name": "Omkar"},
        {"id": 2, "name": "Omkar1"},
        {"id": 3, "name": "Omkar2"},
        {"id": 4, "name": "Omkar3"},
        {"id": 5, "name": "Omkar4"}
    ]

    onSelect(department){
        this.router.navigate(['/departments', department.id]);
    }

}