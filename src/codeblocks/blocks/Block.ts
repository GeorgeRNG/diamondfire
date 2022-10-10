/**
 * A string which df doesn't mind what is imported
 */
export type Dynamic = string;

export default abstract class Block {
    id: 'block' = 'block';
    block : Dynamic;

    constructor(block : any) {
        this.block = block;
    }
}