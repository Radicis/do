import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TruncatePipe} from './pipes/truncate.pipe';

import { AppComponent } from './app.component';
import { ItemListComponent } from './itemlist/itemlist.component';

@NgModule({
    declarations: [ AppComponent, ItemListComponent, TruncatePipe ],
    imports: [ BrowserModule, HttpModule, JsonpModule, BrowserAnimationsModule,MaterialModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
