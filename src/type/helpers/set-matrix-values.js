const setMatrixValues = (A, B) => {
  for (let i = 0; i < B.length; i += 1) {
    A[i] = B[i].slice();
  }        
}

module.exports = setMatrixValues;
