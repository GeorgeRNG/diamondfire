/**
 * A string which df doesn't mind what is imported
 */
export type Dynamic = string;

export type BlockType = string;

export default abstract class Block {
    id: 'block' = 'block';
    block : BlockType;

    constructor(block : BlockType) {
        this.block = block;
    }
}