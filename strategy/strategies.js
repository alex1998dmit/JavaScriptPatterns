let post = {
  title: 'some title',
  desc: 'some desc',
  user_id: 5,
  id: 10,
};

function isAuthStrategy(request) {
  if (!request.token) {
    console.log('user is not exists');
    return false;
  }
  console.log('user exists');
  return true;
};

function isAdminStrategy(request) {
  if(request.role !== 'admin') {
    console.log('user has no rights for editing');
    return false;
  }
  console.log('user has rights');
  return true;
};

function isPostExistsStrategy(request) {
  if(request.post_id !== post.id){
    console.log(`Post doesn't exists`);
    return false;
  }
  console.log('post exists');
  return true;
};

function isPostAuthorStrategy(request) {
  if(request.user_id !== post.user_id){
    console.log('User is not author of post');
    return false;
  }
  console.log('user is author of post');
  return true;
};

module.exports = {
  isAuthStrategy,
  isAdminStrategy,
  isPostExistsStrategy,
  isPostAuthorStrategy,
};

 //  абстрактная фабрика и паттерн строителя