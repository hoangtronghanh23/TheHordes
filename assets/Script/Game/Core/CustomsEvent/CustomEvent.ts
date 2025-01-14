import { Event } from 'cc';
import { EventKeyTypes } from './EventKeyTypes';

export class CustomEvent<T> extends Event {
    public data: T = null;

    constructor(name: EventKeyTypes, bubbles?: boolean, data?: T) {
        super(name, bubbles);
        this.data = data;
    }
}