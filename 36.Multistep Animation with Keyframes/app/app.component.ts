import { Component,
        trigger,
        state,
        style,
        transition,
        animate,
        keyframes,
        group
} from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>Angular Animation</h1>
        <button (click)="toggleDiv()">ToggleDiv</button>
          <div *ngIf="showDiv" [@flyInOut]>
              FlyInOut
          </div>
          `,
  animations: [
    trigger('flyInOut', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(1000, keyframes([
          style({opacity: 0, transform: 'translate(-100%)', offset: 0}),   //brings from left
          style({opacity: 1, transform: 'translate(15px)', offset: 0.3}),  // moves to right by 15 pixels
          style({opacity: 1, transform: 'translate(0)', offset: 1.0}),     //atlast it comes to original position
        ])
        )
      ]),    //opacity tells about visibility(if 1-visible, 0-invisible)             //offset tells time duration   translate gives position(100%-right;-100%-left)
      transition('* => void', [
          animate(1000, keyframes([
          style({opacity: 1, transform: 'translate(0)', offset: 0}),          //it looks as opacity is 1
          style({opacity: 1, transform: 'translate(-15px)', offset: 0.7}),    //it moves to left by 15 pixels
          style({opacity: 0, transform: 'translate(100%)', offset: 1.0}),     //it goes to right and becomes invisible
        ])
        )      ])
    ])
  ]
  
})
export class AppComponent {
  showDiv: boolean = true;
  toggleDiv(){
      this.showDiv = this.showDiv? false : true;
  }
}
