import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
    selector:'my-tutorials',
    template:`
         <h2>Child tutorial component</h2>
        <label>Enter Child Tutorialcomponent value</label>
        <input type="text" #childtext (keyup)="onChange(childtext.value)">
        <p>Value from parent Appcomponent is</p>
           {{parentData}}
         `,    
    inputs: [`parentData`],
    outputs: [`childEvent`]
})
    
export class TutorialsComponent{
    public parentData: string;
    childEvent = new EventEmitter<string>();
    onChange(value:string){
    this.childEvent.emit(value);

    }
    }


//ngSwitchWhen is not working here   so use ngSwitchCase