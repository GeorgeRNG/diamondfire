import Codeblock from "./Codeblock"

/**
 * All brackets possibilites
 */
export default class Bracket extends Codeblock {
    id : 'bracket' = 'bracket';
    direct : direct;
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
     * If the bracket is normal type
     */
    get normal(){ return !this.sticky }
    set normal(normal : boolean){ this.sticky = !normal; }
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