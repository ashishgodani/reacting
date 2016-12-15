import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './pages/Layout';
import routes from './config/routes'

const app = document.getElementById('app');

ReactDOM.render(routes, app);
