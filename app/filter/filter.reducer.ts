import { FilterActionTypes } from './filter.types';

const INITIAL_STATE =
{
    activeFilter: null
}

export const filterReducer = (state = INITIAL_STATE, action: any) =>
{
    switch (action.type)
    {
        case FilterActionTypes.SET_ACTIVE_FILTER:
            return {
                ...state,
                activeFilter: action.payload
            }
        default:
            return state;
    }
}
