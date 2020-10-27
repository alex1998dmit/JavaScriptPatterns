// strategies
function quickStrategy(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];
    
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickStrategy(left).concat(pivot, quickStrategy(right));
};

function bubbleStrategy(inputArr) {
  console.log('sorted by quick sort');
  let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

function selectModeStrategy(arr) {
  for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
    let indexMin = i;
    for (let j = i + 1; j < l; j++) {
        if (arr[indexMin] > arr[j]) {
            indexMin = j;
        }
    }
    if (indexMin !== i) {
        [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
}
return arr;
};

class ArraySort {
  constructor(method) {
    this.method = method;
    this.arr = [];
  }

  checkout() {
    return this.method(this.arr);
  }

  setStrategy(method) {
    this.method = method;
  }

  setArray(arr) {
    this.arr = arr;
  }
};

const quckSort = new ArraySort(quickStrategy);
const bubbleSort = new ArraySort(bubbleStrategy);
const selectSort = new ArraySort(selectModeStrategy);

const arr1 = [1, 2, 5, 3, 0, 10];
const arr2 = [11, 6, 4, 9, 0, 13];
const arr3 = [21, 22, 25, 23, 20, 210];

quckSort.setArray(arr1);
console.log('sorted quick strategy');
console.log(quckSort.checkout());

bubbleSort.setArray(arr2);
console.log('sorted babble strategy');
console.log(bubbleSort.checkout());

selectSort.setArray(arr3);
console.log('sorted strategy');
console.log(selectSort.checkout());

const notSortFunc = function(arr) {
  return arr;
};

console.log('default strategy');
selectSort.setArray([3,1,5,2]);
selectSort.setStrategy(notSortFunc);
console.log(selectSort.checkout());