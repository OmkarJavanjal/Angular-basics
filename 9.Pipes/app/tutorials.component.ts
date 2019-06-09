import { Component } from '@angular/core';


@Component({
    selector:'my-tutorials',
    template:`
         <h2>{{title}}</h2>
         <h2>{{title | uppercase}}</h2>
         <h2>{{title | lowercase}}</h2>
         <h2>{{title | slice:'2':'6'}}</h2>
        
         <h2>{{8.567}}</h2>
         <h2>{{8.567 | number:'1.2-3'}}</h2>
         <h2>{{8.567 | number:'2.2-3'}}</h2>
         <h2>{{8.567 | number:'2.4-4'}}</h2>
         <h2>{{8.567 | number:'2.2-2'}}</h2>

         <h2>{{8.99 | currency:'GBP':true}}</h2>
         
         <h2>{{date}}</h2>
         <h2>{{date | date:'fullDate'}}</h2>
         <h2>{{date | date:'shortDate'}}</h2>
         <h2>{{date | date:'mediumTime'}}</h2>
         <h2>{{date | date:'shortTime'}}</h2>
        `,    
    
})
    
export class TutorialsComponent{
    public title="My Tutorials";   
    date = new Date();

   }

   