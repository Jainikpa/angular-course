import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './http/http.component';
import { ObservalbePromisComponent } from './observalbe-promis/observalbe-promis.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-us/:id',
    component: AboutUsComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'observable-promises',
    component: ObservalbePromisComponent,
  },
  {
    path: 'http',
    component: HttpComponent,
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./library/library.module').then((m) => m.LibraryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
