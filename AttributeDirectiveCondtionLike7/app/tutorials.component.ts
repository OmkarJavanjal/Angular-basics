import { Component } from '@angular/core';


@Component({
    selector:'my-tutorials',
    template:`
         <h2>{{title}}</h2>
         <p [ngClass]="{classOne:cone,classTwo:ctwo}">ngClass Paragraph</p>
         <button (click)="toggle()">Toggle</button>
         <p [ngStyle]="{'font-style':style,'font-size':size}">ngStyle Paragraph</p>
        `,    
    styles:[`.classOne{color:white}
            .classTwo{background-color:black}
            `]
})
    
export class TutorialsComponent{
    public title="My Tutorials";   
    public cone=true;
    public ctwo=true; 
    public style='italic';
    public size='30px';
    toggle(){
        this.cone=!this.cone;
        this.ctwo=!this.ctwo;
    }
   }

   