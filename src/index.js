import React from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
import App from './components/App';
// import data from './data';
import './styles/styles.scss';

const storesApiEndpoint = 'http://storefronts-backend.herokuapp.com/api/stores';
render(
    <App url={storesApiEndpoint} />, document.getElementById('app')
);
