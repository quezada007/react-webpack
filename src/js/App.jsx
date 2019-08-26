// Import SCSS so they get compiled
import '../scss/styles.scss';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

// Check for Web Accessibility issues in development mode
if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require, import/no-extraneous-dependencies
    const axe = require('react-axe');
    // Check the console for any accessibility issues
    axe(React, ReactDOM, 1000);
}

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