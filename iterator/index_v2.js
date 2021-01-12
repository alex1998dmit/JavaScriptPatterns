// using Iterator
class IteratorClass {
  constructor(data) {
      this.index = -1;
      this.data = data;
      this.done = false;
      this.checkDataType(data);

      this.nodeStatuses = [];
  }

  makeTreeObject(data) {
    return data.reduce((acc, item, itemIndex) => {
      if (item.nodes.length > 0) {
        return this.makeTreeObject(item.nodes);
      } else {
        this.nodeStatuses.filter((item) =>item.itemIndex )
      }
    }, []);
  }
  
  checkDataType(data) { // Проверяем получен массив или объект
      if (Array.isArray(data)) { // Перебор массива
          this.collectionLength = this.data.length - 1;
          this.collection = this.data;
          this.type = 'array';
      } else if (!Array.isArray(data) && typeof data == 'object') { // Перебор объекта
          this.collectionLength = Object.keys(this.data).length - 1;
          this.collection = Object.values(this.data);
          this.type = 'object';
      } else {
          throw new Error(`${this.constructor.name} получил data которую не может итерировать - ${typeof data}`)
      }
  }
  
  nextInDeep() {
    if (this.index < this.collectionLength) {

    }
  }

  next() {
      if (this.index < this.collectionLength) {
          this.index++;
          return {key: Object.keys(this.data)[this.index], value: this.collection[this.index],
                  done: false, index: this.index, type: this.type};
      } else {
          this.done = true;
          return {done: true, msg: 'достигнут конец коллекции', index: this.index, type: this.type};
      }
  }
  
  prev() {
      if (this.done) {
          this.done = false;
          this.index = this.collectionLength + 1;
      }
      this.index--;
      if (this.index > -1) {
          return {key: Object.keys(this.data)[this.index], value: this.collection[this.index],
                  done: false, index: this.index, type: this.type};
      } else {
          this.index = -1;
          return {done: this.done, msg: 'достигнуто начало коллекции', index: this.index, type: this.type};
      }
  }
}


// usage Iterator
let tree = new IteratorClass([
  {
    title: 'node1',
    nodes: [
      {
        title: 'node1.1',
        nodes: [
          {
            title: 'node1.1.2',
            nodes: [],
          }
        ],
      },
      {
        title: 'node1.2',
        nodes: [
          {
            title: 'node1.2.1',
            nodes: [],
          },
          {
            title: 'node1.2.2',
            nodes: [],
          }
        ],
      },
      {
        title: 'node1.3',
        nodes: [],
      }
    ]
  }
]);

let isIterable = true;
let currentNode = tree.next();
console.log(currentNode);

// while(isIterable) {
//   console.log(currentPerson);
//   if (currentPerson.done) {
//     isIterable = false;
//     break;
//   }
//   const movies = currentPerson.value.movies;
//   movies.forEach((movie) => {
//     console.log(movie);
//     stat[movie] = stat[movie] + 1;
//   })
//   currentPerson = users.next();
// }

// console.log(stat);
