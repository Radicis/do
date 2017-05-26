import { Component, OnInit } from '@angular/core';
import { ItemService } from './itemlist/item.service';

@Component({
    selector: 'my-app',
    template: `
        <md-card>
            <md-input-container class="full-width">
                <input mdInput name="input" type="text" placeholder="Do What?.." [(ngModel)]="todoInput">
            </md-input-container>
            <button md-raised-button class="add-button" (click)="addNew()">Add</button>
            <item-list [items]="items"></item-list>
        </md-card>`,
    providers: [ItemService]
})

export class AppComponent {
    constructor(itemService: ItemService) {
        this.todoInput = null;
        this._itemService = itemService;
    }

    addNew() {
        if (this.todoInput != null && this.todoInput != "")
            this.items.push({name:this.todoInput, done:false});
    }

    getItems(){
        this.items = this._itemService.getItems();
    }

    ngOnInit(){
        this.getItems();
    }
}


