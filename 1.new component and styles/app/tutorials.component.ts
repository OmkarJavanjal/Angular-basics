import { Component } from '@angular/core';

@Component({
    selector:'my-tutorials',
    template:`
         <h2>My First component</h2>
         <h4>Header from tutorials component</h4>
        `,
    styles:[`h4{
            color:red;
           }`
        ]
    
})
    
export class TutorialsComponent{}