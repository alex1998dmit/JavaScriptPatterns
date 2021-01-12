const GetRestRequestFactory = require('../factories/GET');

class GetRequestBuilder {
    constructor(url) {
        this.request = new GetRestRequestFactory(url);
    }

    addResourceID(id) {
        this.request.id = id;
        return this;
    }

    addQueryParams(params) {
        this.request.params = params;
        return this;
    }

    addEntity(entity) {
        this.request.entity = entity;
        return this;
    }

    build() {
        return this.request;
    }
}

module.exports = GetRequestBuilder;