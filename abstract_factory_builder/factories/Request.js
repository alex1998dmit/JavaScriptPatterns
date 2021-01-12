class Request {
    constructor(method, url) {
        this.method = method;
        this.url = url;
    }

    getRequestType() {
        return this.method;
    }
}

module.exports = Request;
