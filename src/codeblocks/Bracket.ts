import Codeblock from "./Codeblock"

/**
 * All brackets possibilites
 */
export default class Bracket extends Codeblock {
    id : 'bracket' = 'bracket';
    /**
     * Native storage for the bracket direction
     */
    direct : direct;
    /**
     * Native storage for if a bracket is for a repeat or not
     */
    type : type;

    constructor(direct : direct, type: type = 'norm') {
        super('bracket');
        this.direct = direct;
        this.type = type;
    }

    /**
     * If the piston is a sticky piston
     */
    get sticky() { return this.type === 'repeat'; }
    set sticky(sticky : boolean) { this.type = sticky ? 'repeat' : 'norm'; }
    /**
     * If the bracket is a repeat type
     */
    get repeat() { return this.sticky; }
    set repeat(repeat : boolean) { this.sticky = repeat; }

    /**
     * If the bracket is opening
     */
    get open() { return this.direct === 'open'; }
    set open(open : boolean) { this.direct = open ? 'open' : 'close' }
}

/**
 * The direction of a bracket
 */
export type direct = 'open' | 'close';
/**
 * If a bracket is used for a repeat block.
 * - `norm` is a normal piston
 * - `repeat` is a sticky piston
 */
export type type = 'norm' | 'repeat';