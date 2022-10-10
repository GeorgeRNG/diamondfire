import Bracket from '../codeblocks/Bracket';

describe('Brackets', () => {
    test('Making a bracket', () => {
        const bracket = new Bracket('close');

        expect(bracket.id).toBe('bracket');
        expect(bracket.direct).toBe('close');
        expect(bracket.type).toBe('norm');
    });

    test('Changing via setters', () => {
        const bracket = new Bracket('open');
        
        expect(bracket.direct).toBe('open');
        expect(bracket.type).toBe('norm');

        bracket.open = false;
        expect(bracket.direct).toBe('close')

        bracket.sticky = true;
        expect(bracket.type).toBe('repeat');

        bracket.repeat = false;
        expect(bracket.type).toBe('norm');
    })
})