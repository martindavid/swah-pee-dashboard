import { applyMiddleware ,createStore, combineReducers } from 'redux';
import { promiseMiddleware } from './middleware';

import page from './reducers/page';

const reducer = combineReducers({
    page
})

const getMiddleware = () => {
    return applyMiddleware(promiseMiddleware);
}

const store = createStore(reducer,getMiddleware());

export default store;