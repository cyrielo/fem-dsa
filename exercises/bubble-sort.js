const data = require ('../data');

function bubbleSort(items) {
  const t0 = Date.now();
  for(let i = 1; i < items.length - 1; i += 1) {
    for (let j = 0; j < items.length - 1; j += 1) {
      if (items[j] > items[j + 1]) {
        const temp = items[j+1];
        items[j+1] = items[j];
        items[j] = temp;
      }
    }
  }
  const t1 = Date.now();
  console.log('Total miliseconds', t1-t0);
  return items;
}

const items = [23,34,2,1,1,12,6,10];

console.log(bubbleSort(data));

// for k, loop through 1 to n-1
//   for i loop through 0 to n-2
//     if A[i] is greater than A[i+1]
//       swap A[i] with A[i+1]; 