import { AsideActionTypes } from './aside.types';

const INITIAL_STATE =
{
    openAside: null
}

export const asideReducer = (state = INITIAL_STATE, action: any) =>
{
    switch (action.type)
    {
        case AsideActionTypes.SET_OPEN_ASIDE:
            return {
                ...state,
                openAside: action.payload
            }
        default:
            return state;
    }
}
