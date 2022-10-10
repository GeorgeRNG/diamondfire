import { BlockType, Dynamic } from "./Block";
import { ChestBlock } from "./ChestBlock";

export type Inverted = '' | 'NOT'

/**
 * All blocks which can be NOT switched
 * Most blocks in df here can't actually be switched ingame.
 */
export default abstract class Nottable extends ChestBlock {
    inverted : Dynamic | Inverted

    constructor(id : BlockType, items? : unknown[], not = false) {
        super(id);
        this.inverted = '';
        this.not = not;
    }

    set not(not : boolean) { this.inverted = not ? 'NOT' : '' }
    get not() { return this.inverted === 'NOT' }
}