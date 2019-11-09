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
          <div [@groupTrigger]="roomState" class="room">Rotate</div>
          
          `,
  animations: [
      trigger('groupTrigger',
      [state('off', style({
        backgroundColor: 'black'
      })),
      state('on',style({
        backgroundColor:'white'
      })),
      transition('off=>on', [group ([animate('4s ease-in',
       style({transform: 'rotate(90deg)',})),
       animate('2s ease-out', style({width: '50px'
      }))
      ])]),   //duration delay easing function

      transition('on=>off', [group ([animate('3s 1s ease-in',
       style({transform: 'rotate(360deg)',})),
       animate('4s', style({opacity: 0
      }))
      ])]),   //duration delay easing function
      
      ])      
  ]
})
export class AppComponent {
  roomState: string = "off"; 
  toggleLights(){
      this.roomState = (this.roomState === "off")? "on":"off";
  }
}
