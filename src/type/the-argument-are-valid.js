const theArgumentsAreValid = (args, isMatrixOfNumbers) => {
  if (args.length === 0 || args.length > 2) return false;

  if (args.length === 1
      && args[0].constructor === Array
      && isMatrixOfNumbers(args[0])) {
    return true;
  } else if (args.length === 2
        && !Number.isNaN(args[0])
        && !Number.isNaN(args[1])) return true;

  return false;
}

module.exports = theArgumentsAreValid;