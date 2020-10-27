class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(fun) {
    this.observers.push(fun)
  }

  unsubscribe(fun) {
    this.observers = this.observers.filter(subscriber => subscriber !== fun);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data))
  }
}

let isSubscribed = false;
let subscribesNumber = 1;
const input = document.querySelector('.js-input');

const p1 = document.querySelector('.js-p1');
const p2 = document.querySelector('.js-p2');

const updateButton = () => {
  const label = isSubscribed ? 'Отписаться' : 'Подписаться';
  input.textContent=label;
};

const updateP2 = () => {
  const label = isSubscribed ? 2 : 1;
  p1.textContent = 'Подписчиков:' + label;
};

const updateP3 = (name) => {
  const label = isSubscribed ? `Вы подписались на канал ${name}` : `Вы не подписаны на канал`;
  p2.textContent = label;
};

const headingsObserver = new Observable();

headingsObserver.subscribe(updateButton);
headingsObserver.subscribe(updateP2);
headingsObserver.subscribe(updateP3);

console.log
input.addEventListener('click', () => {
  console.log('click');
  isSubscribed = !isSubscribed;
  headingsObserver.notify('Alexander Dmitriev');
});