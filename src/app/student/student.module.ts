import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeesComponent } from './fees/fees.component';
import { ResultComponent } from './result/result.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentRoutingModule } from './student-routing.module';

@NgModule({
  declarations: [StudentListComponent, ResultComponent, FeesComponent],
  imports: [CommonModule, StudentRoutingModule],
})
export class StudentModule {}
