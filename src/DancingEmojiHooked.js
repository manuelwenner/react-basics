import React, {useState} from 'react';

const DancingEmojiHooked = () => {
    const defaultStatus = 'the bar';
    const [status, setStatus] = useState(defaultStatus);

    const changeStatus = () => {
        setStatus((status === defaultStatus) ? 'the dancefloor' : defaultStatus);
    }

    return (
        <div>
            <p>Hi, I'm hooked at {status}</p>
            <button onClick={changeStatus}>wechseln</button>
        </div>
    )
};

export default DancingEmojiHooked;