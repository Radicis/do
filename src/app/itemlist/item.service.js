import { Injectable } from '@angular/core';
import { ITEMS } from './mock-items';

@Injectable()
export class ItemService {
    getItems() {
        return ITEMS;
    }
}
