import { createStore } from 'redux';
import { combineReducers } from 'redux';
import cartReducer from './cart-reducer'

const allReducers = {
    shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

let store = createStore(rootReducer);

export default store;

