import {Game} from "db://assets/Script/Game/Game";


export interface ICanGetGameManager {
    gameManager: Game;
    setGameManager(manager: Game): void;
}