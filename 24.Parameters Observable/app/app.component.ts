import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>Routing Application</h1>
            <nav>
            <a routerLink="/departments" routerLinkActive="active"> departments</a>
            <a routerLink="/employees" routerLinkActive="active">employees</a>
            <button routerLink="/departments" routerLinkActive="active">Departments</button>
            <button routerLink="/employees" routerLinkActive="active">Employees</button>  
            </nav>
            <router-outlet></router-outlet>
          `
})
export class AppComponent { }
