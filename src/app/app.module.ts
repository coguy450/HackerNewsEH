import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule, routedComponents } from './app-routing';
import {CommentsComponent} from './comments/comments.component';
import {UserComponent} from './user/user.component'
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    routedComponents,
    CommentsComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
