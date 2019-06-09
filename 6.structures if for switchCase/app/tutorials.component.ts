import { Component } from '@angular/core';

@Component({
    selector:'my-tutorials',
    template:`
         <h2>{{title}}</h2>
         <p *ngIf="showelement">ShowElement</p>
         <div [ngSwitch]="color">
            <p *ngSwitchCase="'red'">Red Color</p>
             <p *ngSwitchCase="'blue'">Blue Color</p>      
            <p *ngSwitchDefault>Invalid Color</p>
         </div>
         <ul>
            <li *ngFor="let color of colors">{{color}}</li>
         </ul>
         `,    
})
    
export class TutorialsComponent{
    public title="My Tutorials";    
    public showelement=true; 
    public color='blue'; 
    public colors = ['red','blue','green'];
}


//ngSwitchWhen is not working here   so use ngSwitchCase