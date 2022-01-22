import React, { useState, useEffect } from 'react';
import './Message.css'

function Message(props) {
    const[message, setMessage] = useState(props.message);

    useEffect(() => {
        setMessage(props.message);
        return () => setMessage(null);
    }, [props, message]);

    return (
        !!message &&
        <div>
            {message.name} : {message.text}
        </div>
    );
}

export default Message;