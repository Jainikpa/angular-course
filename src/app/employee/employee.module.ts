import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendenceComponent } from './attendence/attendence.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SalaryComponent } from './salary/salary.component';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  declarations: [EmployeeListComponent, SalaryComponent, AttendenceComponent],
  imports: [CommonModule, EmployeeRoutingModule],
})
export class EmployeeModule {}
