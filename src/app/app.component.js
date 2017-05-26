import { Component, OnInit } from '@angular/core';
import { ListService } from './itemlist/list.service';
import { MdDialog } from '@angular/material';

@Component({
    selector: 'my-app',
    template: `
<md-sidenav-container>
    <md-sidenav #sidenav mode="over" class="app-sidenav">
 <md-toolbar color="primary">
        <h3>Suprise Ipsum!</h3>
      </md-toolbar>   
      <md-card>Nunc id eleifend tellus, quis rhoncus tellus. In eget tellus id elit tristique euismod a consequat ligula. Aliquam erat volutpat. Vivamus convallis gravida enim, et ornare justo.</md-card>   

    </md-sidenav>
        <md-toolbar color="primary">
            <button md-icon-button (click)="sidenav.toggle()">
                <md-icon class="md-24" >menu</md-icon>
            </button>            
            <span>To Do</span>
            <span class="example-spacer"></span>
    <md-icon class="example-icon" mdTooltip="<3">favorite</md-icon>
        </md-toolbar>
    <div class="app-content">
    <div layout="row">
      <md-input-container class="md-icon-float md-title full-width">
                <input mdInput name="input" type="text" placeholder="Do What?.." [(ngModel)]="todoInput" (keydown)="handleKeyDown($event) ">
     </md-input-container>               
    </div>    

            <md-tab-group (selectChange)="setActive($event)">
            <md-tab *ngFor="let list of lists" label="{{list.name}}"><item-list [items]="list.items"></item-list></md-tab>
            <md-tab label="+Add">
            <md-card>
                <md-input-container class="full-width">
                <input mdInput name="list-input" type="text" placeholder="New list name" [(ngModel)]="newListInput" (keydown)="handleKeyDownNewList($event)">              
            </md-input-container>      </md-card>    
            </md-tab>
         
            </md-tab-group>
    </div>
</md-sidenav-container>

`,
    providers: [ListService]
})

export class AppComponent {
    constructor(listService: ListService) {
        this.todoInput = null;
        this._listService = listService;
        this.activeList = 0;
    }

    handleKeyDown(event) {
        if (event.keyCode == 13) {
            this.addNew();
        }
    }

    handleKeyDownNewList(event) {
        if (event.keyCode == 13) {
            this.addNewList();
        }
    }

    addNew() {
        if (this.todoInput != null && this.todoInput != "")
            this.lists[this.activeList].items.push({ name: this.todoInput, done: false });
    }

    addNewList() {
        if (this.newListInput != null && this.newListInput != "")
            this.lists.push({ name: this.newListInput, items: [] });
    }

    setActive(e) {
        this.activeList = e.index;
    }

    getLists() {
        this.lists = this._listService.getItems();
    }

    ngOnInit() {
        this.getLists();
    }

}




