import { BlockType, Dynamic } from "./Block";
import Nottable from "./Nottable";

export default abstract class ActionBlock extends Nottable {
    action: Dynamic;

    constructor(id : BlockType, action : Dynamic, items? : unknown[], not = false) {
        super(id,items,not);
        this.action = action;
    }
}