import React from 'react';

enum Phase
{
    TYPING,
    PAUSING,
    DELETING
}

const TYPING_INTERVAL = 150;
const PAUSE_MS = 1000;
const DELETING_INTERVAL = 50;

const useTyped = (words: string[]) =>
{
    const [selectedIndex, setSelectIndex] = React.useState(0);
    const [phase, setPhase] = React.useState(Phase.TYPING);
    const [typed, setTyped] = React.useState('');

    React.useEffect(() =>
    {
        switch (phase)
        {
            case Phase.TYPING:
            {
                const nextTyped = words[selectedIndex].slice(0, typed.length + 1);

                if (nextTyped === typed)
                {
                    setPhase(Phase.PAUSING);
                    return;
                }

                const timeout = setTimeout(() =>
                {
                    setTyped(nextTyped);
                }, TYPING_INTERVAL);

                return () => clearTimeout(timeout);
            }
            case Phase.DELETING:
            {
                if (!typed)
                {
                    const nextIndex = selectedIndex + 1;
                    setSelectIndex(words[nextIndex] ? nextIndex : 0);
                    setPhase(Phase.TYPING);
                    return;
                }

                const nextRemaining = words[selectedIndex].slice(0, typed.length - 1);

                const timeout = setTimeout(() =>
                {
                    setTyped(nextRemaining);
                }, DELETING_INTERVAL);

                return () => clearTimeout(timeout);
            }
            case Phase.PAUSING:
            default:
                const timeout = setTimeout(() =>
                {
                    setPhase(Phase.DELETING);
                }, PAUSE_MS);

                return () => clearTimeout(timeout);
        }
    }, [words, typed, selectedIndex, phase]);

    return typed;
};

export default useTyped;
