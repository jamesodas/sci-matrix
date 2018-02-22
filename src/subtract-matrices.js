import oppositeMatrix from './opposite-matrix';
import addMatrices from './add-matrices';

const subtractMatrices = (A, B) => addMatrices(A, oppositeMatrix(B));

export default subtractMatrices;
