import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PipesComponent } from './pipes/pipes.component';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  PercentPipe,
} from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ObservalbePromisComponent } from './observalbe-promis/observalbe-promis.component';
import { HeaderComponent } from './header/header.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookListComponent } from './library/book-list/book-list.component';
import { RequestBookComponent } from './library/request-book/request-book.component';
import { SubmitBookComponent } from './library/submit-book/submit-book.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { SalaryComponent } from './employee/salary/salary.component';
import { AttendenceComponent } from './employee/attendence/attendence.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { ResultComponent } from './student/result/result.component';
import { FeesComponent } from './student/fees/fees.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent,
    FileUploadComponent,
    PipesComponent,
    TemplateDrivenComponent,
    ObservalbePromisComponent,
    HeaderComponent,
    HttpComponent,
    CustomPipePipe,
    MyDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
