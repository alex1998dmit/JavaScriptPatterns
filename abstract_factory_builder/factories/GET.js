const Request = require('./Request');

class GetRestRequestFactory extends Request {
    constructor(url) {
        super('GET', url);
    }

    generateRequestStr() {
        const req = this;
        return `
            axios({
                method: GET,
                url: ${req.url}${req.entity ? `/${req.entity}` : ''}${req.id ? `/${req.id}` : ''}${req.params ? `&${req.params.key}=${req.params.value}` : ''}
            })
        `
    }
}


module.exports = GetRestRequestFactory;
