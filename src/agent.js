import superagentPromise from 'superagent-promise'
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = "http://swapi.co/api";

const responseBody = res => res.body;

const requests = {
    get: url =>
        superagent.get(`${API_ROOT}${url}`).then(responseBody),
    getDetail: url =>
        superagent.get(url).then(responseBody)
};

const API = {
    all: (part) =>
        requests.get(`/${part}`),
    detail: url =>
        requests.getDetail(url)
}

export default {
    API
};