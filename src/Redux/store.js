import {legacy_createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {cartReducer} from './cartReducer'

const rootReducer=combineReducers({
    cart:cartReducer,
})

const store=legacy_createStore(rootReducer);

export {store};
