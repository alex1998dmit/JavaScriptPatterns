// using Iterator
class IteratorClass {
  constructor(data) {
      this.index = -1;
      this.data = data;
      this.done = false;
      this.checkDataType(data);
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
let stat = {
  'Властелин колец': 0,
  'Форест Гамп': 0,
  'Гарри Поттер': 0,
};

const users = new IteratorClass([
  {
    name: 'Alexander', movies: ['Властелин колец', 'Форест Гамп'],
  },
  {
    name: 'Alexey', movies: ['Форест Гамп'],
  },
  {
    name: 'Petya', movies: ['Гарри Поттер', 'Властелин колец'],
  },
  {
    name: 'Nikola', movies: ['Гарри Поттер', 'Властелин колец'],
  }
]);

let isIterable = true;
let currentPerson = users.next();

while(isIterable) {
  console.log(currentPerson);
  if (currentPerson.done) {
    isIterable = false;
    break;
  }
  const movies = currentPerson.value.movies;
  movies.forEach((movie) => {
    console.log(movie);
    stat[movie] = stat[movie] + 1;
  })
  currentPerson = users.next();
}

console.log(stat);
