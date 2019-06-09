import { Component } from '@angular/core';

@Component({
    selector:'my-tutorials',
    template:`
         <h2>{{title}}</h2>
         <button (mouseover)="onClick(demoInput.value)">Click Me</button>
         <input type="text" #demoInput>        
         `,    
})
    
export class TutorialsComponent{
    public title="My Tutorials";    
   onClick(value){
       console.log(value);
   }

   
}