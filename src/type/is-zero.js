const isZero = (A) => {
  const m = A.length;
  const n = A[0] ? A[0].length : 0;
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if(A[i][j] !== 0) return false;
    }
  }
  return true;
};

module.exports = isZero;
  