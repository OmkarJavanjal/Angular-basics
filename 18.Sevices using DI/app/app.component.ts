import { Component } from '@angular/core';
import { EmployeeService } from './employee.service'
@Component({
  selector: 'my-app',
  template: `<h1>Random Company</h1>
            <employee-list></employee-list>
            <employee-detail></employee-detail>
            `,
  providers: [EmployeeService]   //register service here so that it is accessible for both list and detail of employee
})
export class AppComponent {}
 
