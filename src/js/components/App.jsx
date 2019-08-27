import { hot } from 'react-hot-loader/root';
import React from 'react';

class App extends React.Component {
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
                <h1>Hello World</h1>
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

export default hot(App);