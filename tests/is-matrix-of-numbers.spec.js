import { expect } from 'chai';
import isMatrixOfNumbers from '../src/type/helpers/is-matrix';

describe('isMatrixOfNumbers', () => {

    it('shoult exist the isMatrixOfNumbers instance', () => {
      expect(isMatrixOfNumbers).to.exist;
    });

    it('shoult return true when isMatrixOfNumbers( [ [2, 3, 4], [3, 4, 5], [4, 5, 6] ] )', () => {
        const A = [ [2, 3, 4], [3, 4, 5], [4, 5, 6] ];
        expect(isMatrixOfNumbers(A)).to.be.equal(true);
    });

    it('shoult return false when isMatrixOfNumbers( [ ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"] ] )', () => {
        const A = [ ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"] ];
        expect(isMatrixOfNumbers(A)).to.be.equal(false);
    });

    it('shoult return false when isMatrixOfNumbers( [ [2, 3, "a"], [3, 4, 5], [4, 5, 6] ] )', () => {
        const A = [ [2, 3, "a"], [3, 4, 5], [4, 5, 6] ];
        expect(isMatrixOfNumbers(A)).to.be.equal(false);
    });

    it('shoult return false when isMatrixOfNumbers( [ [2, true, "a"], [3, 4, 5], [4, 5, 6] ] )', () => {
        const A = [ [2, true, "a"], [3, 4, 5], [4, 5, 6] ];
        expect(isMatrixOfNumbers(A)).to.be.equal(false);
    });

    it('shoult return false when isMatrixOfNumbers( [ [2, 3, 4], [3, 4, 5], [4, 5, false] ] )', () => {
        const A = [ [2, 3, 4], [3, 4, 5], [4, 5, false] ];
        expect(isMatrixOfNumbers(A)).to.be.equal(false);
    });

    it('shoult return false when isMatrixOfNumbers( [ [2, 3, 4], [3, undefined, 5], [4, 5, 6] ] )', () => {
        const A = [ [2, 3, 4], [3, undefined, 5], [4, 5, 6] ];
        expect(isMatrixOfNumbers(A)).to.be.equal(false);
    });

});
