import { expect } from 'chai';
import oppositeMatrix from '../src/opposite-matrix';

describe('oppositeMatrix', () => {

    it('shoult exist the oppositeMatrix instance', () => {
      expect(oppositeMatrix).to.exist;
    });

    it('shoult return [[-2, -7], [1, 0]] when oppositeMatrix([[2, 7], [-1, 0]])', () => {
        const A = [[2, 7], [-1, 0]];
        const R = [[-2, -7], [1, -0]];
        expect(oppositeMatrix(A)).to.deep.equal(R);
    });

});
