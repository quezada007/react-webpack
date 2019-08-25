// Import SCSS so they get compiled
import '../scss/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <div>
        <h1>Hello Wold</h1>
        <div>Icons</div>
        <ul>
            <li>
                Home
                <i className="icon-home" />
            </li>
            <li>
                Checkmark
                <i className="icon-check" />
            </li>
        </ul>
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));