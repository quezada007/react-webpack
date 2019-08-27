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

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState((state) => ({ count: state.count + 1 }));
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>Hello Wold</h1>
                <div>
                    The count is
                    {' '}
                    {count}
                </div>
                <button type="button" onClick={this.incrementCount}>Increment Count</button>
                <div>Icons</div>
                <ul>
                    <li>
                        Home
                        {' '}
                        <i className="icon-home" />
                    </li>
                    <li>
                        Checkmark
                        {' '}
                        <i className="icon-check" />
                    </li>
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));