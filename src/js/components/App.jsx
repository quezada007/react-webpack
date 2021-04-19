import React, { useState, Suspense, lazy } from 'react';

const Message = lazy(() => import('./Message'));

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Hello World</h1>
            <p>
                The count is
                {' '}
                {count}
            </p>
            <button type="button" onClick={() => setCount(count + 1)}>Increment Count</button>
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
};

export default App;