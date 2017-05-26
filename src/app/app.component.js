import { Component, OnInit } from '@angular/core';
import { ListService } from './itemlist/list.service';
import { MdDialog } from '@angular/material';

@Component({
    selector: 'my-app',
    template: `
        <md-card>
            <md-input-container class="full-width">
                <input mdInput name="input" type="text" placeholder="Do What?.." [(ngModel)]="todoInput">
            </md-input-container>            
            <button md-raised-button class="add-button" (click)="addNew()">Add</button>            

            <md-tab-group (selectChange)="setActive($event)">
            <md-tab *ngFor="let list of lists" label="{{list.name}}"><item-list [items]="list.items"></item-list></md-tab>
            <md-tab label="+Add">
            <md-card>
                <md-input-container class="full-width">
                <input mdInput name="list-input" type="text" placeholder="New list name" [(ngModel)]="newListInput">
              
            </md-input-container> <button md-raised-button class="add-button" (click)="addNewList()">Add</button>          </md-card>    
            </md-tab>
         
            </md-tab-group>
            
        </md-card>`,
    providers: [ListService]
})

export class AppComponent {
    constructor(listService: ListService) {
        this.todoInput = null;
        this._listService = listService;
        this.activeList = 0;
    }

    addNew() {
        if (this.todoInput != null && this.todoInput != "")
            this.lists[this.activeList].items.push({ name: this.todoInput, done: false });
    }

    addNewList(){
        if (this.newListInput != null && this.newListInput != "")
            this.lists.push({ name: this.newListInput, items:[] });
    }

    setActive(e){
        this.activeList = e.index;
    }

    getLists() {
        this.lists = this._listService.getItems();
    }

    ngOnInit() {
        this.getLists();
    }

}




