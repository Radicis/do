import { Injectable } from '@angular/core';
import { ITEMS } from './mock-items';
import { ItemService } from './item.service';

@Injectable()
export class ListService {

    constructor(itemService: ItemService) {
        this.itemService = itemService;
    }

    createList(title) {
        let list = { name: title, items: [] };
        let rand = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

        for(var i=0;i<rand;i++){
            this.itemService.getItem().then(item => {
                list.items.push(item);
            });
        }

        return list;
    }

    getItem() {
        return this.itemService.getItem().then(item => {
            console.log(item);
            return item;
        })
    }
}
