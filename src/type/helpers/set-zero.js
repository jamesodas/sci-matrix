const setZero = function (A, m, n) {
  for (let i = 0; i < m; i++) {
    A[i] = [];
    for (let j = 0; j < n; j++) {
      console.log("teste");
      A[i][j] = '0';
    }
  }
};

module.exports = setZero;
  