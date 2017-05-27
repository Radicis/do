import { Component, Input, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
} from '@angular/animations';


@Component({
    selector: 'item-list',
    template: `        
    <md-card class="text-center" *ngIf="items.length==0">Nothing Yet!</md-card>
        <md-card *ngFor="let item of items" [@setActive]='item.state'>
            <md-card-content>
                <h3 [ngClass]="{'is-done': item.completed}" > {{item.title | truncate: 60}}</h3>
                <md-card-actions>
                    <button md-button *ngIf="!item.completed" (click)="done(item)"  mdTooltip="Mark as Done">
                        <md-icon color="primary">done</md-icon>
                    </button>
                    <button md-button (click)="delete(item)" mdTooltip="Delete me"><md-icon color="primary">delete</md-icon></button>
                </md-card-actions>
            </md-card-content>
        </md-card>`,
    animations: [

        trigger('setActive', [
            state('void', style({
                'transform':'translateX(-100%)'
            })),
            state('inactive', style({
                backgroundColor: '#eeeeee'
            })),
            state('active', style({
                backgroundColor: '#fefefe'
            })),
            transition('* => *', animate(200))
        ]),

    ]
})

export class ItemListComponent {
    @Input() items = [];

    constructor() {

    }

    setItemStates() {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].completed) {
                this.items[i].state = 'inactive';
            }
            else {
                this.items[i].state = 'active';
            }
        }
    }

    ngOnInit() {
        this.setItemStates();
    }

    delete(item) {
        this.items.splice(this.items.indexOf(item), 1); 
        this.setItemStates();       
    }

    done(item) {
        item.completed = true;
        this.setItemStates();
    }

}


