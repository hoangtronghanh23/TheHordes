
import {EventKeyTypes} from "db://assets/Script/Game/Core/CustomsEvent/EventKeyTypes";
import {EventCustomCallback} from "db://assets/Script/Game/Core/EventManager";


export interface ISubject {
    addObserver(eventKey: EventKeyTypes, observer: EventCustomCallback): void;
    removeObserver(eventKey: EventKeyTypes, observer: EventCustomCallback): void;
    notifyObservers(eventKey: EventKeyTypes, data?: any): void;
}