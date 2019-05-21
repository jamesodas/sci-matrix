const setSize = (A) => {
  A.rows = A.length;
  A.columns = A[0] ? A[0].length : 0;
};

module.exports = setSize;
    