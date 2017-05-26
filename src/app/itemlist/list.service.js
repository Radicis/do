import { Injectable } from '@angular/core';
import { ITEMS } from './mock-items';

@Injectable()
export class ListService {
    getItems() {

        let lists = [];

        let list = {name:"My First List", items:ITEMS[0]};
        lists.push(list);

        let list2 = {name:"My Second List", items:ITEMS[1]};
        lists.push(list2);

        return lists;
    }
}
