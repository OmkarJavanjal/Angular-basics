import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

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
    public selectedId;

    constructor(private router: Router , private route:ActivatedRoute){}
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

    ngOnInit(){
        this.route.params.subscribe((params: Params)=>{
            let id = parseInt(params['id']);
            this.selectedId = id;
        })
    }

    isSelected(department){
        return department.id === this.selectedId;
    }
}