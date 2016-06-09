import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './App.js';
import {configureStore} from './store';

const store = configureStore()

render (
  <Provider store ={store}>
    <App></App>
  </Provider>, document.getElementById('container')
)
