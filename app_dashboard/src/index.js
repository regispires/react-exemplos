import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './common/serviceWorker';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
