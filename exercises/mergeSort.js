const data = require ('../data');

let time = 0;
class MergeSort {
  static divide(array) {
    const t1 = Date.now();
    const len = array.length;
    if (len === 1) {
      return array;
    }
    const halve = (len > 1) ? Math.ceil(len / 2) : 0;
    let firstHalve = array.slice(0, halve);
    let secondHalve = array.slice(halve);

    firstHalve = MergeSort.divide(firstHalve);
    secondHalve = MergeSort.divide(secondHalve);
    const merged = MergeSort.merge(firstHalve, secondHalve);
    const t2 = Date.now();
    time += t2-t1
    return merged;
  }

  static merge(a, b) {
    const temp = [];
    while (a.length && b.length) {
      if (a[0] > b[0]) {
        temp.push(b[0]);
        b.shift();
      } else {
        temp.push(a[0]);
        a.shift();
      }
    }
    while(a.length) {
      temp.push(a[0]);
      a.shift();
    }
    while(b.length) {
      temp.push(b[0]);
      b.shift();
    }
    return temp;
  }
}

const items = 
[23,34,2,1, 1,12,6,10];
// [23,34, 2,1]
// [23, 34]

// [23] [34]

console.log(MergeSort.divide(data));

console.log('Total time', time);

