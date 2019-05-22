import checkIsMatrixOfNumbers from '../is-matrix-of-numbers';
import setIdentity from '../set-identity';
import isIdentity from './is-identity';
import isSquare from './is-square';
import isRow from './is-row';
import isColumn from './is-column';
import theArgumentsAreValid from './the-argument-are-valid';
import setZero from './set-zero';
import setSize from './set-size';

class Matrix extends Array {
  constructor(...args) {
    super();

    /** 
     * tipos de matrizes:
     *  - linha, coluna, quadrada, retangular
     * 
     * Propriedades:
     *  - zero, identidade, diagonal, simetrica, triangular
    */
    this.type = undefined;
    if (theArgumentsAreValid(args, checkIsMatrixOfNumbers)) {
      if (args[0].constructor === Array) {
        for (let i = 0; i < args[0].length; i += 1) {
          this[i] = args[0][i].constructor === Array ? args[0][i].slice() : args[0][i];
        }        
      } else {
        const m = args[0];
        const n = args[1];
        setZero(this, m ,n);
      }
    }

    setSize(this);

    if(isSquare(this)){
      Object.defineProperty(this, 'type', { enumerable: false, value: 'Square' });
      Object.defineProperty(this, 'identity', { enumerable: false, value: isIdentity(this) });
    } 
    else {
      if(isRow(this)) Object.defineProperty(this, 'type', { enumerable: false, value: 'Row' });
      else if(isColumn(this)) Object.defineProperty(this, 'type', { enumerable: false, value: 'Column' });
      else Object.defineProperty(this, 'type', { enumerable: false, value: 'Rectangular' });
    }

    //this.setIdentity = setIdentity;

    Object.freeze(this);
    this.forEach(item => {
      Object.freeze(item);
    });
  }
}

export default Matrix;
