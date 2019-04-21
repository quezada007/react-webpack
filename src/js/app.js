// Import SCSS so they get compiled
import '../scss/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello Wold</h1>
                <div>Icons</div>
                <ul>
                    <li>Home <i className="icon-home"></i></li>
                    <li>Checkmark <i className="icon-check"></i></li>
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));