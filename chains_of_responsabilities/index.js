const { 
  IsPostAuthorStrategy,
  IsPostExistsStrategy,
  IsAdminStrategy,
  AuthStrategy
} = require('./handlers')

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
  post_id: 15,
  user_id: 7,
  title: 'Также обновленный title 3',
};

strategyPipeline.handleRequest(request2);
console.log('----------------');
strategyPipeline.handleRequest(request3);
console.log('----------------');
strategyPipeline.handleRequest(request1);
console.log('----------------');