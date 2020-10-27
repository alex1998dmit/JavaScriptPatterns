const post = {
  id: 10,
  title: 'Тайтл 1',
  desc: 'Описание',
  user_id: 5,
};

// strategies
function isAuthStrategy(request) {
  if (!request.token) {
    console.log('user is not exists');
    return false;
  }
  return true;
};

function isAdminStrategy(request) {
  if(request.role !== 'admin') {
    console.log('user has no rights for editing');
    return false;
  }
  return true;
};

function isPostExistsStrategy(request) {
  if(request.post_id !== post.id){
    console.log(`Post doesn't exists`);
    return false;
  }
  return true;
};

function isPostAuthorStrategy(request) {
  if(request.user_id !== post.user_id){
    console.log('User is not author of post');
    return false;
  }

  return true;
};


class Middleware {
  constructor(method) {
    this.method = method;
    this.request = {};
    this.next = this.handleRequest;
  }

  checkout() {
    return this.method(this.request);
  }

  setStrategy(method) {
    this.method = method;
  }

  setRequest(request) {
    this.request = request;
  }

  handleRequest(request) {
    console.log('All middlewares passed by requst: ', request);
    post.title = request.title;
    console.log('post has been updated', post);
  }

  setNext(next) {
    this.next = next;
    return next;
  }
};

class AuthStrategy extends Middleware  {
  constructor() {
   super();
  }

  handleRequest(request) {
    if(!request.token){
      console.log('user is not exists');
      return ;
    }
    this.next.handleRequest(request);
  }
}

class IsAdminStrategy extends Middleware  {
  constructor() {
   super();
  }

  handleRequest(request) {
    if(request.role !== 'admin') {
      console.log('user has no rights for editing');
      return ;
    }
    this.next.handleRequest(request);
  }
}

class IsPostExistsStrategy extends Middleware  {
  constructor() {
   super();
  }

  handleRequest(request) {
    if(request.post_id > 15){
      console.log(`Post doesn't exists`);
      return ;
    }
    this.next.handleRequest(request);
  }
}

class IsPostAuthorStrategy extends Middleware  {
  constructor() {
   super();
  }

  handleRequest(request) {
    if(request.user_id !== 5){
      console.log('User is not author of post');
      return ;
    }
    this.next.handleRequest(request);
  }
}

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


let strategyPipeline = {
  handleRequest: function(request){
    let isAuth = new AuthStrategy();
    let isAdmin = new IsAdminStrategy();
    let isPostExists = new IsPostExistsStrategy();
    let isPostAuthor = new IsPostAuthorStrategy();

    isAuth.setNext(isAdmin).setNext(isPostExists).setNext(isPostAuthor);
    isAuth.handleRequest(request);
  }
};