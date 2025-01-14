import { _decorator, Component, Node, Vec3 } from 'cc';
import { ICanGetGameManager } from '../../../Interface/ICanGetGameManager';
import {Game} from "db://assets/Script/Game/Game";

const { ccclass, property } = _decorator;

@ccclass('CustomComponent')
export class CustomComponent extends Component implements ICanGetGameManager {
    gameManager: Game = null;

    setGameManager(manager: Game): void {
        this.gameManager = manager;
    }
}