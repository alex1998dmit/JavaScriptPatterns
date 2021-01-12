const PostRestRequestFactory = require('../factories/POST');

class PostRequestBuilder {
    constructor(url) {
        this.request = new PostRestRequestFactory(url);
    }

    addBody(body) {
        this.request.body = body;
        return this;
    }

    addAuth(auth) {
        this.request.auth = auth;
        return this;
    }

    build() {
        return this.request;
    }
}

module.exports = PostRequestBuilder;