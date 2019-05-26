import checkIsMatrixOfNumbers from './helpers/is-matrix-of-numbers';
import setIdentity from './helpers/set-identity';
import isIdentity from './helpers/is-identity';
import isSquare from './helpers/is-square';
import isRow from './helpers/is-row';
import isColumn from './helpers/is-column';
import theArgumentsAreValid from './helpers/the-arguments-are-valid';
import setZero from './helpers/set-zero';
import setSize from './helpers/set-size';

import isDiagonal from './helpers/is-diagonal';
import isMatrix from './helpers/is-matrix';
import setMatrixValues from './helpers/set-matrix-values';

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

    //console.log(theArgumentsAreValid(args));
    if (theArgumentsAreValid(args)) {
      if (isMatrix(args[0])) {
          setMatrixValues(this, args[0]);
      } else {
        switch(args[0]){
          case 'zero':
            setZero(this, args[1], args[2]);
            break;
          case 'identity':
            setIdentity(this, args[1], args[2]);
            break;
        }
      }
    }

    setSize(this);

    //console.log('isDiagonal', isDiagonal(this));

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
