import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { SubmitBookComponent } from './submit-book/submit-book.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'book-list',
    component: BookListComponent,
  },
  {
    path: 'request-book',
    component: RequestBookComponent,
  },
  {
    path: 'submit-book',
    component: SubmitBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule {}
