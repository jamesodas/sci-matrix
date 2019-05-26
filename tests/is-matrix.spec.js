import { expect } from 'chai';
import isMatrix from '../src/type/helpers/is-matrix';

describe('isMatrix', () => {

    it('shoult exist the isMatrix instance', () => {
      expect(isMatrix).to.exist;
    });

    it('shoult return true when isMatrix( [ [2, 3, 4], [3, 4, 5], [4, 5, 6] ] )', () => {
        const A = [ [2, 3, 4], [3, 4, 5], [4, 5, 6] ];
        expect(isMatrix(A)).to.be.equal(true);
    });

    it('shoult return true when isMatrix( [ [2, 3, "a"], [3, 4, 5], [4, 5, 6] ] )', () => {
        const A = [ [2, 3, "a"], [3, 4, 5], [4, 5, 6] ];
        expect(isMatrix(A)).to.be.equal(false);
    });

    it('shoult return false when isMatrix( [ [2, 3], [3, 4, 5], [4, 5, 6] ] )', () => {
        const A = [ [2, 3], [3, 4, 5], [4, 5, 6] ];
        expect(isMatrix(A)).to.be.equal(false);
    });

    it('shoult return false when isMatrix( [ [2, 3, "a"], [3, 4, 5], [5, 6] ] )', () => {
        const A = [ [2, 3, "a"], [3, 4, 5], [5, 6] ];
        expect(isMatrix(A)).to.be.equal(false);
    });

    it('shoult return false when isMatrix( true )', () => {
        const A = true;
        expect(isMatrix(A)).to.be.equal(false);
    });

    it('shoult return false when isMatrix( "string" )', () => {
        const A = "string";
        expect(isMatrix(A)).to.be.equal(false);
    });

    it('shoult return false when isMatrix( object )', () => {
        const A = new Object;
        expect(isMatrix(A)).to.be.equal(false);
    });

});
