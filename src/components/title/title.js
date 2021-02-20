import React from 'react';
import HTitle from '../h-title/h-title';

const Title = ({hNumber = 1, text = '', smallText = '', isBig = false}) => {
    return (
        <HTitle number={hNumber} isBig={isBig} >
            {text}
            <small>{smallText}</small>
        </HTitle>
    );
}

export default Title;