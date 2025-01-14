import { _decorator, Component, director, Node } from 'cc';
import { ISubject } from '../../Interface/ISubject';
import { EventKeyTypes } from './CustomsEvent/EventKeyTypes';

const { ccclass, property } = _decorator;

export type EventCustomCallback = (data: any) => void;

@ccclass('EventManager')
export class EventManager extends Component implements ISubject {
    private observers: Map<EventKeyTypes, EventCustomCallback[]> = new Map();


    addObserver(eventKey: EventKeyTypes, callback: EventCustomCallback): void {
        if (!this.observers.has(eventKey)) {
            this.observers.set(eventKey, []);
        }
        const observersForKey = this.observers.get(eventKey)!;
        if (!observersForKey.includes(callback)) {
            observersForKey.push(callback);
        }
    }

    removeObserver(eventKey: EventKeyTypes, callback: EventCustomCallback): void {
        const observersForKey = this.observers.get(eventKey);
        if (observersForKey) {
            this.observers.set(
                eventKey,
                observersForKey.filter(cb => cb !== callback)
            );
        }
    }

    notifyObservers(eventKey: EventKeyTypes, data?: any): void {
        const observersForKey = this.observers.get(eventKey);
        if (observersForKey) {
            for (const callback of observersForKey) {
                callback(data);
            }
        }
    }

}