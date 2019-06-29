import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Beers from './Components/Beers/Beers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Beers />, document.getElementById('root'));

serviceWorker.unregister();
