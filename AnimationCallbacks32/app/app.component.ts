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
          <div (@lightsOnOff.done)="animationDone($event)" (@lightsOnOff.start)="animationStarted($event)" [@lightsOnOff]="roomState" class="room">Rotate</div>`,
  animations: [
      trigger('lightsOnOff', [state('off', style({
        backgroundColor: 'black'
      })),
      state('on',style({
        backgroundColor:'white'
      })),
      //transition('off<=>on', [animate('2s', style({transform: 'rotate(90deg)'}))]),
      //transition('off=>on, on=>off', [animate('2s', style({transform: 'rotate(90deg)'}))]),
      //transition('on=>off', [animate('2s')])
      transition('off=>on', [animate('2000ms 3s ease-in', style({transform: 'rotate(90deg)'}))]),   //duration delay easing function
      transition('on=>off', [animate('2s ease-out', style({transform: 'rotate(90deg)'}))])
      ])
  ]
})
export class AppComponent {
  roomState: string = "off"; 
  toggleLights(){
      this.roomState = (this.roomState === "off")? "on":"off";
  }
  
  animationStarted(event: any){
    console.log('Start Animation');
    console.log(event.fromState);
    console.log(event.toState);
    console.log(event.totalTime);
  }

  animationDone(event: any){
    console.log(event.fromState);
    console.log(event.toState);
    console.log(event.totalTime);
    console.log('Animation Done ');
  }
}
