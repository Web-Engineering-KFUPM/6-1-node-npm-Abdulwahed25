export function add(numbers) {
  // Sum all numbers in the array
  return numbers.reduce((total, num) => total + num, 0);
}

export function subtract(numbers) {
  // Subtract all numbers in order
  return numbers.slice(1).reduce((total, num) => total - num, numbers[0]);
}

export function multiply(numbers) {
  // Multiply all numbers together
  return numbers.reduce((total, num) => total * num, 1);
}

export function divide(numbers) {
  // Divide all numbers in order
  return numbers.slice(1).reduce((total, num) => total / num, numbers[0]);
  
}