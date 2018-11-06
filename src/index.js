import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Main';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import store from './store/index'
import { addToCart }  from './store/cart-reducer';
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
console.log("initial state: ", store.getState());
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);
store.dispatch(addToCart('Coffee 500gm', 1, 250));
unsubscribe();
