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
          <button (click)="toggleHeights()">ToggleHeights</button>

          <div [@lightsOnOff]="roomState" class="room">Rotate</div>
          //<div  [@heightTrigger]="heightState" class="heightBox">
            <div [@lightsOnOff]="roomState" [@heightTrigger]="heightState" class="heightBox">
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
          </div>
          `,
  animations: [
      trigger('lightsOnOff', [state('off', style({
        backgroundColor: 'black'
      })),
      state('on',style({
        backgroundColor:'white'
      })),
      transition('off=>on', [animate('2000ms ease-in', style({transform: 'rotate(90deg)'}))]),   //duration delay easing function
      transition('on=>off', [animate('2s ease-out', style({transform: 'rotate(90deg)'}))])
      ]),
      trigger('heightTrigger', 
      [state('noHeight', style({
        height: 0
      })),
      state('fullHeight',style({
        height: '*'
      })),
      transition('noHeight<=>fullHeight', [animate('2000ms')]),   //duration delay easing function
      ])
  ]
})
export class AppComponent {
  roomState: string = "off"; 
  heightState: string = "fullHeight";
  toggleLights(){
      this.roomState = (this.roomState === "off")? "on":"off";
  }
  
  toggleHeights(){
      this.heightState = (this.heightState === "noHeight")? "fullHeight":"noHeight";
  }
}
