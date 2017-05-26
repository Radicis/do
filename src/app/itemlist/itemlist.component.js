import { Component, Input } from '@angular/core';

@Component({
    selector: 'item-list',
    template: `        <md-card class="text-center" *ngIf="items.length==0">Nothing Yet!</md-card>
        <md-card *ngFor="let item of items" disabled="true">
            <md-card-content>
                <h3 [ngClass]="{'is-done': item.done}"> {{item.name | truncate: 60}}</h3>
                <md-card-actions>
                    <button md-button *ngIf="!item.done" (click)="done(item)"  mdTooltip="Mark as Done">
                        <md-icon color="primary">done</md-icon>
                    </button>
                    <button md-button (click)="delete(item)" mdTooltip="Delete me"><md-icon color="primary">delete</md-icon></button>
                </md-card-actions>
            </md-card-content>
        </md-card>`
})

export class ItemListComponent {
    @Input() items;

    delete(item){
        this.items.splice(this.items.indexOf(item), 1);
    }

    done(item){
        item.done = true;
    }

}


