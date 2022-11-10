import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './root.reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
