const setIdentity = function (A, m, n) {
  for (let i = 0; i < m; i += 1) {
    A[i] = [];
    for (let j = 0; j < n; j += 1) {
      A[i][j] = i === j ? 1 : 0;
    }
  }
};

module.exports = setIdentity;
