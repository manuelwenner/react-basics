import React from 'react';

const DancingEmojiHookedSimple = (props) => {
    return (
        <div>
            <p>Hi, I'm hooked at {props.status}</p>
            <button onClick={props.changeStatus}>wechseln</button>
        </div>
    )
};

export default DancingEmojiHookedSimple;