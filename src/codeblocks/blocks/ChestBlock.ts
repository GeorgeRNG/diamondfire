import Block, { BlockType } from "./Block";

export abstract class ChestBlock extends Block {
    args : {items: unknown[]};

    constructor(id : BlockType, items : unknown[] = []) {
        super(id);
        this.args = {items};
    }
}