import _ from "lodash";

export function parseNumbers(input) {
  // Convert all strings to numbers and remove invalid entries
  const numbers = _.map(input, (str) => Number(str));
  return _.compact(numbers);
}

export function isValidOperation(operation) {
  // Check if the operation is one of the valid ones
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}
