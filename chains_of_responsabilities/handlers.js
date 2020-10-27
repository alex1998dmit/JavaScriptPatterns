//Handler
let post = {
  title: 'some title',
  desc: 'some desc',
  user_id: 5,
  id: 10,
}

let Handler = function(){
  this.next = {
    handleRequest: function(request) {
      console.log('All middlewares passed by requst: ', request);
      console.log('post has been updated', post);
      post.title = request.title;
    }
  }
};

Handler.prototype.setNext = function(next){
  this.next = next;
  return next;
}
Handler.prototype.handleRequest = function(request){};

//Strategy1
let AuthStrategy = function() {};
AuthStrategy.prototype = new Handler();
AuthStrategy.prototype.handleRequest = function(request){
  if(!request.token){
    console.log('user is not exists');
    return ;
  }
  this.next.handleRequest(request);
};

//Strategy2
let IsAdminStrategy = function(){};
IsAdminStrategy.prototype = new Handler();
IsAdminStrategy.prototype.handleRequest = function(request){
  if(request.role !== 'admin') {
    console.log('user has no rights for editing');
    return ;
  }
  this.next.handleRequest(request);
};

//Strategy3
let IsPostExistsStrategy = function(){};
IsPostExistsStrategy.prototype = new Handler();
IsPostExistsStrategy.prototype.handleRequest = function(request){
  if(request.post_id !== post.id){
    console.log(`Post doesn't exists`);
    return ;
  }
  this.next.handleRequest(request);
};

//Strategy4
let IsPostAuthorStrategy = function(){};
IsPostAuthorStrategy.prototype = new Handler();
IsPostAuthorStrategy.prototype.handleRequest = function(request){
  if(request.user_id !== post.user_id){
    console.log('User is not author of post');
    return ;
  }
  this.next.handleRequest(request);
};

module.exports = {
  IsPostAuthorStrategy,
  IsPostExistsStrategy,
  IsAdminStrategy,
  AuthStrategy,
};