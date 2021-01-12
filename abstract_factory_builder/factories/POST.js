const Request = require('./Request');

class PostRestRequestFactory extends Request {
    constructor(url) {
        super('POST', url);
    }

    generateRequestStr() {
        const req = this;
        return `
            axios({
                method: POST,
                url: ${req.url}
                body: ${JSON.stringify(req.body)},
                ${req.auth ?
                    `headers: {
                        Authorization: Bearer ${req.auth}
                    }` :
                    ''
                }
            })
        `
    }
}


module.exports = PostRestRequestFactory;
