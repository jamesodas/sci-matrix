import Matrix from '../matrix';
import isMatrix from './is-matrix';


const isColumn = (A) => {
  console.log(A);
  return A.columns === 1;
};
  
module.exports = isColumn;
      