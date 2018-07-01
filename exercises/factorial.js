function factorial(number) {
  let result = 1;
  const recursive = (n) => {
    result *= n; 
    return (n > 1) ? recursive(n-1) : result;
  }
  return recursive(number);
}

function memoizedFactorial(number) {
  const cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    } else {
      const res = factorial(n);
      console.log('res', res);
      cache[n] = res;
      return res;
    }
  }
}

const t1 = Date.now();
// let cpy = memoizedFactorial();
let factorialResult = factorial(100);
let factorialResult2 = factorial(300);
const t2 = Date.now();

console.log('The time difference is', t2-t1);
console.log('Factorial result is', factorialResult, factorialResult2);