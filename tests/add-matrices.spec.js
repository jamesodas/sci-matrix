import { expect } from 'chai';
import addMatrices from '../src/add-matrices';

describe('addMatrices', () => {

    it('shoult exist the addMatrices instance', () => {
      expect(addMatrices).to.exist;
    });

    it('shoult return [[3, 3], [0, 9]] when addMatrices([[1, 4], [0, 7]], [[2, -1], [0, 2]])', () => {
        const A = [[1, 4], [0, 7]];
        const B = [[2, -1], [0, 2]];
        const R = [[3, 3], [0, 9]];
        expect(addMatrices(A, B)).to.deep.equal(R);
    });

    it('shoult return [[5, 4, 1], [1, 0, 1]] when addMatrices([[2, 3, 0], [0, 1, -1]], [[3, 1, 1], [1, -1, 2]])', () => {
        const A = [[2, 3, 0], [0, 1, -1]];
        const B = [[3, 1, 1], [1, -1, 2]];
        const R = [[5, 4, 1], [1, 0, 1]];
        expect(addMatrices(A, B)).to.deep.equal(R);
    });

    it('shoult return undefined when addMatrices([[2, 3], [0, 1]], [[3, 1, 1], [1, -1, 2]])', () => {
        const A = [[2, 3], [0, 1]];
        const B = [[3, 1, 1], [1, -1, 2]];
        expect(addMatrices(A, B)).to.deep.equal(undefined);
    });

});
