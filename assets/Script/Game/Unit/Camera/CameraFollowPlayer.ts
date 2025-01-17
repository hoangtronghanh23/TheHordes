import { _decorator, Component, Node, Quat, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraFollowPlayer')
export class CameraFollowPlayer extends Component {
    @property(Node)
    target: Node | null = null;
    @property
    followSpeed: number = 5;
    @property(Vec3)
    offset: Vec3 = new Vec3(0, 0, -10);
    @property(Vec3)
    pivotOffset: Vec3 = new Vec3(0, 5, 0);
    cam : Node = null;
    onLoad(){
        this.cam = this.node;
        const result = new Vec3();
        const rotation = Quat.IDENTITY;
        //Vec3.add(result,Quat.transformVec3(new Vec3(), rotation, pivotOffset), Quat.transformVec3(new Vec3(), rotation, camOffset))
    }
}


