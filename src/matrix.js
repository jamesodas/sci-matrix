import isMatrixOfNumbers from './is-matrix-of-numbers';

function theArgumentsAreValid(args) {
  if (args.length === 0 || args.length > 2) return false;

  if (args.length === 1
     && args[0].constructor === Array
     && isMatrixOfNumbers(args[0])) {
    return true;
  } else if (args.length === 2
        && !Number.isNaN(args[0])
        && !Number.isNaN(args[1])) return true;

  return false;
}

class Matrix extends Array {
  constructor(...args) {
    super();
    if (theArgumentsAreValid(args)) {
      if (args[0].constructor === Array) {
        for (let i = 0; i < args[0].length; i += 1) {
          this[i] = args[0][i].constructor === Array ? args[0][i].slice() : args[0][i];
        }
      } else {
        const m = args[0];
        const n = args[1];
        for (let i = 0; i < m; i += 1) {
          this[i] = [];
          for (let j = 0; j < n; j += 1) {
            this[i][j] = 0;
          }
        }
      }
    }

    this.rows = this.length;
    this.columns = this[0] ? this[0].length : 0;
  }
}

export default Matrix;
