const { Middleware } = require('./Middleware');
const {
  isAuthStrategy,
  isAdminStrategy,
  isPostExistsStrategy,
  isPostAuthorStrategy
} = require('./strategies');

const post = {
  id: 10,
  title: 'Тайтл 1',
  desc: 'Описание',
  user_id: 5,
};

// strategies
const isAuth = new Middleware(isAuthStrategy);
const isAdmin = new Middleware(isAdminStrategy);
const isPostExists = new Middleware(isPostExistsStrategy);

const request1 = {
  token: true,
  role: 'admin',
  post_id: 10,
  user_id: 5,
  title: 'Обновленный title 1',
};

const request2 = {
  token: false,
  role: 'admin',
  post_id: 23,
  user_id: null,
  title: 'Обновленный title 2',
};

const request3 = {
  token: true,
  role: 'admin',
  post_id: 4,
  user_id: 7,
  title: 'Также обновленный title 3',
};

isAuth.setRequest(request1);
console.log(isAuth.checkout());

isAdmin.setRequest(request2);
console.log(isAdmin.checkout());

isPostExists.setRequest(request3);
console.log(isPostExists.checkout());


isPostExists.setRequest(request1);
isPostExists.setStrategy(isPostAuthorStrategy);
console.log(isPostExists.checkout());