import Block from "./Block";

/**
 * Else block.
 * Has no data.
 */
export default class Else extends Block {
    block : 'else' = 'else';

    constructor() {
        super('else')
    }
}