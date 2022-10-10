import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { SubmitBookComponent } from './submit-book/submit-book.component';
import { LibraryRoutingModule } from './library-routing.module';

@NgModule({
  declarations: [BookListComponent, RequestBookComponent, SubmitBookComponent],
  imports: [CommonModule, LibraryRoutingModule],
})
export class LibraryModule {}
