import { Component } from '@angular/core';


@Component({
    selector:'my-tutorials',
    template:`
         <h2>{{title}}</h2>
        <input type="text" [(ngModel)]="fname">
        <input type="text" [(ngModel)]="lname">
        FullName:{{fname}} {{lname}}
        `,    
})
    
export class TutorialsComponent{
    public title="My Tutorials";   
    public fname:any;
    public lname:any; 
   }

   