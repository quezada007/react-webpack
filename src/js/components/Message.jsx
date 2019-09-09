import React from 'react';

const Message = () => (
    <>
        <div>This component was loaded dynamically</div>
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
    </>
);

export default Message;