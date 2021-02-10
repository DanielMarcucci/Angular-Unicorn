import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnicornFormComponent } from './components/unicorn-form/unicorn-form.component';
import { UnicornListComponent } from './components/unicorn-list/unicorn-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/unicorns',
    pathMatch: 'full'
  },
  {
    path: 'unicorns',
    component: UnicornListComponent
  },
  {
    path: 'unicorns/add',
    component: UnicornFormComponent
  },
  {
    path: 'unicorns/edit/:id',
    component: UnicornFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
