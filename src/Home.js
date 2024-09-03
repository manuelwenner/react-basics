import React, { useState } from 'react';
import Greetings from './Greetings';
import DancingEmoji from './DancingEmoji';
import DancingEmojiHooked from './DancingEmojiHooked';
import List from './List';
import DancingEmojiHookedSimple from './DancingEmojiHookedSimple';


const Home = () => {
    const movies = [
        { id: 1, title: 'Pulp Fiction' },
        { id: 2, title: 'From dusk till dawn' },
        { id: 3, title: 'Inception' },
        { id: 4, title: 'Avengers: Endgame' },
        { id: 5, title: 'The Dark Knight' }
    ]

    const GreetingsES6 = (props) => {
        return <div>ES6 Hallo {props.name}</div>
    }

    const GreetingsES6ExProps = ({ name }) => {
        return <div>ES6 Hallo {name}</div>
    }


    const defaultStatus = 'the bar';
    const [status, setStatus] = useState(defaultStatus);

    const changeStatus = () => {
        setStatus((status === defaultStatus) ? 'the dancefloor' : defaultStatus);
    }

    return (
        <>
            <Greetings name="an Alle" />
            <GreetingsES6 name="an Alle" />
            <GreetingsES6ExProps name="an Alle" />
            <DancingEmoji />
            <DancingEmojiHooked />
            <List items={movies} />
            <DancingEmojiHookedSimple status={status} changeStatus={changeStatus} />
        </>

    )
}

export default Home;