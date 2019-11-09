import { Component } from '@angular/core';
import {TutorialsComponent} from './tutorials.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
            <h2>Parent App Component</h2>
            <label>Enter Parent AppComponent Value</label>
            <input type="text" #ptext (keyup)="0">
            <p>Value from child tutorial component is:</p>
            {{childData}}
            <my-tutorials (childEvent)="childData=$event" [parentData]="ptext.value"></my-tutorials>        
            `,

   // directives: [TutorialComponents]  this won't works in this npm version so Tutorials Component has declared in declaration in @ngModule of app.module.ts 
})
export class AppComponent  { 
  name = 'world'; 
  public childData:string;
}
