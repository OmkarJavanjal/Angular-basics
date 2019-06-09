import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { DepartmentListComponent } from './department-list.component';
import { EmployeeListComponent } from './employee-list.component';
import { DepartmentDetailComponent } from './department-detail.component'
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component'

const routes: Routes = [ 
      //{path:'', component: HomeComponent},        //empty path is default path
      //{path:'', redirectTo: '/departments', pathMatch: 'prefix'},   //prefix redirects to department always as each line has empty address
      //{path:'', redirectTo: '/departments', pathMatch: 'full'},    //full redirects to department and use this only (strictly matches use  this only)
      {path: 'departmentsList', component: DepartmentListComponent},
      {path: 'employees', component: EmployeeListComponent},
      {path: 'departmentsList/:id', component: DepartmentDetailComponent},
      { path:'**',component: PageNotFoundComponent}     //if no url matches it say  page not found so it should be kept at last
 ];


@NgModule({
    imports: [
            RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}
export const routingComponents = [DepartmentListComponent, 
            EmployeeListComponent, DepartmentDetailComponent, 
            HomeComponent, PageNotFoundComponent]
