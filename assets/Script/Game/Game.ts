import { _decorator, director ,Component, Node, KeyCode } from 'cc';
import { VirtualJoystic } from '../Input/VitualJoystic';
import {EventManager} from "db://assets/Script/Game/Core/EventManager";
import {ICanGetGameManager} from "db://assets/Script/Interface/ICanGetGameManager";
import { CustomComponent } from './Core/CustomsEvent/CustomComponent';
import { MultiInput } from '../Input/MultiInput';
import { KeyboardInput } from '../Input/KeyBoardInput';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    @property(VirtualJoystic) public virtualJoystic: VirtualJoystic;
    eventManager: EventManager = null;
    protected onLoad(){
        this.eventManager = this.node.getComponent(EventManager);
        director.getScene().getComponentsInChildren(CustomComponent).forEach((component) => {
            (component as unknown as ICanGetGameManager).setGameManager(this);
        })
    }
    start(){
        this.SetUp();
    }
    private SetUp(){
        this.virtualJoystic.init();
        this.eventManager.notifyObservers("SetUpPlayer");
    }

}


