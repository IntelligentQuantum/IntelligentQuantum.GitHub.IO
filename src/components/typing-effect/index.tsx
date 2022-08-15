import React from 'react';

import useTyped from '../../hooks/use-typed';

const TypingEffect = (props: { words: string[] }) =>
{
    const typing = useTyped(props.words);

    return (
        <span>
            { typing }
        </span>
    );
};

export default TypingEffect;
