import React from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
import App from './components/App';
import './styles/styles.scss';

const storesApiEndpoint = 'http://localhost:3000/api/stores';

render(
    <App url={storesApiEndpoint} />, document.getElementById('app')
);
