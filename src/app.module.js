import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import 'rxjs/add/operator/map';

import ToDoComponent from './app.component';

const routing = RouterModule.forRoot([
  { path: '', component: ToDoComponent },
]);

@NgModule({
  imports: [
    BrowserModule,
    routing,
  ],
  declarations: [
    ToDoComponent,
  ],
  bootstrap: [ToDoComponent],
})
export class AppModule {
}
