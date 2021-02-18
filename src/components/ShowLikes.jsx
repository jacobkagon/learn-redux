import React from 'react';
import {useSelector} from 'react-redux'

const ShowLikes = () => {
    let input = useSelector(state => state.nums)
    return (
        <div>
        {input?.map((num, id) => (
            <div key={id}>{num}</div>
        ))}
        </div>
    );
}

export default ShowLikes;
