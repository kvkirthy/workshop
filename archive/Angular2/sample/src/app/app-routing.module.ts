import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DinosaurListComponent} from './dinosaur-list/dinosaur-list.component';
import {DinosaurDetailsComponent} from './dinosaur-details/dinosaur-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: DinosaurListComponent
  },
    {
    path: 'details/:name',
    component: DinosaurDetailsComponent
  },
  {
    path: '',
    redirectTo:"/home",
    pathMatch:"full"
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
