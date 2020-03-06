import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import reducer from './reducers';
// import App from './components/App'
import Root from './Root';

const store = createStore(reducer);

// render(
//     <Provider store = {store}>
//         <App/>
//     </Provider>,
//     document.getElementById('root')
// );

// Use Root Component
render(<Root store = {store}/>, document.getElementById('root'));