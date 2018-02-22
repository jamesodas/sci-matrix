import { expect } from 'chai';
import matrixSize from '../src/matrix-size';

describe('matrixSize', () => {

    it('shoult exist the matrixSize instance', () => {
      expect(matrixSize).to.exist;
    });

    it('shoult return [1, 1] when matrixSize([[7]])', () => {
        const A = [[7]];
        expect(matrixSize(A)).to.deep.equal([1, 1]);
    });

    it('shoult return [1, 1] when matrixSize([["a"]])', () => {
        const A = [['a']];
        expect(matrixSize(A)).to.deep.equal([1, 1]);
    });

    it('shoult return [1, 0] when matrixSize([[]])', () => {
        const A = [[]];
        expect(matrixSize(A)).to.deep.equal([1, 0]);
    });

    it('shoult return undefined when matrixSize([1])', () => {
        const A = [1];
        expect(matrixSize(A)).to.deep.equal(undefined);
    });

    it('shoult return [1, 1] when matrixSize([["a"]])', () => {
        const A = [['a']];
        expect(matrixSize(A)).to.deep.equal([1, 1]);
    });

    it('shoult return [2, 2] when matrixSize([[1, 4], [0, 7]])', () => {
        const A = [[1, 4], [0, 7]];
        expect(matrixSize(A)).to.deep.equal([2, 2]);
    });

    it('shoult return [2, 3] when matrixSize([[2, 3, 0], [0, 1, -1]])', () => {
        const A = [[2, 3, 0], [0, 1, -1]];
        expect(matrixSize(A)).to.deep.equal([2, 3]);
    });

    it('shoult return [3, 1] when matrixSize([[1], [0], [3]])', () => {
        const A = [[1], [0], [3]];
        expect(matrixSize(A)).to.deep.equal([3, 1]);
    });

    it('shoult return [1, 3] when matrixSize([[1, 0, 3]])', () => {
        const A = [[1, 0, 3]];
        expect(matrixSize(A)).to.deep.equal([1, 3]);
    });

    it('shoult return [3, 3] when matrixSize([[2, 3, 0], [0, 1, -1], [1, 0, 3]])', () => {
        const A = [[2, 3, 0], [0, 1, -1], [1, 0, 3]];
        expect(matrixSize(A)).to.deep.equal([3, 3]);
    });

});
