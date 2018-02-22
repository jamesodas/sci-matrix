import { expect } from 'chai';
import subtractMatrices from '../src/subtract-matrices';

describe('subtractMatrices', () => {

    it('shoult exist the subtractMatrices instance', () => {
      expect(subtractMatrices).to.exist;
    });

    it('shoult return [[1, 4], [0, 7]] when subtractMatrices([[3, 3], [0, 9]], [[2, -1], [0, 2]])', () => {
        const A = [[1, 4], [0, 7]];
        const B = [[2, -1], [0, 2]];
        const R = [[3, 3], [0, 9]];
        expect(subtractMatrices(R, B)).to.deep.equal(A);
    });

    it('shoult return [[2, 3, 0], [0, 1, -1]] when subtractMatrices([[5, 4, 1], [1, 0, 1]], [[3, 1, 1], [1, -1, 2]])', () => {
        const A = [[2, 3, 0], [0, 1, -1]];
        const B = [[3, 1, 1], [1, -1, 2]];
        const R = [[5, 4, 1], [1, 0, 1]];
        expect(subtractMatrices(R, B)).to.deep.equal(A);
    });

    it('shoult return undefined when subtractMatrices([[2, 3], [0, 1]], [[3, 1, 1], [1, -1, 2]])', () => {
        const A = [[2, 3], [0, 1]];
        const B = [[3, 1, 1], [1, -1, 2]];
        expect(subtractMatrices(A, B)).to.deep.equal(undefined);
    });

});
