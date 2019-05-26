import isMatrix from './is-matrix';

const theArgumentsAreValid = (args) => {

  if(args.length === 1 && isMatrix(args[0])) return true;

  if(args.length === 3 
    && typeof args[0] === 'string'
    && typeof args[1] === 'number'
    && typeof args[2] === 'number') return true;

  return false;
}

module.exports = theArgumentsAreValid;