import React from 'react';

const LikeyThings = () => {

    const thingsILike = ['music', 'cats', 'movies'];

    const listItems = thingsILike.map(thing =>
        <li>{thing}</li>
        );
    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default LikeyThings;