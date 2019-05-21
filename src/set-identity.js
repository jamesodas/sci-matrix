const setIdentity = function () {
  this.identity = true;
  const m = this.rows;
  const n = this.columns;
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      this[i][j] = i === j ? 1 : 0;
    }
  }
  return this;
};

module.exports = setIdentity;
