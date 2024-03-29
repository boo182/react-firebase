import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './configureStore';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App store={store}/>
    </ThemeProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
