const setMatrixValues = (A, args) => {
  if (args[0].constructor === Array) {
    for (let i = 0; i < args[0].length; i += 1) {
      A[i] = args[0][i].constructor === Array ? args[0][i].slice() : args[0][i];
    }        
  } else if(args[0].constructor === String){
    const m = args[0];
    const n = args[1];
    setZero(A, m ,n);
  }
}

module.exports = setMatrixValues;
