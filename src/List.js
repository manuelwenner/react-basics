import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
    return (
        <>
            <h1>Filme und Serien</h1>
            {
                props.items.map(item => (
                    <ListItem key={item.id} item={item.title} />
                ))
            }
        </>
    );
}

export default List;
