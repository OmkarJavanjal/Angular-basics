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
        animate('1s')
      ]),
      transition('* => void', [
        animate('1s', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
  
})
export class AppComponent {
  showDiv: boolean = true;
  toggleDiv(){
      this.showDiv = this.showDiv? false : true;
  }
}
