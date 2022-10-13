import ActionBlock from './ActionBlock';
import { BlockType, Dynamic } from './Block';

export default abstract class SelectionBlock extends ActionBlock {
    target : Dynamic | BlockSelection;

    constructor(id : BlockType, action : Dynamic, target = '', items : unknown[] = [], not = false) {
        super(id, action, items, not);
        this.target = target;

    }
}

/**
 * What things a block can select.
 */
export type BlockTarget = 'AllPlayers' | 'Victim' | 'Shooter' | 'Damager' | 'Killer' | 'Default' | 'Selection' | 'Projectile' | 'LastEntity';
/**
 * What things a block can have as a selection
 */
export type BlockSelection = BlockTarget | '';