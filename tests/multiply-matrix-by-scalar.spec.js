import { expect } from 'chai';
import multiplyMatrixByScalar from '../src/multiply-matrix-by-scalar';

describe('multiplyMatrixByScalar', () => {

    it('shoult exist the multiplyMatrixByScalar instance', () => {
      expect(multiplyMatrixByScalar).to.exist;
    });

    it('shoult return [[6, 21], [-3, 0]] when multiplyMatrixByScalar([[2, 7], [-1, 0]], 3)', () => {
        const A = [[2, 7], [-1, 0]];
        const x = 3;
        const R = [[6, 21], [-3, 0]];
        expect(multiplyMatrixByScalar(A, x)).to.deep.equal(R);
    });

    it('shoult return [[15, -15, 5], [-5, 0, 5], [0, 25, 35]] when multiplyMatrixByScalar([[3, -3, 1], [-1, 0, 1], [0, 5, 7]], 5)', () => {
        const A = [[3, -3, 1], [-1, 0, 1], [0, 5, 7]];
        const x = 5;
        const R = [[15, -15, 5], [-5, 0, 5], [0, 25, 35]];
        expect(multiplyMatrixByScalar(A, x)).to.deep.equal(R);
    });


});
