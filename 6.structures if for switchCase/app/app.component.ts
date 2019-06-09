import { Component } from '@angular/core';
import {TutorialsComponent} from './tutorials.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
            <my-tutorials></my-tutorials>    
            `,

   // directives: [TutorialComponents]  this won't works in this npm version so Tutorials Component has declared in declaration in @ngModule of app.module.ts 
})
export class AppComponent  { name = 'world'; }
