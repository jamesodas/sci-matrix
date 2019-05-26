const setSize = (A) => {
  Object.defineProperty(A, 'rows', { enumerable: false, value: A.length });
  Object.defineProperty(A, 'columns', { enumerable: false, value: A[0] ? A[0].length : 0 });
};

module.exports = setSize;
    