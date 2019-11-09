import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'

@Component({
     template: `<h3>You selected department with id = {{departmentId}}</h3>
                <a (click)="goPrevious()">Previous</a>
                <a (click)="goNext()">Next</a>
     `

})
export class DepartmentDetailComponent implements OnInit{
    public departmentId;
    constructor(private route: ActivatedRoute, private router: Router ){}
    // ngOnInit(){
    //     let id = this.route.snapshot.params['id'];
    //     this.departmentId = id;
    // }

    ngOnInit(){
        this.route.params.subscribe((params: Params)=>{
            let id = parseInt(params['id']);
            this.departmentId = id;
        })
    }

    goPrevious(){
        let previousId = this.departmentId - 1;
        this.router.navigate(['/departments', previousId]);
    }
    goNext(){
        let nextId = this.departmentId + 1;
        this.router.navigate(['/departments', nextId]);
    }
}