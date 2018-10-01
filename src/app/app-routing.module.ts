import { DepartmentComponent } from './department/department.component';
import { EmpolyeeDetailsComponent } from './empolyee-details/empolyee-details.component';
import { EmpolyeeListComponent } from './empolyee-list/empolyee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'department', component : DepartmentComponent},
  {path : 'employees', component : EmpolyeeListComponent},
  {path : 'employeedetails', component : EmpolyeeDetailsComponent}
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponent = [DepartmentComponent, EmpolyeeDetailsComponent, EmpolyeeListComponent];

