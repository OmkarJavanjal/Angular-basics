import { Component } from '@angular/core';

@Component({
    selector:'my-tutorials',
    template:`
         <h2>{{title}}</h2>
         <img src="http://www.lorempixel.com/400/200">
         <p>OTHER WAY</p>
        <img [src]="imglink"> <br><br> 
        <input type="text" value="Angular">        
        `,    
})
    
export class TutorialsComponent{
    public title="My Tutorials";    
    public imglink = "http://www.lorempixel.com/300/150"; 
}