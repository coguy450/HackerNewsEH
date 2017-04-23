import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {ListViewComponent} from './list-view/list-view.component';
import { CommentsComponent } from './comments/comments.component';
import {UserComponent} from './user/user.component'
const routes: Routes = [
  {
     path: '',
     component: ListViewComponent
  },
  {
     path: 'comments/:id',
     component: CommentsComponent,
     pathMatch: 'full'
   },
   {
     path: 'user/:id',
     component: UserComponent
   }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routedComponents = [CommentsComponent, AppComponent, UserComponent];
