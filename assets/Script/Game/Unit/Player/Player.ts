import { _decorator, Component, KeyCode, Node, Vec2, Vec3 } from 'cc';
import {CustomComponent} from "db://assets/Script/Game/Core/CustomsEvent/CustomComponent";
import {IInput} from "db://assets/Script/Input/IInput";
import {KeyboardInput} from "db://assets/Script/Input/KeyBoardInput";
import {MultiInput} from "db://assets/Script/Input/MultiInput";
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends CustomComponent {
    input : IInput;
    speed : number = 1;
    check : boolean = false;
    start() {
        console.log(this.gameManager.eventManager);
        this.gameManager.eventManager.addObserver("SetUpPlayer",this.SetUpInput.bind(this));
        //this.SetUpInput();
    }
    SetUpInput(){
        const wasd = new KeyboardInput(KeyCode.KEY_W, KeyCode.KEY_S, KeyCode.KEY_A, KeyCode.KEY_D);
        const arrowKeys = new KeyboardInput(KeyCode.ARROW_UP, KeyCode.ARROW_DOWN, KeyCode.ARROW_LEFT, KeyCode.ARROW_RIGHT);
        const multiInput: MultiInput = new MultiInput([this.gameManager.virtualJoystic, wasd, arrowKeys]);
        console.log('muilti', multiInput.getAxis())
        this.init(multiInput);
    }
    update(dt : number){
       // if(!this.check) return;
        this.gameStic(dt);
    }
    public init(input: IInput){
        this.input = input;
        this.check = true;

        console.log('da vao', this.input);
    }
    public gameStic(dt : number){
        console
        if (this.input== null) return;
        this.move(dt);
    }
    public move(deltaTime : number){
        const movement: Vec2 = this.input.getAxis();
        if (!movement.equals(Vec2.ZERO)) {
            movement.x *= deltaTime * this.speed;
            movement.y *= deltaTime * this.speed;

            const newPosition: Vec3 = this.node.worldPosition;
            newPosition.x += movement.x;
            newPosition.z += movement.y;

            this.node.setWorldPosition(newPosition);

            //if (!this.isMoveAnimationPlaying) {
            //    this.isMoveAnimationPlaying = true;
            //    this.animation.play("Move");
            //}


        }
    }

}


