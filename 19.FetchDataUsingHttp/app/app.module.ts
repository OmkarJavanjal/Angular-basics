import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { EmployeeListComponent } from './employee-list.component'
import { EmployeeDetailComponent } from './employee-detail.component'
import { HttpModule } from '@angular/http'


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, EmployeeListComponent, EmployeeDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
