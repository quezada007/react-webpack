import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';

const Message = lazy(() => import('./Message'));

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
                <p>
                    The count is
                    {' '}
                    {count}
                </p>
                <button type="button" onClick={this.incrementCount}>Increment Count</button>
                <p>When the count reaches 10, a new component will load dynamically.</p>
                {count >= 10
                    ? (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Message />
                        </Suspense>
                    )
                    : null}
            </div>
        );
    }
}

export default hot(App);