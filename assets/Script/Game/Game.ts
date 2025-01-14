import { _decorator, Component, Node } from 'cc';
import { VirtualJoystic } from '../Input/VitualJoystic';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    @property(VirtualJoystic) private virtualJoystic: VirtualJoystic;

    onLoad(){
        this.virtualJoystic.init();
    }
}


