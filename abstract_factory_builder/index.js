const GetRequestBuilder = require('./builders/GET');
const PostRequestBuilder = require('./builders/POST');

const produceRequest = (type, url = 'https://yandex.com') => {
    const handlers = {
        'GET': url => new GetRequestBuilder(url),
        'POST': url => new PostRequestBuilder(url),
        'PUT': () => new GetRequestBuilder(),
        'DELETE': () => new GetRequestBuilder(),
    };
    const requestObj = handlers[type](url);
    return requestObj;
};

const getRequestObject = produceRequest('GET')
    .addEntity('developers')
    .addResourceID(5)
    .build();
const postRequestObject = produceRequest('POST')
    .addBody({
        title: 'New title',
        body: 'New body over here'
    })
    .addAuth('fsadd324324fdsafwrgoeaRPHOA-P234.DSA12321DASdsad')
    .build();

console.log(getRequestObject);
console.log(getRequestObject.generateRequestStr());
console.log(postRequestObject);
console.log(postRequestObject.generateRequestStr());