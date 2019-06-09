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
          <button (click)="toggleLights()">ToggleLights</button>
          <div [@lightsOnOff]="roomState" class="room">Rotate</div>`,
  animations: [
      trigger('lightsOnOff', [state('off', style({
        backgroundColor: 'black'
      })),
      state('on',style({
        backgroundColor:'white'
      })),
      transition('off<=>on', [animate('2s', style({transform: 'rotate(90deg)'}))]),
      //transition('off=>on, on=>off', [animate('2s', style({transform: 'rotate(90deg)'}))]),
      //transition('on=>off', [animate('2s')]),
      ])
  ]
})
export class AppComponent {
  roomState: string = "off"; 
  toggleLights(){
      this.roomState = (this.roomState === "off")? "on":"off";

  }
}
