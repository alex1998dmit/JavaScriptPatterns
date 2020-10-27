class Middleware {
  constructor(method) {
    this.method = method;
    this.request = {};
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
};

module.exports = {
  Middleware,
};
