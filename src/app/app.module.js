import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ItemListComponent } from './itemlist/itemlist.component';

@NgModule({
    declarations: [ AppComponent, ItemListComponent ],
    imports: [ BrowserModule, BrowserAnimationsModule,MaterialModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
